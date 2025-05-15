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
    ['Mai (I)', '-oonga', '-oongi'],
    ['Tum (You, informal)', '-oge', '-ogi'],
    ['Aap (You, formal)', '-enge', '-engi'],
    ['Woh (He/She/It)', '-ega', '-egi'],
    ['Woh (They)', '-enge', '-engi'],
    ['Hum (We)', '-enge', '-engi']
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


          <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 4, marginTop: '50px' }} >
            <div className='card'>
              <Typography variant="h5">Sentence Structure: [Subject] + [Verbal Stem] + [Ending]</Typography>
              <Typography variant="h6">The ending depends on the number and gender of the <i>subject</i></Typography>
              <ConjugationTable data={data1} />
            </div>
          </Paper>

          <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }}>
          <div className="card">
            <Typography variant="h5">Examples</Typography>
            <Typography style={{ textAlign: "center" }} variant="h6"><b>I will play cricket</b><br /> <i>Mai cricket kheloonga</i> <br /></Typography>
            <Typography style={{ textAlign: "center" }} variant="h6"><b>You will watch a movie (female subject)</b><br /> <i>Tum movie dekhoongi</i> <br /></Typography>
            <Typography style={{ textAlign: "center" }} variant="h6"><b>She will read a book</b><br /> <i>Woh kitaab parhegi</i> <br /></Typography>
            <Typography style={{ textAlign: "center" }} variant="h6"><b>We will go shopping</b><br /> <i>Hum shopping jaayenge</i> <br /></Typography>
          </div>
        </Paper>


        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }}>
          <div className="card">
            <Typography variant="h5">Hona Exception</Typography>
            <Typography style={{ textAlign: "center" }} variant="h6">Instead of using "-enge" at the end of "ho" for hona, <br/> we simply use "nge"</Typography>
            <Typography style={{ textAlign: "center" }} variant="h6"><b>He will be there</b><br /> <i>Woh waha honge</i> <br /></Typography>
          </div>
        </Paper>

        </div>


      </SidebarProvider>
    </div>
  );
}

export default SimpleFuture;