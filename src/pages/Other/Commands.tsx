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
                                    Verb = Hatna
                                </ListItem>
                            </List>

                            <b>Move</b> <br /> <i>Hato</i> <br />

                        </Typography>

                    </div>
                </Paper>

            </div>

        </SidebarProvider>
    )
}

export default Commands
