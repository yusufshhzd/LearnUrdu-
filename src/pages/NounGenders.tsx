import { Typography, Paper, ListItem, List } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarContext, SidebarContextProps } from "@/components/ui/sidebar"
import ChatBotWidget from '@/components/ChatBotWidget';
import { SupabaseClient } from '@supabase/supabase-js';
import ConjugationTable from '@/components/ConjugationTable';


export const NounGenders = () => {



  const nouns = [
    ['', 'Masculine', 'Feminine'],
    ['Marked Nouns', 'Nouns that end in -a/', 'Nouns that end in -i'],
    ['Examples', 'ladka - "boy" \n kamaara - "room" \n bacha - "child boy"', 'ladki - "girl" \n kursi - "chair" \n bachi - "girl child"'],
    ['Unmarked Nouns', 'Nouns that do not end in -a', 'Nouns that do not end in -i'],
    ['Examples', 'ghar - "home" \n seb - "apple" \n phal - "fruit"', 'kitaab - "book" \n kamiiz - "shirt" \n taswiir - "picture"']
  ];


  const pluralNouns = [
    ['', 'Masculine', 'Feminine'],
    ['Marked Nouns', 'Nouns that end in -a', 'Nouns that end in -i'],
    ['Plural Rule', 'Change -a into -ay', 'Change -i into -iyan'],
    ['Examples', 'ladka → ladkay \n kamaara → kamaaray \n bacha → bachay', 'ladki → ladkiyan \n kursi → kursiyan \n bachii → bachiyaan'],
    ['Unmarked Nouns', 'Nouns that do not end in -a', 'Nouns that do not end in -i'],
    ['Plural Rule', 'No changes in form', 'Add suffix "-yen"'],
    ['Examples', 'ghar - "home" \n seb - "apple" \n phal - "fruit"', 'kitaab → kitaabyen \n kamiiz → kamiizyen  \n taswiir - taswiiryen']
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
              <Typography variant="h5">Noun Rules</Typography>
              <ConjugationTable data={nouns} />

              <Typography variant="h6"><i>These rules have many exceptions, such as:</i></Typography>
              <Typography variant="h5">Nouns ending in -a/-aa, but are feminine:</Typography>
              <Typography variant="h6">lataa - "leaf" <br />ghataa - "cloud"<br />dawaa - "medicine"<br />etc.</Typography>


              <Typography variant="h5">Nouns ending in -i/-ii, but are masculine:</Typography>
              <Typography variant="h6">saathi - "friend" <br />hathii - "elephant"<br />etc.</Typography>
            </div>
          </Paper>


          <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 4 / 4, marginTop: '50px' }} >
            <div className='card'>
              <Typography variant="h5">Plural Noun Rules</Typography>
              <ConjugationTable data={pluralNouns} />

              
            </div>
          </Paper>


          



        </div>
      </SidebarProvider>
    </div>
  );
}

export default NounGenders;