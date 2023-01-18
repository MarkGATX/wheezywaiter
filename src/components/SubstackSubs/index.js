import { Typography } from "@mui/material"
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function SubstackSubs() {
    return (
        <>
            <Container >
                <Typography variant='h4' xs={12} sx={{ mb: 3 }}>
                    Newsletter
                </Typography>
                <Box component='section' xs={12} md={5} sx={{display:'flex', flexWrap:'wrap', gap:'1em', alignItems:'center', justifyContent:'center'}} >
                    <Typography variant='body1' >
                        What? You like reading better? Fine. I guess you can subscribe to my newsletter, too.
                    </Typography>
                    <iframe title='substack subscribe' frameBorder='0' src="https://wheezywaiter.substack.com/embed"></iframe>
                </Box>
            </Container>
        </>
    )
}