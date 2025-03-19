import { Stack, Typography, Card, CardContent, Paper } from '@mui/material';
import ContainedButton from '../components/ContainedButton';
import { useNavigate } from 'react-router-dom';
import SimplePresent from './SimplePresent';
import SideNav from '../components/SideNav';
import React from 'react';
import { SidebarProvider, SidebarTrigger } from '../components/ui/sidebar';
import { AppSidebar } from '../components/app-sidebar';

function Home() {

  const navigate = useNavigate();


  return (
    <div className='App'>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider> 
      <div className='columnAlign'>


        <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 4, marginTop: '30px' }} >
          <div className='tensesHeader'>
            Present Tenses
          </div>

          <div className='tenses'>
            
            <div className='buttonTenseDiv'>
              <ContainedButton text={"Simple\nPresent"} onClick={() => navigate('/simple-present')} />
              <div className='exampleTense'>
                "I eat food"
              </div>
              <div className='exampleTense'>
                "Mai khana khata hoon"
              </div>
            </div>
           
            <div className = 'buttonTenseDiv'>
              <ContainedButton text={"Present\nContinuous"} onClick={undefined} />
              <div className='exampleTense'>
                "Example"
              </div>
              <div className='exampleTense'>
                "Example"
              </div>
            </div>
            
            
            
            <div className='buttonTenseDiv'>
              <ContainedButton text={"Present\nPerfect"} onClick={undefined} />
              <div className='exampleTense'>
                Example
              </div>
              <div className='exampleTense'>
                Example
              </div>
            </div>
            
            <div className='buttonTenseDiv'>
              <ContainedButton text={"Present\nPerfect\nContinuous"} onClick={undefined} />
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
                "I ate food"
              </div>
              <div className='exampleTense'>
                "Mai ne khana khaya"
              </div>
            </div>
           
            <div className='buttonTenseDiv'>
              <ContainedButton text={"Past\nContinuous"} onClick={undefined} />
              <div className='exampleTense'>
                Example
              </div>
              <div className='exampleTense'>
                Example
              </div>
            </div>
           
            <div className='buttonTenseDiv'>
              <ContainedButton text={"Past\nPerfect"} onClick={undefined} />
              <div className='exampleTense'>
                Example
              </div>
              <div className='exampleTense'>
                Example
              </div>
            </div>
           
            <div className='buttonTenseDiv'>
              <ContainedButton text={"Past\nPerfect\nContinuous"} onClick={undefined} />
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
              <ContainedButton text={"Simple\nFuture"} onClick={undefined} />
              <div className='exampleTense'>
                "I will eat food"
              </div>
              <div className='exampleTense'>
                "Mai khana khaoonga"
              </div>
            </div>
           
            <div className='buttonTenseDiv'>
              <ContainedButton text={"Future\nContinuous"} onClick={undefined} />
              <div className='exampleTense'>
                Example
              </div>
              <div className='exampleTense'>
                Example
              </div>
            </div>
           
            <div className='buttonTenseDiv'>
              <ContainedButton text={"Future\nPerfect"} onClick={undefined} />
              <div className='exampleTense'>
                Example
              </div>
              <div className='exampleTense'>
                Example
              </div>
            </div>
           
            <div className='buttonTenseDiv'>
              <ContainedButton text={"Future\nPerfect\nContinuous"} onClick={undefined} />
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
    </div>
  );
}

export default Home;
