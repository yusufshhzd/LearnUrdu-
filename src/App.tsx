import { Routes, Route, useNavigate } from 'react-router-dom';
import { WelcomePage } from './pages/WelcomePage';
import SimplePresent from './pages/Tenses/Present/SimplePresent';
import './App.css';
import React, { createContext } from 'react';
import SimplePast from './pages/Tenses/Past/SimplePast';
import Tenses from './pages/Tenses/Tenses';
import Introduction from './pages/Introduction/Introduction';
import BasicSentenceStructure from './pages/Introduction/BasicSentenceStructure';
// import ChatBot from './pages/ChatBot';
import { SidebarProvider } from '@/components/ui/SidebarProvider';
import Hona from './pages/Introduction/Hona';
import PresentContinous from './pages/Tenses/Present/PresentContinuous';
import Postpositions from './pages/Other/Postpositions';
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
import Greetings from './pages/Vocab/Greetings';
import NounGenders from './pages/Introduction/NounGenders';
import Home from './pages/Vocab/Home';
import Education from './pages/Vocab/Education';
import FoodAndEating from './pages/Vocab/FoodAndEating';
import Daily from './pages/Vocab/Daily';
import Commands from './pages/Other/Commands';
import Possession from './pages/Other/Possession';
import Login from './Login';
import { AuthProvider } from '@/AuthContext'

function App() {

  return (
    <AuthProvider>
    <SidebarProvider>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/hona" element={<Hona />} />
        <Route path="/basic-sentence-structure" element={<BasicSentenceStructure />} />
        <Route path="/noun-genders" element={<NounGenders />} />


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
        <Route path="/home-vocab" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/food" element={<FoodAndEating />} />
        <Route path="/daily-routines" element={<Daily />} />




        <Route path="/postpositions" element={<Postpositions />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/possession" element={<Possession />} />

        <Route path="/login" element={<Login />} />

        


      </Routes>
      <ChatBotWidget/>
    </SidebarProvider>
    </AuthProvider>

  );
}

export default App;
