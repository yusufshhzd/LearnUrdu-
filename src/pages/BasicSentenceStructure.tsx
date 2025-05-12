import ProgressBar from '@/components/ProgressBar/ProgressBar'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { List, ListItem, Paper, Typography } from '@mui/material'
import React from 'react'

const BasicSentenceStructure = () => {
  return (
    <div>

      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <div className="rightOfSidebar">
        <ProgressBar />

          <Typography variant="h4">Basic Sentence Structures</Typography>
          <Typography sx={{ marginTop: "10px" }} variant="h6">Now we want to insert an object between the pronoun and verb ending to create a complete sentence</Typography>


          <div className='rowDisplay'>

            <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: '100%', marginTop: '50px' }}>
              <div className="card" >
                <Typography variant="h5">Sentence Structure</Typography>
                <Typography variant="h6">[Subject] + [Object] + [Verb]</Typography>
              </div>
            </Paper>

            <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: '100%', marginTop: '50px' }}>
              <div className="card">
                <Typography variant="h5">Sentence Structure Including Negatives</Typography>
                <Typography variant="h6">[Subject] + [Object] + <i>Nahi</i> + [Verb]</Typography>
              </div>
            </Paper>


          </div>


          <div className='rowDisplay'>

            <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: '100%', marginTop: '50px' }}>
              <div className="card">
                <Typography variant="h5">Examples</Typography>
                <Typography style={{ textAlign: "center" }} variant="h6"><b>I am Yusuf</b><br /> <i>Mai Yusuf hoon</i> <br />
                  <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                    <ListItem sx={{ display: 'list-item' }}>
                      Subject = Mai
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                      Object = Yusuf
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                      Verb = Hoon
                    </ListItem>
                  </List>
                </Typography>


                <Typography style={{ textAlign: "center" }} variant="h6"><b>You are American</b><br /> <i>Tum Amreekan ho</i> <br />
                  <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                    <ListItem sx={{ display: 'list-item' }}>
                      Subject = Tum
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                      Object = Amreekan
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                      Verb = Ho
                    </ListItem>
                  </List>
                </Typography>
              </div>
            </Paper>



            <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: '100%', marginTop: '50px' }}>
              <div className="card">
                <Typography variant="h5">Examples</Typography>
                <Typography style={{ textAlign: "center" }} variant="h6"><b>I am not Ali</b><br /> <i>Mai Ali nahi hoon</i> <br />
                  <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                    <ListItem sx={{ display: 'list-item' }}>
                      Subject = Mai
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                      Object = Ali
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                      Negative Particle = Nahi
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                      Verb = Hoon
                    </ListItem>
                  </List>
                </Typography>


                <Typography style={{ textAlign: "center" }} variant="h6"><b>He is not Pakistani</b><br /> <i>Wo Pakistani nahi hai</i> <br />
                  <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                    <ListItem sx={{ display: 'list-item' }}>
                      Subject = Wo
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                      Object = Pakistani
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                      Negative Particle = Nahi
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                      Verb = Hai
                    </ListItem>
                  </List>
                </Typography>
              </div>
            </Paper>


          </div>




        </div>

      </SidebarProvider>


    </div>

  )
}

export default BasicSentenceStructure
