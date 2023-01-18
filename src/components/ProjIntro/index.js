import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import craigHotDog from '../../images/Craig_Hot_Dog_JPG.webp';
import { Parallax } from "react-parallax";

export default function ProjIntro () {
    return (
        <Container sx={{ my: 5 }}>
                <Grid2 container spacing={5} component='section'>
                    <Grid2 xs={12} md={5}>
                        <Typography variant='h4' color='text.main'>
                            What? You thought all I did was YouTube?
                        </Typography>
                        <Typography variant='body1' color='text.main'>
                            Well you'd be wrong! How does that make you feel, huh? HUH?
                        </Typography>
                        <Typography variant='body1' color='text.main'>
                            I'm just kidding. You should feel amazing about yourself. You're awesome.
                        </Typography>
                        <Typography variant='body1' color='text.main'>
                            I have done a few other things you can find here.
                        </Typography>
                    </Grid2>
                    <Grid2 xs={12} md={7} style={{ height: '100%' }}>
                        <Parallax bgImage={craigHotDog} strength={150}>
                            <img src={craigHotDog} fetchpriority='high' alt='Craig Benzine in a hot dog suit' style={{ width: '100%', visibility: 'hidden' }} />
                        </Parallax>
                    </Grid2>
                </Grid2>
            </Container >
    )
}