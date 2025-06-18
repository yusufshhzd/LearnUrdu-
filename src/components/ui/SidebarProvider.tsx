import React, { useState } from "react"
import { SidebarContext, SidebarContextProps } from "@/components/ui/sidebar"

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [openMobile, setOpenMobile] = useState(false)
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({})

  const toggleGroup = (group: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }))
  }

  const contextValue: SidebarContextProps = {
    state: open ? "expanded" : "collapsed",
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile: typeof window !== "undefined" && window.innerWidth <= 768,
    toggleSidebar: () => setOpen((prev) => !prev),
    openGroups,
    toggleGroup,
  }

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  )
}
