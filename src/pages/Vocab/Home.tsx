import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import '@/css/ChatBot.css'; // Custom styles for the chatbot
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { Paper, Typography } from '@mui/material';
import ConjugationTable from '@/components/ConjugationTable';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import { FlashcardArray } from 'react-quizlet-flashcard';


const Home: React.FC = () => {

    const Nouns = [['English', 'Urdu'], ['House/Home', 'Ghar'], ['Room', 'Kamra'], ['Kitchen', 'Bawarchi Khana'],
    ['Bed', 'Bistar'], ['Chair', 'Kursi'], ['Table', 'Mez'], ['Door', 'Darwaza'],
    ['Window', 'Khirki'], ['Fan', 'Pankha'], ['Wall', 'Deewar'], ['Floor', 'Farsh'], ['Roof', 'Chhat'],]

    const Verbs = [['English', 'Urdu'], ['To sleep', 'Sona'], ['Jaagna', 'To wake up'], ['Baithna', 'To sit'],
    ['Khana', 'To Eat'], ['Peena', 'To drink'], ['Saaf karna', 'To clean'], ['Band karna', 'To close'], ['Kholna', 'To open'],
    ['Jalana', 'To turn on'], ['Bujhana', 'To turn off'], ['Rakhna', 'To put/place'], ['Nikaalna', 'To take out']]

    const Adjectives = [['English', 'Urdu'], ['Saaf', 'Clean'], ['Ganda', 'Dirty'], ['Bara', 'Big'], ['Chhota', 'Small']]


    return (
        <div>

            <SidebarProvider>
                <AppSidebar />
                <SidebarTrigger />
                <div className="rightOfSidebar">
                    <ProgressBar />

                    <Typography variant="h4">Home (Ghar)</Typography>

                    <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 4, marginTop: '50px' }} >
                        <div className='card'>
                            <Typography variant="h5">Common Home Nouns</Typography>
                            <ConjugationTable data={Nouns} />
                        </div>
                    </Paper>

                    <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 4, marginTop: '50px' }} >
                        <div className='card'>
                            <Typography variant="h5">Common Home Verbs</Typography>
                            <ConjugationTable data={Verbs} />
                        </div>
                    </Paper>

                    <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 4, marginTop: '50px' }} >
                        <div className='card'>
                            <Typography variant="h5">Common Home Adjectives</Typography>
                            <ConjugationTable data={Adjectives} />
                        </div>
                    </Paper>


                    {/* Flashcards*/}
                    <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
                        <div className='card' >
                            <Typography variant="h5">Study Home</Typography>
                            {/* <FlashcardArray cycle={true} cards={cards} /> */}
                        </div>
                    </Paper>

                </div>
            </SidebarProvider>

        </div>


    );
}

export default Home;
