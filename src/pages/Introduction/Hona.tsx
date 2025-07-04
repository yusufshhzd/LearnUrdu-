import ConjugationTable from '@/components/ConjugationTable'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Paper, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '/src/css/NextButton.css'
import '/src/css/NextButton.css'



const Hona = () => {

    const navigate = useNavigate();


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



                    <div className="buttonContainer">
                        {/* Previous Button: Arrow on RIGHT, pointing LEFT */}
                        <button className="btn-arrow-slide-cont btn-arrow-slide-cont--black btn-arrow-slide-cont--reverse">
                            <span className="btn-arrow-slide-circle" aria-hidden="true">
                                <span className="btn-arrow-slide-icon btn-arrow-slide-arrow"></span>
                            </span>
                            <span className="btn-arrow-slide-text" onClick={() => navigate('/introduction')}>
                                Previous
                            </span>
                        </button>

                        {/* Next Button: Arrow on LEFT, pointing RIGHT */}
                        <button className="btn-arrow-slide-cont btn-arrow-slide-cont--black">
                            <span className="btn-arrow-slide-circle" aria-hidden="true">
                                <span className="btn-arrow-slide-icon btn-arrow-slide-arrow"></span>
                            </span>
                            <span className="btn-arrow-slide-text" onClick={() => navigate('/basic-sentence-structure')}>
                                Next
                            </span>
                        </button>
                    </div>



                </div>
            </SidebarProvider>


        </div>
    )
}

export default Hona
