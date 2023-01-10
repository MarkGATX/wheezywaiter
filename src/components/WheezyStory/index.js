import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import craigHeadshot from '../../images/Craig_headshot_1000.jpg'
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";

export default function WheezyStory() {

    return (
        <>
        <Container sx={{my:5}}>
            <Grid2 container spacing={5}  component='section'>
                <Grid2 xs={12} md={5}>
                    <Typography variant="h3" sx={{color:'primary.contrastText'}}>
                        My name is Craig. 
                    </Typography>
                    <Typography variant='p' sx={{color:'primary.contrastText'}}>
                    I've made thousands of videos since 2007 in order to quiet the "I should do somethings" in my brain. And now I've done way too many things but I gotta keep going because I made a deal with the all seeing all knowing space baby in the center of the universe. He gave me YouTube glory in exchange for my beard if I ever stop churning out the vids.<br></br>
                    Sometimes my wife, Chyna is in them, too.
                    </Typography>
                </Grid2>
                <Grid2 xs={12} md={7}>
                    <img src={craigHeadshot} alt='Craig Benzine mugging for the camera' style={{ width: '100%' }} />
                </Grid2>
            </Grid2>
            </Container>
        </>
    )
}
