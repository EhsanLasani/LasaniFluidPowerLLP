function Invoke-GitCommitPush {
    [CmdletBinding()]
    param(
        [string]$Message,
        [string]$Remote = "origin",
        [string]$Branch
    )

    $ErrorActionPreference = "Stop"

    if (-not $Branch) {
        $Branch = (git rev-parse --abbrev-ref HEAD).Trim()
    }

    if (-not $Message) {
        do {
            $Message = Read-Host "Commit message"
        } while (-not $Message)
    }

    git add -A | Out-Null
    git diff --cached --quiet
    $hasStagedChanges = ($LASTEXITCODE -ne 0)

    if ($hasStagedChanges) {
        git commit --message $Message | Out-Null
    }
    else {
        Write-Host "No staged changes after adding. Skipping git commit."
    }

    git push $Remote $Branch | Out-Null
}

Set-Alias -Name gcp -Value Invoke-GitCommitPush