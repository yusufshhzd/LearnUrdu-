import { Stack, Typography, Card, CardContent, Paper } from '@mui/material';
import ContainedButton from '../../components/ContainedButton';
import { useNavigate } from 'react-router-dom';
import SimplePresent from './Present/SimplePresent';
import React from 'react';
import { SidebarProvider, SidebarTrigger } from '../../components/ui/sidebar';
import { AppSidebar } from '../../components/app-sidebar';
import ChatBotWidget from '@/components/ChatBotWidget';


function Tenses() {

  const navigate = useNavigate();


  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />

      <div className='rightOfSidebar'>


        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 4, marginTop: '30px' }} >
          <div className='tensesHeader'>
            Present Tenses
          </div>

          <div className='tenses'>

            <div className='buttonTenseDiv'>
              <ContainedButton text={"Simple\nPresent"} onClick={() => navigate('/simple-present')} />
              <div className='exampleTense'>
                <Typography>"I eat food"</Typography>
              </div>
              <div className='exampleTense'>
                <Typography> "Mai khana khata hoon" </Typography>
              </div>
            </div>

            <div className='buttonTenseDiv'>
              <ContainedButton text={"Present\nContinuous"} onClick={() => navigate('/present-continuous')} />
              <div className='exampleTense'>
              <Typography>"I am eating food"</Typography>
              </div>
              <div className='exampleTense'>
              <Typography>"Mai khana kha raha hoon"</Typography>
              </div>
            </div>



            <div className='buttonTenseDiv'>
              <ContainedButton text={"Present\nPerfect"} onClick={() => navigate('/present-perfect')} />
              <div className='exampleTense'>
                Example
              </div>
              <div className='exampleTense'>
                Example
              </div>
            </div>

            <div className='buttonTenseDiv'>
              <ContainedButton text={"Present\nPerfect\nContinuous"} onClick={() => navigate('/present-perfect-continuous')} />
              <div className='exampleTense'>
                Example
              </div>
              <div className='exampleTense'>
                Example
              </div>
            </div>
          </div>

        </Paper>

        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 4, marginTop: '30px' }} >

          <div className='tensesHeader'>
            Past Tenses
          </div>

          <div className='tenses'>

            <div className='buttonTenseDiv'>
              <ContainedButton text={"Simple\nPast"} onClick={() => navigate('/simple-past')} />
              <div className='exampleTense'>
                <Typography>"I ate food"</Typography>
              </div>
              <div className='exampleTense'>
                <Typography>"Mai ne khana khaya"</Typography>
              </div>
            </div>

            <div className='buttonTenseDiv'>
              <ContainedButton text={"Past\nContinuous"} onClick={() => navigate('/past-continuous')} />
              <div className='exampleTense'>
                Example
              </div>
              <div className='exampleTense'>
                Example
              </div>
            </div>

            <div className='buttonTenseDiv'>
              <ContainedButton text={"Past\nPerfect"} onClick={() => navigate('/past-perfect')} />
              <div className='exampleTense'>
                Example
              </div>
              <div className='exampleTense'>
                Example
              </div>
            </div>

            <div className='buttonTenseDiv'>
              <ContainedButton text={"Past\nPerfect\nContinuous"} onClick={() => navigate('/past-perfect-continuous')} />
              <div className='exampleTense'>
                Example
              </div>
              <div className='exampleTense'>
                Example
              </div>
            </div>
          </div>

        </Paper>


        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 4, marginTop: '30px', marginBottom: '30px' }} >

          <div className='tensesHeader'>
            Future Tenses
          </div>

          <div className='tenses'>

            <div className='buttonTenseDiv'>
              <ContainedButton text={"Simple\nFuture"} onClick={() => navigate('/simple-future')} />
              <div className='exampleTense'>
                <Typography>"I will eat food"</Typography>
              </div>
              <div className='exampleTense'>
                <Typography>"Mai khana khaoonga"</Typography>
              </div>
            </div>

            <div className='buttonTenseDiv'>
              <ContainedButton text={"Future\nContinuous"} onClick={() => navigate('/future-continuous')} />
              <div className='exampleTense'>
                Example
              </div>
              <div className='exampleTense'>
                Example
              </div>
            </div>

            <div className='buttonTenseDiv'>
              <ContainedButton text={"Future\nPerfect"} onClick={() => navigate('/future-perfect')} />
              <div className='exampleTense'>
                Example
              </div>
              <div className='exampleTense'>
                Example
              </div>
            </div>

            <div className='buttonTenseDiv'>
              <ContainedButton text={"Future\nPerfect\nContinuous"} onClick={() => navigate('/future-perfect-continuous')} />
              <div className='exampleTense'>
                Example
              </div>
              <div className='exampleTense'>
                Example
              </div>
            </div>
          </div>

        </Paper>

      </div>
    </SidebarProvider>
  );
}

export default Tenses;
