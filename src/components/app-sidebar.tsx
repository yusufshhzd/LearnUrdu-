import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Yusuf Shahzad",
    email: "yusufshhzd@gmail.com",
    avatar: "/avatar/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Tenses",
      url: "/simple-past",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Simple Present",
          url: "simple-present",
        },
        {
          title: "Present Continuous",
          url: "#",
        },
        {
          title: "Present Perfect",
          url: "#",
        },
        {
          title: "Present Perfect Continuous",
          url: "#",
        },
        {
          title: "Simple Past",
          url: "simple-past",
        },
        {
          title: "Past Continuous",
          url: "#",
        },
        {
          title: "Past Perfect",
          url: "#",
        },
        {
          title: "Past Perfect Continuous",
          url: "#",
        },
        {
          title: "Simple Future",
          url: "#",
        },
        {
          title: "Future Continuous",
          url: "#",
        },
        {
          title: "Future Perfect",
          url: "#",
        },
        {
          title: "Present Perfect Continuous",
          url: "#",
        }
      ],
    }
  ]
  
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
