import { Routes, Route } from 'react-router-dom';
import { WelcomePage } from './pages/WelcomePage';
import SimplePresent from './pages/SimplePresent';
import './App.css';
import React, { createContext } from 'react';
import SimplePast from './pages/SimplePast';
import Tenses from './pages/Tenses';
import Introduction from './pages/Introduction';
import BasicSentenceStructure from './pages/BasicSentenceStructure';
// import ChatBot from './pages/ChatBot';
import { SidebarProvider } from '@/components/ui/SidebarProvider';
import Hona from './pages/Hona';
import PresentContinous from './pages/PresentContinous';
import Postpositions from './pages/Postpositions';
import ChatBotWidget from './components/ChatBotWidget';
import { SupabaseClient, createClient } from '@supabase/supabase-js';



function App() {
  return (
    <SidebarProvider>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/basic-sentence-structure" element={<BasicSentenceStructure />} />
        <Route path="/tenses" element={<Tenses />} />
        <Route path="/simple-present" element={<SimplePresent />} />
        <Route path="/simple-past" element={<SimplePast />} />
        <Route path="/hona" element={<Hona />} />
        <Route path="/present-continuous" element={<PresentContinous />} />
        <Route path="/postpositions" element={<Postpositions />} />


        {/* <Route path="/chat-bot" element={<ChatBot />} /> */}
      </Routes>
      <ChatBotWidget/>
    </SidebarProvider>

  );
}

export default App;
