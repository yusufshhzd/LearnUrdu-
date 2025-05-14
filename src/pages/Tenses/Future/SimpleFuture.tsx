import { Typography, Paper, ListItem, List } from '@mui/material';
import ConjugationTable from '../../../components/ConjugationTable';
import React, { useContext, useEffect, useState } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarContext, SidebarContextProps } from "@/components/ui/sidebar"
import ChatBotWidget from '@/components/ChatBotWidget';
import { SupabaseClient } from '@supabase/supabase-js';
import ProgressBar from '@/components/ProgressBar/ProgressBar';


export const SimpleFuture = () => {



  const data1 = [
    ['Subject', 'Verb Ending (Masculine)', 'Verb Ending (Feminine)'],
    ['Mai (I)', '-ta hoon', '-ti hoon'],
    ['Tum (You, informal)', '-tay ho', '-ti ho'],
    ['Aap (You, formal)', '-tay hain', '-ti hain'],
    ['Woh (He/She/It)', '-ta hai', '-ti hai'],
    ['Woh (They)', '-tay hain', '-ti hain'],
    ['Hum (We)', '-tay hain', '-ti hain']
  ];


  return (

    <div>

      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />


        <div className="rightOfSidebar">
          <ProgressBar />

          <Typography variant="h4">Simple Future Tense</Typography>

          <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 8, marginTop: '50px' }} >
            <div className='card'>
              <Typography variant="h5">What is the Simple Future Tense?</Typography>
              <Typography style={{ textAlign: "center" }} variant="h6">✅ Describe actions that will happen in the future<br /> <i>I will eat</i> <br /> <i>Mai khaoonga</i></Typography>
            </div>
          </Paper>
        </div>


      </SidebarProvider>
    </div>
  );
}

export default SimpleFuture;