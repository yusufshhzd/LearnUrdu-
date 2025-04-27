import { Typography, Paper, ListItem, List } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarContext, SidebarContextProps } from "@/components/ui/sidebar"
import ChatBotWidget from '@/components/ChatBotWidget';
import { SupabaseClient } from '@supabase/supabase-js';
import ConjugationTable from '@/components/ConjugationTable';


export const NounGenders = () => {



  const data1 = [
    ['', 'Masculine', 'Feminine'],
    ['Marked Nouns', 'Nouns that end in -a/-aa', 'Nouns that end in -i/-ii'],
    ['Examples', 'ladkaa - "boy" \n kamaara - "room" \n bacha - "child boy"', 'ladki - "girl" \n kursi - "chair" \n bachii - "girl child"'],
    ['Unmarked Nouns', 'Nouns that do not end in -a/-aa', 'Nouns that do not end in -i/-ii'],
    ['Examples', 'ghar - "home" \n seb - "apple" \n phal - "fruit"', 'kitaab - "book" \n kamiiz - "shirt \n taswiir - "picture"']
  ];


  return (

    <div>

      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <div className="rightOfSidebar">
          <Typography variant="h4">Noun Genders</Typography>

          <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
            <div className='card'>
              <Typography variant="h5">What are noun genders?</Typography>
              <Typography style={{ textAlign: "center" }} variant="h6"> Nouns are divided into two types of gender, Masculine and Feminine </Typography>
              <Typography style={{ textAlign: "center" }} variant="h6">For example, <br />Room, house, etc. are "masculine" nouns <br /> Book, table, etc. are "feminine" nouns</Typography>
              <Typography style={{ textAlign: "center" }} variant="h6">There are no certain rules to learn about gender assignment to particular nouns</Typography>
            </div>
          </Paper>

          <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 4 / 4, marginTop: '50px' }} >
            <div className='card'>
              <ConjugationTable data={data1} />
            </div>
          </Paper>

        </div>
      </SidebarProvider>
    </div>
  );
}

export default NounGenders;