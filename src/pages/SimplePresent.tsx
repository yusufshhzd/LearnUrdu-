import { Typography, Paper, ListItem, List } from '@mui/material';
import ConjugationTable from '../components/ConjugationTable';
import React, { useContext } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarContext, SidebarContextProps } from "@/components/ui/sidebar"


export const SimplePresent = () => {



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
          <Typography variant="h4">Simple Present Tense</Typography>
          
          <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 8, marginTop: '50px' }} >
            <div className='tenseCard'>
              <Typography variant="h5">What is the Simple Present Tense?</Typography>
              <Typography style={{ textAlign: "center" }} variant="h6">✅ Habits<br /> <i>Mai har roz chai peeta hoon</i> <br /> <i>I drink tea every day</i></Typography>
              <Typography style={{ textAlign: "center" }} variant="h6">✅ Facts<br /> <i>Suraj purab se nikalta hai</i> <br /> <i>The sun rises in the east</i></Typography>
              <Typography style={{ textAlign: "center" }} variant="h6">✅ Routines<br /> <i>Woh school jaati hai</i> <br /> <i>She goes to school</i></Typography>
            </div>
          </Paper>

          <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 4, marginTop: '50px' }} >
            <div className='tenseCard'>
              <Typography variant="h5">Sentence Structure: [Subject] + [Verbal Stem] + [Ending]</Typography>
              <Typography variant="h6">The ending depends on the number and gender of the <i>subject</i></Typography>
              <ConjugationTable data={data1} />
            </div>
          </Paper>

          <div className='rowDisplay'>

          <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1/2, marginTop: '50px' }}>
                <div className="tenseCard">
                  <Typography variant="h5">Examples</Typography>
                  <Typography style={{ textAlign: "center" }} variant="h6"><b>I eat roti</b><br /> <i>Mai roti khata hoon</i> <br /></Typography>
                  <Typography style={{ textAlign: "center" }} variant="h6"><b>She reads a book</b><br /> <i>Wo kitaab parhti hai</i> <br /></Typography>
                  <Typography style={{ textAlign: "center" }} variant="h6"><b>We play cricket</b><br /> <i>Hum cricket kheltay hain</i> <br /></Typography>
                  <Typography style={{ textAlign: "center" }} variant="h6"><b>You do not sleep</b><br /> <i>Aap nahi sotay hain</i> <br /></Typography>
                </div>
              </Paper>

              <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1/2, marginTop: '50px' }}>
                <div className="tenseCard">
                  <Typography variant="h5">Forming Questions</Typography>
                  <Typography variant="h6">Add "kya" to the beginning</Typography>
                  <Typography style={{ textAlign: "center" }} variant="h6"><b>Do you go to work? (female)</b><br /> <i>Kya tum kaam par jaati ho?</i> <br /></Typography>
                  <Typography style={{ textAlign: "center" }} variant="h6"><b>Does he run?</b><br /> <i>Kya wo bhaagta hai?</i> <br /></Typography>
                  <Typography style={{ textAlign: "center" }} variant="h6"><b>Do you drink tea?</b><br /> <i>Kya aap chai peeti hain?</i> <br /></Typography>
                </div>
              </Paper>



          </div>
          





        </div>
      </SidebarProvider>


    </div>





  );
}

export default SimplePresent;