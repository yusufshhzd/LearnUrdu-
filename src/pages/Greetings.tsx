import { Typography, Paper, ListItem, List } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarContext, SidebarContextProps } from "@/components/ui/sidebar"
import ChatBotWidget from '@/components/ChatBotWidget';
import { SupabaseClient } from '@supabase/supabase-js';
import ConjugationTable from '@/components/ConjugationTable';

interface Message {
    sender: 'user' | 'bot';
    text: string;
  }

const Greetings: React.FC = () => {

    const Messages = useState<Message[]>([]); // messages for chat display



    const greetings = [
        ['English', 'Urdu'],
        ['Hello', 'Aadaab'],
        ['Peace be upon you', 'Assalam Alaikum'],
        ['And peace be upon you', 'Walaikum Assalam'],
        ['What', 'kya'],
        ['Condition/Situation', 'haal'],
        ['How are you (informal)', 'kyaa haal hai?'],
        ['All is well', 'sab theek hai'],
        ['And you?', 'aur tum?'],
        ['Me as well', 'mai bhi'],
        ['Again', 'phir'],
        ['To meet/see', 'milna'],
        ['Until we meet again', 'phir milenge'],
    ];


    const introductions = [
        ['English', 'Urdu'],
        ['Introductions', 'ta\'\aruf'],
        ['Your (formal)', 'Aapka'],
        ['Name', 'naam'],
        ['My', 'mera'],
        ['Where', 'kahan'],
        ['From', 'se'],
        ['How much/many', 'kitna'],
        ['Year', 'saal'],
        ['Age', 'umar'],
        ['Who', 'kaun'],
        ['Good/well', 'acha'],
        ['Thanks', 'shukriya'],
        ['Happiness', 'khushi'],
        ['English', 'angrezi'],
    ];


    return (



        <div>

            <SidebarProvider>
                <AppSidebar />
                <SidebarTrigger />
                <div className="rightOfSidebar">
                    <Typography variant="h4">Greetings and Introductions</Typography>

                    <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 4, marginTop: '50px' }} >
                        <div className='card'>
                            <Typography variant="h5">Greetings Vocabulary</Typography>
                            <ConjugationTable data={greetings} />
                        </div>
                    </Paper>


                    <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 4, marginTop: '50px' }} >
                        <div className='card'>
                            <Typography variant="h5">Introductions Vocabulary</Typography>
                            <ConjugationTable data={introductions} />
                        </div>
                    </Paper>


                    <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 4, marginTop: '50px' }} >
                        <div className='card'>
                            <Typography variant="h5">Example Conversation</Typography>
                            <div className="chatbot-container">
                                <div className="chat-window">
                                    <div className="messages">
                                        {/* Display messages */}
                                         {messages.map((msg, index) => (
                                            <div key={index} className={`message ${msg.sender}`}>
                                                <p>{msg.text}</p>
                                            </div>
                                        ))} 
                                    </div>
                                </div>
                            </div>


                        </div>
                    </Paper>

                </div>
            </SidebarProvider>
        </div>
    );
}

export default Greetings;