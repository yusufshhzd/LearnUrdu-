import ConjugationTable from '@/components/ConjugationTable'
import ProgressBar from '@/components/ProgressBar/ProgressBar'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { List, ListItem, Paper, Typography } from '@mui/material'
import React from 'react'

const Possession = () => {

    const my = [
        ['Noun', 'Adjective'],
        ['Singular Masculine', 'Mera'],
        ['Feminine', 'Meri'],
        ['Plural Masculine', 'Meray'],

    ];

    const our = [
        ['Noun', 'Adjective'],
        ['Singular Masculine', 'Hamara'],
        ['Feminine', 'Hamari'],
        ['Plural Masculine', 'Hamaray'],

    ];

    const yourInformal = [
        ['Noun', 'Informal Adjective'],
        ['Singular Masculine', 'Tumhara'],
        ['Feminine', 'Tumhari'],
        ['Plural Masculine', 'Tumharay'],
    ];

    const yourFormal = [
        ['', 'Formal Adjective'],
        ['Singular Masculine', 'Aapka'],
        ['Feminine', 'Aapki'],
        ['Plural Masculine', 'Aapkay'],

    ];

    const hisHerInformal = [
        ['Noun', 'Inormal Adjective'],
        ['Singular Masculine', 'Uska'],
        ['Feminine', 'Uski'],
        ['Plural Masculine', 'Uskay'],

    ];

    const hisHerFormal = [
        ['', 'Formal Adjective'],
        ['Singular Masculine', 'Onka'],
        ['Feminine', 'Onki'],
        ['Plural Masculine', 'Onkay'],

    ];

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger />
            <div className="rightOfSidebar">
                <ProgressBar />

                <Typography variant="h4">Possessive Adjectives</Typography>
                <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 3 / 8, marginTop: '50px' }} >
                    <div className='card'>
                        <Typography variant="h5">Rules to remember</Typography>
                        <Typography style={{ textAlign: "center" }} variant="h6">✅ Each possessive adjective has 3 forms<br /> </Typography>
                        <Typography style={{ textAlign: "center" }} variant="h6">✅ The possessive adjective depends on the number and gender of the noun<br /></Typography>
                        <Typography style={{ textAlign: "center" }} variant="h6">✅ The sentence will end with 'hai' for singular nouns or 'hain' for plural nouns<br /> </Typography>
                    </div>
                </Paper>

                <div className='rowDisplay'>
                    <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1/2, marginTop: '50px' }} >
                        <div className='card'>
                            <Typography variant="h5">My</Typography>
                            <ConjugationTable data={my} />
                            <Typography style={{ textAlign: "center" }} variant="body1">
                                <b><i>My</i> name is Yusuf</b><br /> <i>Mera</i> naam Yusuf hai <br />
                            </Typography>
                            <Typography style={{ textAlign: "center" }} variant="body1">
                                <b><i>My</i> sister is outside</b><br /> <i>Meri</i> behen bahar hai <br />
                            </Typography>
                            <Typography style={{ textAlign: "center" }} variant="body1">
                                <b>Those are <i>my</i> clothes</b><br /> Wo <i>meray</i> kapray hain <br />
                            </Typography>
                        </div>
                    </Paper>

                    <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
                        <div className='card'>
                            <Typography variant="h5">Our</Typography>

                            <ConjugationTable data={our} />

                            <Typography style={{ textAlign: "center" }} variant="body1">
                                <b> <i>Our</i> friend is from Pakistan</b><br /> <i>Hamara</i> dost Pakistan se hai<br />
                            </Typography>

                            <Typography style={{ textAlign: "center" }} variant="body1">
                                <b> <i>Our</i> cat is outside</b><br /> <i>Hamari</i> billi bahar hai<br />
                            </Typography>

                            <Typography style={{ textAlign: "center" }} variant="body1">
                                <b><i>Our</i> kids are playing</b><br /><i>Hamaray</i> bachey khel rahey hain <br />
                            </Typography>

                        </div>
                    </Paper>
                </div>

                <div className='rowDisplay'>

                    <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
                        <div className='card'>
                            <Typography variant="h5">Your</Typography>

                            <ConjugationTable data={yourInformal} />
                            <ConjugationTable data={yourFormal} />

                            <Typography style={{ textAlign: "center" }} variant="body1">
                                <b>Where is <i>your (formal)</i> key?</b><br /> <i>Aapki</i> chaabi kaha hai?<br />
                            </Typography>

                            <Typography style={{ textAlign: "center" }} variant="body1">
                                <b>What is <i>your (formal)</i> name?</b><br /> <i>Aapka</i> naam kya hai?<br />
                            </Typography>

                            <Typography style={{ textAlign: "center" }} variant="body1">
                                <b>Those are <i>your (informal)</i> kids</b><br /> Wo <i>tumharay</i> bachey hain <br />
                            </Typography>

                        </div>
                    </Paper>

                    <Paper elevation={7} sx={{ backgroundColor: "#E8E9EB", width: 1 / 2, marginTop: '50px' }} >
                        <div className='card'>
                            <Typography variant="h5">His/Her/Their</Typography>


                            <ConjugationTable data={hisHerInformal} />
                            <ConjugationTable data={hisHerFormal} />

                            <Typography style={{ textAlign: "center" }} variant="body1">
                                <b> <i>His/Her/Their (formal) </i> cat is outside</b><br /> <i>Onki</i> billi bahar hai<br />
                            </Typography>

                            <Typography style={{ textAlign: "center" }} variant="body1">
                                <b> <i>His/Her/Their (formal) </i> dog is outside</b><br /> <i>Onka</i> kutta bahar hai<br />
                            </Typography>

                            <Typography style={{ textAlign: "center" }} variant="body1">
                                <b><i>His/Her/Their (informal)</i> kids are playing</b><br /><i>Uskay</i> bachey khel rahey hain <br />
                            </Typography>

                        </div>
                    </Paper>

                </div>
            
            </div>

        </SidebarProvider>
    )
}

export default Possession
