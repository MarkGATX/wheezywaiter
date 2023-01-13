import { Typography } from "@mui/material"
import Container from "@mui/material/Container"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

export default function Lettuce() {
    return (
        <Container component='section' sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText', mb: 5, py: 1 }} >
            <Typography variant='h4' component='h4' sx={{ my: 4 }} xs={12}>
                Two Guys Talking About Lettuce
            </Typography>
            <Typography variant='body1' sx={{ my: 4 }} xs={12}>
                A bunch of hilarious nonsense with my pal, Greg Benson.
            </Typography>
            <Grid2 container  >
                <Grid2 xs={12}>
                    <iframe title="Two Guys Talking About Lettuce podcast" style={{ border: 'none' }} src="https://open.spotify.com/embed/show/5IEt0CUwU3uRG3gvamohKA?utm_source=generator" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </Grid2>
            </Grid2>
        </Container>

    )
}