"use client";
// Shadcnblocks sidebar1. Navigation points only to implemented destinations.
import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FlaskConical, Inbox, Shield, Users } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

function SidebarLink(props: ComponentProps<typeof Link>) {
  const { setOpenMobile } = useSidebar();
  return <Link {...props} onNavigate={() => setOpenMobile(false)} />;
}

export function CrmShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const submissionsActive = pathname === "/crm";
  const inquiriesActive = pathname === "/crm/test-inquiries";
  const peopleActive =
    pathname === "/crm/people" || pathname.startsWith("/crm/people/");
  const currentPage = pathname.startsWith("/crm/people/")
    ? "Person"
    : peopleActive
      ? "People"
      : inquiriesActive
        ? "Test inquiries"
        : "Assessment Submissions";
  return (
    <SidebarProvider>
      <a
        href="#workspace"
        className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:bg-white focus:p-4"
      >
        Skip to workspace
      </a>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <SidebarLink href="/crm">
                  <span className="flex aspect-square size-8 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                    <Shield className="size-5" />
                  </span>
                  <span className="flex flex-col gap-0.5 leading-none">
                    <span className="font-medium">VA Loans for Vets CRM</span>
                    <span className="text-xs text-muted-foreground">
                      Team workspace
                    </span>
                  </span>
                </SidebarLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={submissionsActive}>
                    <SidebarLink
                      href="/crm"
                      aria-current={submissionsActive ? "page" : undefined}
                    >
                      <Inbox />
                      Assessment Submissions
                    </SidebarLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={inquiriesActive}>
                    <SidebarLink
                      href="/crm/test-inquiries"
                      aria-current={inquiriesActive ? "page" : undefined}
                    >
                      <FlaskConical />
                      Test inquiries
                    </SidebarLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={peopleActive}>
                    <SidebarLink
                      href="/crm/people"
                      aria-current={peopleActive ? "page" : undefined}
                    >
                      <Users />
                      People
                    </SidebarLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                Workspace
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{currentPage}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto">
            <UserButton />
          </div>
        </header>
        <main
          id="workspace"
          className="mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8"
        >
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
