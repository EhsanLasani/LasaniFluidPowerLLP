"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
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
import { getLogoSource } from "@/lib/branding";
import { primaryNav } from "@/lib/navigation";

type CarbonShellProps = {
  children: ReactNode;
};

export function CarbonShell({ children }: CarbonShellProps) {
  const pathname = usePathname();

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Theme theme="g10">
          <SkipToContent />
          <Header aria-label="Lasani Fluid Power LLP" className="lasani-header">
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName href="/" prefix="" className="lasani-header__name">
              <Image
                src={getLogoSource("primary")}
                alt="Lasani Fluid Power LLP"
                width={170}
                height={58}
                priority
              />
              <span className="cds--assistive-text">Lasani Fluid Power LLP</span>
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
