import ProgressBar from '@/components/ProgressBar/ProgressBar'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { List, ListItem, Paper, Typography } from '@mui/material'
import React from 'react'

const Commands = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger />
            <div className="rightOfSidebar">
                <ProgressBar />

                <Typography variant="h4">Commands</Typography>

                <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
                    <div className='card'>
                        <Typography variant="h5">Informal</Typography>
                        <Typography style={{ textAlign: "center" }} variant="h6"> Simply add -o to the verbal stem </Typography>

                        <Typography style={{ textAlign: "center" }} variant="h6">

                            <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                                <ListItem sx={{ display: 'list-item' }}>
                                    Verb = Jaana
                                </ListItem>
                            </List>

                            <b>Go</b><br /> <i>Jaao</i> <br />

                        </Typography>

                        <Typography style={{ textAlign: "center" }} variant="h6">

                            <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                                <ListItem sx={{ display: 'list-item' }}>
                                    Verb = Aana
                                </ListItem>
                            </List>

                            <b>Come</b> here<br /> Idhar <i>aao</i> <br />

                        </Typography>

                        <Typography style={{ textAlign: "center" }} variant="h6">


                            <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                                <ListItem sx={{ display: 'list-item' }}>
                                    Verb = Hatna
                                </ListItem>
                            </List>

                            <b>Move</b> <br />  <i>Hato</i> <br />

                        </Typography>

                    </div>
                </Paper>

                <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
                    <div className='card'>
                        <Typography variant="h5">Formal</Typography>
                        <Typography style={{ textAlign: "center" }} variant="h6"> Simply add -iye to the verbal stem </Typography>

                        <Typography style={{ textAlign: "center" }} variant="h6">

                            <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                                <ListItem sx={{ display: 'list-item' }}>
                                    Verb = Jaana
                                </ListItem>
                            </List>

                            <b>Go</b><br /> Aap <i>Jaaiye</i> <br />

                        </Typography>

                        <Typography style={{ textAlign: "center" }} variant="h6">

                            <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                                <ListItem sx={{ display: 'list-item' }}>
                                    Verb = Aana
                                </ListItem>
                            </List>

                            <b>Come</b> here<br /> Idhar <i>aaiye</i> <br />

                        </Typography>

                        <Typography style={{ textAlign: "center" }} variant="h6">


                            <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                                <ListItem sx={{ display: 'list-item' }}>
                                    Verb = khaana
                                </ListItem>
                            </List>

                            You <b>Eat</b> <br /> Aap <i>khaaiye</i> <br />

                        </Typography>

                    </div>
                </Paper>


                <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
                    <div className='card'>
                        <Typography variant="h5">Special Cases</Typography>
                        <Typography style={{ textAlign: "center" }} variant="h6"> Some specific words require -jiye in the formal</Typography>

                        <Typography style={{ textAlign: "center" }} variant="h6">

                            <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                                <ListItem sx={{ display: 'list-item' }}>
                                    Verb = Dena
                                </ListItem>
                            </List>

                            <b>Give</b><br /> Aap <i>deejiye</i> <br />


                            <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                                <ListItem sx={{ display: 'list-item' }}>
                                    Verb = Lena
                                </ListItem>
                            </List>

                            <b>Take</b><br /> Aap <i>leejiye</i> <br />

                        </Typography>

                        <Typography style={{ textAlign: "center" }} variant="h6"> What about the same verbs in the informal? <br/> For verbs like dena or lena, you simply add -o to the first letter</Typography>

                        <Typography style={{ textAlign: "center" }} variant="h6">

                            <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                                <ListItem sx={{ display: 'list-item' }}>
                                    Verb = Dena
                                </ListItem>
                            </List>

                            <b>Give</b><br /> <i>do</i> <br />
                            <b>Give me it</b><br /> Mujhe de<i>do</i> <br />


                            <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                                <ListItem sx={{ display: 'list-item' }}>
                                    Verb = Lena
                                </ListItem>
                            </List>

                            <b>Take</b><br /> <i>lo</i> <br />
                            <b>You take it</b><br /> Tum le<i>lo</i> <br />

                        </Typography>
                        

                    </div>
                </Paper>

            </div>

        </SidebarProvider>
    )
}

export default Commands
