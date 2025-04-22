import ConjugationTable from '@/components/ConjugationTable'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Paper, Typography } from '@mui/material'
import React from 'react'

const Hona = () => {

    const data1 = [
        ['English', 'Pronoun', 'Verb Ending'],
        ['I am', 'Mai', 'hoon'],
        ['You are (informal)', 'Tum', 'ho'],
        ['You are (formal)', 'Aap', 'hain'],
        ['You are (least formal)', 'Tu', 'hai'],
        ['He/She/It is (far)', 'Wo', 'hai'],
        ['He/She/It is (near)', 'Ye', 'hai'],
        ['We are', 'Hum', 'hain']
    ];

   

    return (
        <div>

            <SidebarProvider>
                <AppSidebar />
                <SidebarTrigger />
                <div className="rightOfSidebar">
                    <Typography variant="h4">Hona - "To Be"</Typography>
                    <Typography sx={{ marginTop: "10px" }} variant="h6">One of the most important verbs in Urdu is <i>Hona</i> which means <i>To Be</i>.</Typography>



                            <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 5 / 8, marginTop: '50px' }} >
                                <div className='card'>
                                    <Typography variant="h5">Hona Conjugations</Typography>
                                    <Typography variant="h6">[Pronoun] + [Verb Ending]</Typography>
                                    <ConjugationTable data={data1} />
                                </div>
                            </Paper>






                </div>
            </SidebarProvider>


        </div>
    )
}

export default Hona
