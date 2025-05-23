import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import '@/css/ChatBot.css'; // Custom styles for the chatbot
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { Paper, Typography } from '@mui/material';
import ConjugationTable from '@/components/ConjugationTable';
import ProgressBar from '@/components/ProgressBar/ProgressBar';


const Education: React.FC = () => {

    return (
        <div>

            <SidebarProvider>
                <AppSidebar />
                <SidebarTrigger />
                <div className="rightOfSidebar">
                    <ProgressBar />
                  
                    <Typography variant="h4">Education (Taleem)</Typography>
                   
                    <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 4, marginTop: '50px' }} >
                        <div className='card'>
                            <Typography variant="h5">Greetings Vocabulary</Typography>
                        </div>
                    </Paper>

                </div>
            </SidebarProvider>

        </div>


    );
}

export default Education;
