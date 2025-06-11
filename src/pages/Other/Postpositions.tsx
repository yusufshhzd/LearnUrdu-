import ConjugationTable from '@/components/ConjugationTable'
import ProgressBar from '@/components/ProgressBar/ProgressBar'
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
            frontHTML: <div className="flashcard">par/pe</div>,
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
                <ProgressBar />

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
                                <Typography variant="h5">Par/pe</Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>The book is <b>on</b> the table</i><br/><i></i><i>Kitaab table <b>par/pe</b> hai</i></Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>They are <b>at</b> the park</i><br/><i></i><i>Wo park <b>par/pe</b> hain</i></Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>He is going <b>to</b> the station</i><br/><i></i><i>Wo station <b>par</b> ja raha hai</i></Typography>
                            </div>
                        </Paper>
                        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 4, marginTop: '50px' }} >
                            <div className='card'>
                                <Typography variant="h5">Se</Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>We are <b>from</b> Pakistan</i><br/><i></i><i>Hum Pakistan <b>se</b> hain</i></Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>I came <b>from</b> School</i><br/><i></i><i>Mai school <b>se</b> aaya</i></Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>He wrote <b>with</b> a pen</i><br/><i></i><i>Os ne pen <b>se</b> likhaa</i></Typography>

                            </div>
                        </Paper>
                        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 4, marginTop: '50px' }} >
                            <div className='card'>
                                <Typography variant="h5">Ko</Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>I am going <b>to</b> the store</i><br/><i></i><i>Mai dukhan <b>ko</b> jaa raha hoon</i></Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>I saw <b>her</b> yesterday</i><br/><i></i><i>Kal mai ne os <b>ko</b> dekhaa</i></Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>Call <b>the</b> teacher</i><br/><i></i><i> Ustaad <b>ko</b> bulao</i></Typography>
                            </div>
                        </Paper>
                    </div>

                    <div className='rowDisplay'>
                        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 4, marginTop: '50px' }} >
                            <div className='card'>
                                <Typography variant="h5">Ke saath</Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>I am <b>with</b> mother</i><br/><i></i><i>Mai Ami <b>ke saath</b> hoon</i></Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>I went <b>with</b> my friend</i><br/><i></i><i>Mai dost <b>ke saath</b> gaaya</i></Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>He plays <b>with</b> a ball</i><br/><i></i><i>Wo ball <b>ke saath</b> kehta hai</i></Typography>


                            </div>
                        </Paper>
                        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 4, marginTop: '50px' }} >
                            <div className='card'>
                                <Typography variant="h5">Ke liye</Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>That is <b>for</b> Yusuf</i><br/><i></i><i>Wo Yusuf <b>ke liye</b> hai</i></Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>She works <b>for</b> her family</i><br/><i></i><i>Wo khandaan <b>ke liye</b> kaam karti hai</i></Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>I bought this <b>for</b> you</i><br/><i></i><i>Mai ne ye aap <b>ke liye</b> khareeda hai</i></Typography>

                            </div>
                        </Paper>
                        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 4, marginTop: '50px' }} >
                            <div className='card'>
                                <Typography variant="h5">Tak</Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>Wait <b>until</b> evening</i><br/><i></i><i>Shaam <b>tak</b> intezaar karo</i></Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>He ran <b>up to</b> the gate</i><br/><i></i><i>Wo gate <b>tak</b> bhaaga</i></Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>I studied <b>until</b> midnight</i><br/><i></i><i>Mai aadhi raat <b>tak</b> pahrta raha</i></Typography>

                            

                            </div>
                        </Paper>
                        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 4, marginTop: '50px' }} >
                            <div className='card'>
                                <Typography variant="h5">Ke paas</Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>I am sitting <b>near</b> my mother</i><br/><i></i><i>Mai ami <b>ke paas</b> beht rahi hoon</i></Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>He <b>has</b> a pencil</i><br/><i></i><i>Us <b>ke paas</b> ek pencil hai</i></Typography>
                                <Typography sx = {{fontSize: '1rem'}}><i>The bag is <b>near</b> the chair</i><br/><i></i><i>Bag kursi<b>ke paas</b> hai</i></Typography>
                            </div>
                        </Paper>
                    </div>

                    {/* Flashcards*/}
                    <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
                        <div className='card' >
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
