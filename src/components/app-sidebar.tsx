import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"
import { useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"


const data = {
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
          title: "Basic Sentence Structure",
          url: "basic-sentence-structure",
          isActive: false,
        },
        {
          title: "Noun Genders",
          url: "noun-genders",
          isActive: false,
        }
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
}



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const [isActive, setIsActive] = useState(false); // hilight

  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">LearnUrdu</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
