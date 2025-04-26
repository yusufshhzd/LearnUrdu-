import { Routes, Route } from 'react-router-dom';
import { WelcomePage } from './pages/WelcomePage';
import SimplePresent from './pages/Tenses/Present/SimplePresent';
import './App.css';
import React, { createContext } from 'react';
import SimplePast from './pages/Tenses/Past/SimplePast';
import Tenses from './pages/Tenses/Tenses';
import Introduction from './pages/Introduction';
import BasicSentenceStructure from './pages/BasicSentenceStructure';
// import ChatBot from './pages/ChatBot';
import { SidebarProvider } from '@/components/ui/SidebarProvider';
import Hona from './pages/Hona';
import PresentContinous from './pages/Tenses/Present/PresentContinuous';
import Postpositions from './pages/Postpositions';
import ChatBotWidget from './components/ChatBotWidget';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import PresentPerfect from './pages/Tenses/Present/PresentPerfect';
import PresentPerfectContinuous from './pages/Tenses/Present/PresentPerfectContinuous';
import PastContinuous from './pages/Tenses/Past/PastContinuous';
import PastPerfect from './pages/Tenses/Past/PastPerfect';
import PastPerfectContinuous from './pages/Tenses/Past/PastPerfectContinuous';
import SimpleFuture from './pages/Tenses/Future/SimpleFuture';
import FutureContinuous from './pages/Tenses/Future/FutureContinuous';
import FuturePerfect from './pages/Tenses/Future/FuturePerfect';
import FuturePerfectContinuous from './pages/Tenses/Future/FuturePerfectContinuous';
import Greetings from './pages/Greetings';

function App() {
  return (
    <SidebarProvider>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/hona" element={<Hona />} />
        <Route path="/basic-sentence-structure" element={<BasicSentenceStructure />} />

        <Route path="/tenses" element={<Tenses />} />

        <Route path="/simple-present" element={<SimplePresent />} />
        <Route path="/present-continuous" element={<PresentContinous />} />
        <Route path="/present-perfect" element={<PresentPerfect />} />
        <Route path="/present-perfect-continuous" element={<PresentPerfectContinuous />} />


        <Route path="/simple-past" element={<SimplePast />} />
        <Route path="/past-continuous" element={<PastContinuous />} />
        <Route path="/past-perfect" element={<PastPerfect />} />
        <Route path="/past-perfect-continuoud" element={<PastPerfectContinuous />} />

        <Route path="/simple-future" element={<SimpleFuture />} />
        <Route path="/future-continuous" element={<FutureContinuous />} />
        <Route path="/future-perfect" element={<FuturePerfect />} />
        <Route path="/future-perfect-continuous" element={<FuturePerfectContinuous />} />

        <Route path="/greetings-introductions" element={<Greetings />} />

        <Route path="/postpositions" element={<Postpositions />} />


        {/* <Route path="/chat-bot" element={<ChatBot />} /> */}
      </Routes>
      <ChatBotWidget/>
    </SidebarProvider>

  );
}

export default App;
