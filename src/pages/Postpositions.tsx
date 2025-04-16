import ConjugationTable from '@/components/ConjugationTable'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Paper, Typography } from '@mui/material'
import React from 'react'

const Postpositions = () => {


    const data1 = [
        ['Postposition', 'Meaning'],
        ['mein', 'in'],
        ['par', 'on, at, to'],
        ['se', 'from, with, by'],
        ['ko', 'to (someone/something)'],
        ['ke saath', 'with'],
        ['ke liye', 'for'],
        ['tak', 'until, up to'],
        ['ke paas', 'near, with (possession)'],
    ]

    return (

        <div>
            <SidebarProvider>
                <AppSidebar />
                <SidebarTrigger />
                <div className="rightOfSidebar">
                    <Typography variant="h4">Postpositions</Typography>

                    <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
                        <div className='tenseCard'>
                            <Typography variant="h5">What are postpositions?</Typography>
                            <Typography style={{ textAlign: "center" }} variant="h6">Postpositions show the relationship between words in a sentence. <br />Postpositions are like prepositions in English...<br /> But they come after the noun/pronoun!</Typography>
                            <Typography style={{ textAlign: "center" }} variant="h6">Think: <br />English: <i><b>In</b> school</i><br />Urdu: <i>School <b>mein</b></i></Typography>

                        </div>
                    </Paper>

                    <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 4, marginTop: '50px' }} >
                        <div className='tenseCard'>
                            <Typography variant="h5">Common Postpositions</Typography>
                            <ConjugationTable data={data1} />
                        </div>
                    </Paper>

                </div>
            </SidebarProvider>
        </div>
    )
}

export default Postpositions
