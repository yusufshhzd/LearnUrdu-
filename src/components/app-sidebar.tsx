import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "LearnUrdu",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Introduction",
      url: "introduction",
      isActive: false,
      items: [
        {
          title: "Hona - \"To Be\"",
          url: "hona",
          isActive: false,
        },
        {
          title: "Key Sentence Structure",
          url: "basic-sentence-structure",
          isActive: false,
        },
        {
          title: "Noun Genders",
          url: "noun-genders",
          isActive: false,
        },
      ],
    },
    {
      title: "Tenses",
      url: "tenses",
      isActive: false,
      items: [
        {
          title: "Simple Present",
          url: "simple-present",
          isActive: false,
        },
        {
          title: "Present Continuous",
          url: "present-continuous",
          isActive: false, //this controls the highlight!!!!!!!
        },
        {
          title: "Present Perfect",
          url: "present-perfect",
          isActive: false,
        },
        {
          title: "Present Perfect Continuous",
          url: "present-perfect-continuous",
          isActive: false,
        },
        {
          title: "Simple Past",
          url: "simple-past",
          isActive: false,
        },
        {
          title: "Past Continuous",
          url: "past-continuous",
          isActive: false,
        },
        {
          title: "Past Perfect",
          url: "past-perfect",
          isActive: false,
        },
        {
          title: "Past Perfect Continuous",
          url: "past-perfect-continuous",
          isActive: false,
        },
        {
          title: "Simple Future",
          url: "simple-future",
          isActive: false,
        },
        {
          title: "Future Continuous",
          url: "future-continuous",
          isActive: false,
        },
        {
          title: "Future Perfect",
          url: "future-perfect",
          isActive: false,
        },
        {
          title: "Future Perfect Continuous",
          url: "future-perfect-continuous",
          isActive: false,
        },
      ],
    },
    {
      title: "Vocab",
      url: "#",
      isActive: false,
      items: [
        {
          title: "Greetings & Introductions",
          url: "greetings-introductions",
          isActive: false,
        },
        {
          title: "Home",
          url: "home-vocab",
          isActive: false,
        },
        {
          title: "Education",
          url: "education",
          isActive: false,
        },
        {
          title: "Food",
          url: "food",
          isActive: false,
        },
        {
          title: "Daily Routines",
          url: "daily-routines",
          isActive: false,
        },
      ],
    },
    {
      title: "Other",
      url: "#",
      isActive: false,
      items: [
        {
          title: "Postpositions",
          url: "postpositions",
          isActive: false,
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
    },
    {
      title: "Feedback",
      url: "#",
    },
  ],
  projects: [
   
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Learn Urdu</span>
                  <span className="truncate text-xs">By Yusuf Shahzad</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
