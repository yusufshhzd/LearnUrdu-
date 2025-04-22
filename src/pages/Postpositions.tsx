import ConjugationTable from '@/components/ConjugationTable'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Paper, Typography } from '@mui/material'
import React, { useState, useRef } from 'react'
import { FlashcardArray } from "react-quizlet-flashcard";



const Postpositions = () => {


    const data1 = [
        ['Postposition', 'Meaning'],
        ['mein', 'in'],
        ['par/pe', 'on, at, to'],
        ['se', 'from, with, by'],
        ['ko', 'to (someone/something)'],
        ['ke saath', 'with'],
        ['ke liye', 'for'],
        ['tak', 'until, up to'],
        ['ke paas', 'near, with (possession)'],
    ]

    const cards = [
        {
            id: 1,
            frontHTML: <div className="flashcard">mein</div>,
            backHTML: <div className="flashcard">in</div>,
        },
        {
            id: 2,
            frontHTML: <div className="flashcard">par</div>,
            backHTML: <div className="flashcard">on, at, to</div>,
        },
        {
            id: 3,
            frontHTML: <div className="flashcard">se</div>,
            backHTML: <div className="flashcard">from, with, by</div>,
        },
        {
            id: 4,
            frontHTML: <div className="flashcard">ko</div>,
            backHTML: <div className="flashcard">to (someone/something)</div>,
        },
        {
            id: 5,
            frontHTML: <div className="flashcard">ke saath</div>,
            backHTML: <div className="flashcard">with</div>,
        },
        {
            id: 6,
            frontHTML: <div className="flashcard">ke liye</div>,
            backHTML: <div className="flashcard">for</div>,
        },
        {
            id: 7,
            frontHTML: <div className="flashcard">tak</div>,
            backHTML: <div className="flashcard">until, up to</div>,
        },
        {
            id: 8,
            frontHTML: <div className="flashcard">ke paas</div>,
            backHTML: <div className="flashcard">near, with (possession)</div>,
        },
    ];

    return (

        <div>
            <SidebarProvider>
                <AppSidebar />
                <SidebarTrigger />
                <div className="rightOfSidebar">
                    <Typography variant="h4">Postpositions</Typography>

                    <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
                        <div className='card'>
                            <Typography variant="h5">What are postpositions?</Typography>
                            <Typography style={{ textAlign: "center" }} variant="h6">Postpositions show the relationship between words in a sentence. <br />Postpositions are like prepositions in English...<br /> But they come after the noun/pronoun!</Typography>
                            <Typography style={{ textAlign: "center" }} variant="h6">Think: <br />English: <i><b>In</b> school</i><br />Urdu: <i>School <b>mein</b></i></Typography>

                        </div>
                    </Paper>

                    <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 4, marginTop: '50px' }} >
                        <div className='card'>
                            <Typography variant="h5">Most Common Postpositions</Typography>
                            <ConjugationTable data={data1} />
                        </div>
                    </Paper>

                    <div className='rowDisplay'>
                        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 4, marginTop: '50px' }} >
                            <div className='card'>
                                <Typography variant="h5">Mein</Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>I live <b>in</b> Ohio</i><br/><i></i><i>Mai Ohio <b>mein</b> rehta hoon</i></Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>She is <b>in</b> the house</i><br/><i></i><i>Wo ghar <b>mein</b> hais</i></Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>There is sugar <b>in</b> the tea</i><br/><i></i><i>Chai <b>mein</b> cheeni hai</i></Typography>

                            </div>
                        </Paper>
                        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 4, marginTop: '50px' }} >
                            <div className='card'>
                                <Typography variant="h5">Par</Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>The book is <b>on</b> the table</i><br/><i></i><i>Kitaab table <b>par/pe</b> hai</i></Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>They are <b>at</b> the park</i><br/><i></i><i>Wo park <b>par/pe</b> hain</i></Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>He is going <b>to</b> the station</i><br/><i></i><i>Wo station <b>par</b> ja raha hai</i></Typography>
                            </div>
                        </Paper>
                        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 4, marginTop: '50px' }} >
                            <div className='card'>
                                <Typography variant="h5">Se</Typography>
                            </div>
                        </Paper>
                        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 4, marginTop: '50px' }} >
                            <div className='card'>
                                <Typography variant="h5">Ko</Typography>
                            </div>
                        </Paper>
                    </div>

                    <div className='rowDisplay'>
                        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 4, marginTop: '50px' }} >
                            <div className='card'>
                                <Typography variant="h5">Ke saath</Typography>
                            </div>
                        </Paper>
                        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 4, marginTop: '50px' }} >
                            <div className='card'>
                                <Typography variant="h5">Ke liye</Typography>
                            </div>
                        </Paper>
                        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 4, marginTop: '50px' }} >
                            <div className='card'>
                                <Typography variant="h5">Tak</Typography>
                            </div>
                        </Paper>
                        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 4, marginTop: '50px' }} >
                            <div className='card'>
                                <Typography variant="h5">Ke paas</Typography>
                            </div>
                        </Paper>
                    </div>

                    {/* Flashcards*/}
                    <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
                        <div className='card'>
                            <Typography variant="h5">Study Postpositions</Typography>
                            <FlashcardArray cycle={true} cards={cards} />
                        </div>
                    </Paper>

                </div>
            </SidebarProvider>
        </div>
    )
}

export default Postpositions
