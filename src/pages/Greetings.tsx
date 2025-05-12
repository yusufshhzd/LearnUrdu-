import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import '../css/ChatBot.css'; // Custom styles for the chatbot
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { Paper, Typography } from '@mui/material';
import ConjugationTable from '@/components/ConjugationTable';
import ProgressBar from '@/components/ProgressBar/ProgressBar';

interface Message {
    sender: 'sender' | 'receiver' | 'third';
    text: string;
    translation: string;
}

const Greetings: React.FC = () => {

    const greetings = [
        ['English', 'Urdu'],
        ['Hello', 'Aadaab'],
        ['Hello/Goodbye/Peace be upon you', 'Assalam Alaikum'],
        ['Hello/Goodbye/And peace be upon you', 'Walaikum Assalam'],
        ['Goodbye', 'Khuda hafiz'],
        ['What', 'kya'],
        ['Condition/Situation', 'haal'],
        ['How are you (informal)', 'kyaa haal hai?'],
        ['All is well', 'sab theek hai'],
        ['And you?', 'aur tum?'],
        ['Me as well', 'mai bhi'],
        ['Again', 'phir'],
        ['To meet/see', 'milna'],
        ['Until we meet again', 'phir milenge'],
        ['It was good to meet you', 'Aap se milkr khushi hoi'],
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


    const [formalMessages] = useState<Message[]>([
        { sender: 'sender', text: 'Assalamu Aleikum', translation: 'Peace be upon you' },
        { sender: 'receiver', text: 'Walaikum Assalam!', translation: 'And peace be upon you!' },
        { sender: 'sender', text: 'Aapka naam kya hai?', translation: 'What is your name?' },
        { sender: 'receiver', text: 'Mera naam Yusuf hai. Aur aapka?', translation: 'My name is Yusuf. And yours?' },
        { sender: 'sender', text: 'Mera naam Esha hai', translation: 'My name is Esha' },
        { sender: 'receiver', text: 'Aap kahaan se hain?', translation: 'Where are you from?' },
        { sender: 'sender', text: 'Mai Michigan se hoon. Aap kahan se hain?', translation: 'I am from Michigan. Where are you from?' },
        { sender: 'receiver', text: 'Mai Ohio se hoon', translation: 'I am from Ohio' },
        { sender: 'sender', text: 'Aap kitane saal ki hain?', translation: 'How old are you?' },
        { sender: 'receiver', text: 'Mai biis saal kii hoon. Aur aapkii umar kitani hai?', translation: 'I am 20. What is your age?' },
        { sender: 'sender', text: 'Aapka major kya hai?', translation: 'What is your major?' },
        { sender: 'receiver', text: 'Mera major computer science hai. Aur aapka?', translation: 'My major is computer science. And yours?' },
        { sender: 'sender', text: 'Mera major neuroscience hai.', translation: 'My major is neuroscience.' },
        { sender: 'receiver', text: 'Ye ladka kaun hai?', translation: 'Who is this boy?' },
        { sender: 'sender', text: 'Ye Ali hai', translation: 'This is Ali' },
        { sender: 'receiver', text: 'Assalamu Aleikum Ali!', translation: 'Peace be upon you Ali!' },
        { sender: 'third', text: 'Walaikum Assalam! Aap kesay hain?', translation: 'Peace be upon you too! How are you?' },
        { sender: 'receiver', text: 'Mai theek hoon. Kahan rehtay hain aap?', translation: 'All is well. Where do you live?' },
        { sender: 'third', text: 'Mai Chicago mein rehta hoon.', translation: 'I live in Chicago.' },
        { sender: 'receiver', text: 'Acha. Mai class ja raha hoon. Aap se milkr khushi hoi!', translation: 'Okay. I am going to class now. Nice to meet you! ' },
        { sender: 'third', text: 'Aap se milkr khushi hoi!', translation: 'Nice to meet you!' },
        { sender: 'receiver', text: 'Khuda hafiz Esha. Phir milenge.', translation: 'Bye Esha. Until we meet again.' },
        { sender: 'sender', text: 'Khuda hafiz!', translation: 'Goodbye!' },]); // Array to store messages for chat display


    const [informalMessages] = useState<Message[]>([
        { sender: 'sender', text: 'Salaam!', translation: 'Hello!' },
        { sender: 'receiver', text: 'Salaam!', translation: 'Hello!' },
        { sender: 'sender', text: 'Kya haal hai?', translation: 'How are you?' },
        { sender: 'receiver', text: 'Sab theek hai. Aur tum?', translation: 'All is well. And you?' },
        { sender: 'sender', text: 'Class chalen?', translation: 'Should we go to class?' },
        { sender: 'receiver', text: 'Chalo', translation: 'Lets go' },
        { sender: 'sender', text: 'Acha. Phir milenge. Khuda hafiz.', translation: 'Okay. See you later. Bye.' },
        { sender: 'receiver', text: 'Theek hai. Khuda hafiz.', translation: 'Okay. Bye.' },]); // Array to store messages for chat display

    const [numberEmailMessages] = useState<Message[]>([
        { sender: 'sender', text: 'Salaam Yusuf! Kya chal raha hai?', translation: 'Hello Yusuf. What is going on?' },
        { sender: 'receiver', text: 'Salaam Esha! Sab theek hai. Aapka kya haal hai?', translation: 'Hello Esha! All is well. How are you?' },
        { sender: 'sender', text: 'Sab theek hai. Acha, aapka email address kya hai?', translation: 'All is well. Okay, what is your email address?' },
        { sender: 'receiver', text: 'Mera email yusuf@gmail.com hai. Aur aapka?', translation: 'My email address is yusuf@gmail.com. And yours?' },
        { sender: 'sender', text: 'Mera email esha@gmail.com hai', translation: 'My email is esha@gmail.com' },
        { sender: 'receiver', text: 'Aapka phone number kya hai?', translation: 'What is your phone number?' },
        { sender: 'sender', text: 'Mera phone number 192.. hai. Aur aapka?', translation: 'My phone number is 192... And yours?' },
        { sender: 'receiver', text: 'Mera phone number 614... hai.', translation: 'My phone number is 614...' },
        { sender: 'sender', text: 'Shukriya. Phir milenge. Khuda hafiz', translation: 'Thank you. See you again. Bye.' },
        { sender: 'receiver', text: 'Accha, khuda hafiz.', translation: 'Okar, bye.' },]); // Array to store messages for chat display


    return (
        <div>

            <SidebarProvider>
                <AppSidebar />
                <SidebarTrigger />
                <div className="rightOfSidebar">
                    <ProgressBar />
                  
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

                    <div className='rowDisplay'>



                        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 4, marginTop: '50px' }} >
                            <div className='card'>
                                <Typography variant="h5">Example Formal Conversation</Typography>
                                <div className="conversation-container">
                                    <div className="chat-window">
                                        <div className="messages">
                                            {/* Display messages */}
                                            {formalMessages.map((message, index) => (
                                                <div
                                                    key={index}
                                                    className={`flex mb-2 ${message.sender === "sender" ? "justify-end" : "justify-start"}`}
                                                >
                                                    <div
                                                        className={`max-w-[70%] p-3 rounded-lg ${message.sender === "sender" ? "bg-blue-500 text-white rounded-br-none" : message.sender === "receiver" ? "bg-gray-100 text-gray-800 rounded-bl-none" : "bg-green-100 text-gray-800 rounded-bl-none"
                                                            }`}
                                                    >
                                                        {message.text}<br />
                                                        <div className='chatTranslation'>
                                                            <i>{message.translation}</i>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Paper>

                        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 4, marginTop: '50px' }} >
                            <div className='card'>
                                <Typography variant="h5">Example Informal Conversations</Typography>
                                <div className="conversation-container">
                                    <div className="chat-window">
                                        <div className="messages">
                                            {/* Display messages */}
                                            {informalMessages.map((message, index) => (
                                                <div
                                                    key={index}
                                                    className={`flex mb-2 ${message.sender === "sender" ? "justify-end" : "justify-start"}`}
                                                >
                                                    <div
                                                        className={`max-w-[70%] p-3 rounded-lg ${message.sender === "sender" ? "bg-blue-500 text-white rounded-br-none" : "bg-gray-100 text-gray-800 rounded-bl-none"
                                                            }`}
                                                    >
                                                        {message.text}<br />
                                                        <div className='chatTranslation'>
                                                            <i>{message.translation}</i>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}


                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className='card'>
                                <Typography variant="h5">Asking for number/email</Typography>
                                <div className="conversation-container">
                                    <div className="chat-window">
                                        <div className="messages">
                                            {/* Display messages */}
                                            {numberEmailMessages.map((message, index) => (
                                                <div
                                                    key={index}
                                                    className={`flex mb-2 ${message.sender === "sender" ? "justify-end" : "justify-start"}`}
                                                >
                                                    <div
                                                        className={`max-w-[70%] p-3 rounded-lg ${message.sender === "sender" ? "bg-blue-500 text-white rounded-br-none" : message.sender === "receiver" ? "bg-gray-100 text-gray-800 rounded-bl-none" : "bg-green-100 text-gray-800 rounded-bl-none"
                                                            }`}
                                                    >
                                                        {message.text}<br />
                                                        <div className='chatTranslation'>
                                                            <i>{message.translation}</i>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}


                                        </div>

                                    </div>

                                </div>
                            </div>
                        </Paper>

                    </div>


                </div>
            </SidebarProvider>

        </div>


    );
}

export default Greetings;
