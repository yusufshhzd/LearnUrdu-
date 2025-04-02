import { Typography } from '@mui/material';
import ConjugationTable from '../components/ConjugationTable';
import React, { useContext } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarContext, SidebarContextProps } from "@/components/ui/sidebar"


export const SimplePresent = () => {

  const sidebarContext = useContext(SidebarContext);

  // ✅ Use a fallback in case context is null (for safety)
  const isSidebarOpen = sidebarContext?.state === "expanded";


  const data1 = [
    ['English', 'Masculine', 'Feminine'],
    ['I eat', 'Mai khata hoon', 'Mai khati hoon'],
    ['You eat (informal)', 'Tum khatay ho', 'Tum khati ho'],
    ['You eat (formal)', 'Aap khatay hain', 'Aap khati hain'],
    ['She/He/It eats (informal)', 'Wo khatay hain', 'Wo khati hain'],
    ['She/He/It eats (formal)', 'Wo khata he', 'Wo khati he']
  ];


  const data2 = [
    ['English', 'Masculine', 'Feminine'],
    ['We eat', 'Hum khatey hain', 'Hum khati hain'],
    ['You eat (informal)', 'Tum khatay ho', 'Tum khati ho'],
    ['You eat (formal)', 'Aap khatay hain', 'Aap khati hain'],
    ['They eat', 'Wo khatay hain', 'Wo khati hain']

  ];

  return (


  <SidebarProvider>
      <AppSidebar />
        <SidebarTrigger />
        <div className="flex-1 bg-blue-200 p-4">
          Simple Present Tense
        </div>
  </SidebarProvider>





  );
}

export default SimplePresent;