"use client";

import { MouseEvent, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Content,
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SideNav,
  SideNavItems,
  SideNavLink,
  SkipToContent,
  Theme,
} from "@carbon/react";
import { primaryNav } from "@/lib/navigation";

type CarbonShellProps = {
  children: ReactNode;
};

export function CarbonShell({ children }: CarbonShellProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigate = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    router.push(href);
  };

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Theme theme="g10">
          <SkipToContent />
          <Header aria-label="Lasani Fluid Power LLP">
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName href="/" prefix="Lasani">
              Fluid Power LLP
            </HeaderName>
            <HeaderNavigation aria-label="Primary navigation">
              {primaryNav.map((item) => (
                <HeaderMenuItem
                  key={item.href}
                  href={item.href}
                  isCurrentPage={
                    item.href === "/"
                      ? pathname === item.href
                      : pathname?.startsWith(item.href)
                  }
                  onClick={handleNavigate(item.href)}
                >
                  {item.title}
                </HeaderMenuItem>
              ))}
            </HeaderNavigation>
          </Header>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              {primaryNav.map((item) => (
                <SideNavLink
                  key={item.href}
                  isActive={
                    item.href === "/"
                      ? pathname === item.href
                      : pathname?.startsWith(item.href)
                  }
                  href={item.href}
                  onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                    event.preventDefault();
                    router.push(item.href);
                    if (isSideNavExpanded) {
                      onClickSideNavExpand?.();
                    }
                  }}
                >
                  {item.title}
                </SideNavLink>
              ))}
            </SideNavItems>
          </SideNav>
          <Content className="px-6 py-10 md:px-9">
            <div className="mx-auto w-full max-w-6xl">{children}</div>
          </Content>
        </Theme>
      )}
    />
  );
}
