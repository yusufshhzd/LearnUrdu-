import ConjugationTable from '@/components/ConjugationTable'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Paper, Typography } from '@mui/material'
import React from 'react'

const PresentContinous = () => {

  const data1 = [
    ['Subject', 'Verb Ending (Masculine)', 'Verb Ending (Feminine)'],
    ['Mai (I)', '-raha hoon', '-rahi hoon'],
    ['Tum (You, informal)', '-rahay ho', '-rahi ho'],
    ['Aap (You, formal)', '-rahay hain', '-rahi hain'],
    ['Woh (He/She/It)', '-raha hai', '-rahi hai'],
    ['Woh (They)', '-rahay hain', '-rahi hain'],
    ['Hum (We)', '-rahay hain', '-rahi hain']
  ];



  return (
    <div>

      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <div className="rightOfSidebar">
          <Typography variant="h4">Present Continuous Tense</Typography>

          <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 8, marginTop: '50px' }} >
            <div className='card'>
              <Typography variant="h5">What is the Present Continuous Tense?</Typography>
              <Typography style={{ textAlign: "center" }} variant="h6">✅ Happening right now<br /> <i>Mai khaana kha raha hoon</i> <br /> <i>I am eating food</i></Typography>
              <Typography style={{ textAlign: "center" }} variant="h6">✅ Ongoing / Temporary<br /> <i>Woh likh rahi hai</i> <br /> <i>She is writing</i></Typography>
              <Typography style={{ textAlign: "center" }} variant="h6">✅ In progress<br /> <i>Hum cricket khel rahay hain</i> <br /> <i>We are playing cricket</i></Typography>
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
              <Typography style={{ textAlign: "center" }} variant="h6"><b>She is studying</b><br /> <i>Woh parh rahi hai</i> <br /></Typography>
              <Typography style={{ textAlign: "center" }} variant="h6"><b>Are you watching? (formal)</b><br /> <i>Kya aap dekh rahay hai?</i> <br /></Typography>
              <Typography style={{ textAlign: "center" }} variant="h6"><b>I am not sleeping</b><br /> <i>Mai nahi soh raha hoon</i> <br /></Typography>
            </div>
          </Paper>

        </div>
      </SidebarProvider>


    </div>
  )
}

export default PresentContinous
