import { Typography } from "@mui/material"
import Container from "@mui/material/Container"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

export default function Driftless() {

    return (
        <Container component='section' sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText', mb: 5, py: 1 }} >
            <Typography variant='h4' component='h4' sx={{ my: 4 }} xs={12}>
                Driftless Pony Club
            </Typography>
            <Typography variant='body1' sx={{ my: 4 }} xs={12}>
                I'm the lead singer and guitarist for The Driftless Pony Club, too. Here's our music for your ears' pleasure.
            </Typography>
            <Grid2 container  >
                <Grid2 xs={12}>
                    <iframe title='Dritfless Pony Club on Spotify' style={{ border: 'none' }} src="https://open.spotify.com/embed/artist/73fHDNSAlMaBAoBmXUAuyd?utm_source=generator" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </Grid2>
            </Grid2>
        </Container>

    )
}