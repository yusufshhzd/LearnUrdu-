import { Typography } from '@mui/material';
import ConjugationTable from '../components/ConjugationTable';
import React from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';

export const SimplePresent = () => {

  const data1 = [
    ['English', 'Masculine', 'Feminine'],
    ['I eat', 'Mai khata hoon', 'Mai khati hoon'],
    ['You eat (informal)', 'Tum khatay ho', 'Tum khati ho'],
    ['You eat (formal)', 'Aap khatay hain', 'Aap khati hain'],
    ['She/He/It eats (informal)', 'Wo khatay hain', 'Wo khati hain'],
    ['She/He/It eats (formal)', 'Wo khata he', 'Wo khati he']
  ];
   

    const data2 = [
      ['English', 'Masculine', 'Feminine'],
      ['We eat', 'Hum khatey hain', 'Hum khati hain'],
      ['You eat (informal)', 'Tum khatay ho', 'Tum khati ho'],
      ['You eat (formal)', 'Aap khatay hain', 'Aap khati hain'],
      ['They eat', 'Wo khatay hain', 'Wo khati hain']
     
  ];

  return (
    <div>
      <Typography variant="h4">Simple Present Tense</Typography>
      <Typography>After learning verb and sentence structure</Typography>
      <Typography>How to conjugate the verb</Typography>
      <Typography>Let us take the verb "Khana" which means "to eat"</Typography>
      <Typography>Now take just the verbal stem: "Kha"</Typography>
      <Typography>Now add one of the suffixes depending on the number and gender of the subject of the sentence  -ti</Typography>
      <Typography>-ta</Typography>
      <Typography>-tay</Typography>

      <div>
        <h4>Singular</h4>
        <ConjugationTable data={data1} />
      </div>

      <div>
        <h4>Plural</h4>
        <ConjugationTable data={data2} />
      </div>
      
    </div>
      
      );
}

export default SimplePresent;