import React, { useState } from "react"
import { SidebarContext, SidebarContextProps } from "@/components/ui/sidebar"

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [openMobile, setOpenMobile] = useState(false)

  const contextValue: SidebarContextProps = {
    state: open ? "expanded" : "collapsed",
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile: window.innerWidth <= 768,
    toggleSidebar: () => setOpen((prev) => !prev),
  }

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  )
}
