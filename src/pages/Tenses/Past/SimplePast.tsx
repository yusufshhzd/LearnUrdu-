import ConjugationTable from '@/components/ConjugationTable'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { List, ListItem, Paper, Typography } from '@mui/material'
import React from 'react'

const SimplePast = () => {

  const data1 = [
    ['Subject', 'Urdu'],
    ['I', 'Mai ne'],
    ['You, informal', 'Tum ne'],
    ['You, formal', 'Aap ne'],
    ['He/She/It', 'Os ne'],
    ['He/She (formal) + They', 'Onho ne'],
    ['We', 'Hum ne']
  ];



  const data2 = [
    ['Object', 'Verb ending'],
    ['Masculine Singular', '-aa'],
    ['Masculine Plural', '-ay'],
    ['Feminine Singular', '-ee'],
    ['Feminine Plural', '-een'],
  ];

  const data3 = [
    ['Subject', 'Urdu'],
    ['I', 'Mai'],
    ['You, informal', 'Tum'],
    ['You, formal', 'Aap'],
    ['He/She/It (far)', 'Wo'],
    ['He/She/It (near)', 'Ye'],
    ['We', 'Hum']
  ];




  return (
    <div>

      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <div className="rightOfSidebar">
          <Typography variant="h4">Simple Past Tense</Typography>

          <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 8, marginTop: '50px' }} >
            <div className='card'>
              <Typography variant="h5">What is the Simple Past Tense?</Typography>
              <Typography style={{ textAlign: "center" }} variant="h6">✅ Describe actions completed in the past<br /> <i>Mai ne seb khaya</i> <br /> <i>I ate an apple</i></Typography>
            </div>
          </Paper>

          <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 4, marginTop: '50px' }} >
            <div className='card'>
              <Typography variant="h5">First, we must identify the type of verb we are using</Typography>
              <Typography variant="h5">Sentences are formed differently based on the verb type</Typography>
              <div className='rowDisplay'>
                <Typography style={{ textAlign: "center" }} variant="h6"><b>Transitive</b> - Verbs that require an object <br /> <i>He made food</i> <br /> <i>Onho ne khaana banaya</i>

                  <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                    <ListItem sx={{ display: 'list-item' }}>
                      The verb "made" needs the object - "food"
                    </ListItem>
                  </List>

                </Typography>
                <Typography style={{ textAlign: "center" }} variant="h6"><b>Intransitive</b> - Verbs that do not require an object <br /> <i>He woke up</i> <br /> <i>Wo jaaga</i> 
                <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                    <ListItem sx={{ display: 'list-item' }}>
                      The verb does not require an object
                    </ListItem>
                  </List>
                
                
                </Typography>


              </div>
            </div>
          </Paper>

          <div className='rowDisplay'>
            <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
              <div className='card'>
                <Typography variant="h5"><b>Transitive Verbs</b></Typography>
                <Typography variant="h5">Sentence Structure: [Subject] + [Verbal Stem] + [Ending]</Typography>
                <Typography variant="h6">The ending depends on the <i>number</i> and <i>gender</i> of the <b>object</b></Typography>
                <Typography variant="h6">The key word is <i>"ne"</i></Typography>
                <ConjugationTable data={data1} />
                <ConjugationTable data={data2} />
                <Typography variant="h6">❗️If the object is masculine singular AND the verbal stem ends with a vowel, the verb ending becomes -ya</Typography>


              </div>
            </Paper>

            <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
              <div className='card'>
                <Typography variant="h5"><b>Intransitive Verbs</b></Typography>
                <Typography variant="h5">Sentence Structure: [Subject] + [Verbal Stem] + [Ending]</Typography>
                <Typography variant="h6">The ending depends on the <i>number</i> and <i>gender</i> of the <b>subject</b></Typography>
                <Typography variant="h6">There is no <i>"ne"</i></Typography>
                <ConjugationTable data={data3} />
                <ConjugationTable data={data2} />
                <Typography variant="h6">❗️If the subject is masculine singular AND the verbal stem ends with a vowel, the verb ending becomes -ya</Typography>
              </div>
            </Paper>
          </div>



          <div className='rowDisplay'>
            <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
              <div className='card'>
                <Typography variant="h5">Examples</Typography>
                <Typography style={{ textAlign: "center" }} variant="h6"><b>I watched a drama</b><br /> <i>Mai ne drama dekhaa</i> <br /></Typography>
                <Typography style={{ textAlign: "center" }} variant="h6"><b>I watched dramas</b><br /> <i>Mai ne dramay dekhay</i> <br /></Typography>
                <Typography style={{ textAlign: "center" }} variant="h6"><b>She bought a chair</b><br /> <i>Os ne kursi khareedee</i> <br /></Typography>
                <Typography style={{ textAlign: "center" }} variant="h6"><b>She bought chairs</b><br /> <i>Os ne kursi khareedeen</i> <br /></Typography>
                <Typography style={{ textAlign: "center" }} variant="h6"><b>❗️You drank milk</b><br /> <i>Tum ne doodh peeya</i> <br /></Typography>
              </div>
            </Paper>

            <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
              <div className='card'>
                <Typography variant="h5">Examples</Typography>
                <Typography style={{ textAlign: "center" }} variant="h6"><b>I watched a drama</b><br /> <i>Mai ne drama dekhaa</i> <br /></Typography>
                <Typography style={{ textAlign: "center" }} variant="h6"><b>I watched dramas</b><br /> <i>Mai ne dramay dekhay</i> <br /></Typography>
                <Typography style={{ textAlign: "center" }} variant="h6"><b>She bought a chair</b><br /> <i>Os ne kursi khareedee</i> <br /></Typography>
                <Typography style={{ textAlign: "center" }} variant="h6"><b>She bought chairs</b><br /> <i>Os ne kursi khareedeen</i> <br /></Typography>
                <Typography style={{ textAlign: "center" }} variant="h6"><b>❗️You drank milk</b><br /> <i>Tum ne doodh peeya</i> <br /></Typography>
              </div>
            </Paper>
          </div>


          <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
              <div className='card'>
                <Typography variant="h5"><b>Jaana - To go</b> (Intransitive)</Typography>
                <Typography variant="h6">This verb is conjugated irregularly</Typography>
                <Typography variant="h6">Instead of using the verbal stem "Jaa", we change it to "Gaa"</Typography>
                <Typography variant="h5">Examples</Typography>
                <Typography style={{ textAlign: "center" }} variant="h6">I went to the mall <br /> <i>Mai mall gaaya</i></Typography>
                <Typography style={{ textAlign: "center" }} variant="h6">They went to Pakistan <br /> <i>Wo Pakistan gaaey</i></Typography>
                <Typography style={{ textAlign: "center" }} variant="h6">Your cat went where?<br /> <i>Tumhari billi kahan gaee?</i></Typography>
                <Typography style={{ textAlign: "center" }} variant="h6">We went to India <br /> <i>Hum India gaaeen</i></Typography>
 
              </div>
            </Paper>



          <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
              <div className='card'>
                <Typography variant="h5"><b>Hona - To Be / Happen / Become</b> (Transitive)</Typography>
                
              </div>
            </Paper>



        </div>
      </SidebarProvider>


    </div>
  )
}

export default SimplePast
