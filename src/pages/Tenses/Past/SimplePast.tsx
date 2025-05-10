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
              <Typography variant="h5">Sentences are formed differently based on the verb type</Typography>
              <div className='rowDisplay'>
                <Typography style={{ textAlign: "center" }} variant="h6"><b>Transitive</b> - Verbs that require an object <br /> <i>He made food</i> <br /> <i>Wo ne khaana banaya</i>

                  <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                    <ListItem sx={{ display: 'list-item' }}>
                      The verb "made" needs the object - "food"
                    </ListItem>
                  </List>

                </Typography>
                <Typography style={{ textAlign: "center" }} variant="h6"><b>Intransitive</b> - Verbs that require an object <br /> <i>He made food</i> <br /> <i>Wo ne khaana banaya</i> <br /> The verb "made" needs the object - "food"
                </Typography>


              </div>
            </div>
          </Paper>

          <div className='rowDisplay'>
            <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
              <div className='card'>
                <Typography variant="h5">Transitive Verbs</Typography>
                <Typography variant="h5">Sentence Structure: [Subject] + [Verbal Stem] + [Ending]</Typography>
                <Typography variant="h6">The ending depends on the <b>number</b> and <b>gender</b> of the <i>object</i></Typography>
                <Typography variant="h6">The key word is <i>"ne"</i></Typography>
                <ConjugationTable data={data1} />
                <ConjugationTable data={data2} />
                <Typography variant="h6">❗️If the object is masculine singular AND the verbal stem ends with a vowel, the verb ending becomes -ya</Typography>


              </div>
            </Paper>

            <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
              <div className='card'>
                <Typography variant="h5">Intransitive Verbs</Typography>
                <Typography variant="h5">Sentence Structure: [Subject] + [Verbal Stem] + [Ending]</Typography>
                <Typography variant="h6">The ending depends on the <b>number</b> and <b>gender</b> of the <i>object</i></Typography>
                <Typography variant="h6">The key word is <i>"ne"</i></Typography>
                <ConjugationTable data={data1} />
                <ConjugationTable data={data2} />

              </div>
            </Paper>
          </div>



          <div className='rowDisplay'>


            <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
              <div className='card'>
                <Typography variant="h5">Examples</Typography>
                <Typography variant="h5">Sentence Structure: [Subject] + [Verbal Stem] + [Ending]</Typography>
                

              </div>
            </Paper>

            

          </div>



        </div>
      </SidebarProvider>


    </div>
  )
}

export default SimplePast
