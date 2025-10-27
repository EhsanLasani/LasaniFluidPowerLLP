#!/usr/bin/env node

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const AVAILABLE_THEMES = [
  "carbon-g10",
  "carbon-g90",
  "carbon-g100",
  "material-light",
  "material-dark",
];

const rawArgs = process.argv.slice(2);

if (rawArgs.length === 0 || rawArgs.includes("--help")) {
  console.error(
    [
      "Usage: node scripts/activate-theme.mjs <theme> [--out=app/globals.css]",
      "",
      `Available themes: ${AVAILABLE_THEMES.join(", ")}`,
      "",
      "By default the script overwrites app/globals.css in place.",
    ].join("\n"),
  );
  process.exit(1);
}

const targetTheme = rawArgs[0];
const outputFlag = rawArgs.find((arg) => arg.startsWith("--out="));

if (!AVAILABLE_THEMES.includes(targetTheme)) {
  console.error(`Unknown theme "${targetTheme}". Choose one of: ${AVAILABLE_THEMES.join(", ")}`);
  process.exit(1);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const globalsPath = path.join(projectRoot, "app", "globals.css");
const outputPath = outputFlag
  ? path.resolve(projectRoot, outputFlag.replace("--out=", ""))
  : globalsPath;

const source = readFileSync(globalsPath, "utf8");

const blockPattern =
  /\/\*\s*@theme\s+([a-z0-9\- ]+):start\s*\*\/([\s\S]*?)\/\*\s*@theme\s+[a-z0-9\- ]+:end\s*\*\//gi;

const processed = source.replace(blockPattern, (match, rawThemeList, blockBody) => {
  const themes = rawThemeList
    .split(/\s+/)
    .map((name) => name.trim())
    .filter(Boolean);

  if (!themes.includes(targetTheme)) {
    return "";
  }

  const cleanedBody = blockBody.replace(/:where\(([^)]+)\)/g, (_, selectors) => {
    const filteredSelectors = selectors
      .split(",")
      .map((selector) => selector.trim())
      .filter((selector) => selector.length > 0)
      .filter((selector) => !selector.includes("data-theme=") || selector.includes(`data-theme="${targetTheme}"`));

    return filteredSelectors.length ? `:where(${filteredSelectors.join(", ")})` : "";
  });

  const trimmedBody = cleanedBody.replace(/,{2,}/g, ",").replace(/\n\s*\n\s*\n+/g, "\n\n");

  return [
    `/* @theme ${targetTheme}:start */`,
    trimmedBody.trimEnd(),
    `/* @theme ${targetTheme}:end */`,
  ].join("\n");
});

const header = "/* Generated theme bundle. Do not edit manually. */\n";

writeFileSync(outputPath, `${header}${processed}`.replace(/\r\n/g, "\n"));

console.log(`Theme "${targetTheme}" activated. Output written to ${path.relative(projectRoot, outputPath)}.`);
