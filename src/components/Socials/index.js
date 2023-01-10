import { Container, Typography} from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import youtube from '../../images/youtube.png'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import reddit from '../../images/reddit.png'
import insta from '../../images/insta.png'
import patreon from '../../images/patreon.png'
import './Socials.css'

export default function Socials () {
    return (
        <Container>

            <Typography variant='h3'>
                Socials
            </Typography>
            <Typography variant='body' >
                Follow me on all the socials to make sure you don't miss a thing.
            </Typography>
            <Grid2 container spacing={5} sx={{alignItems:'center', flexWrap:'wrap', justifyContent:'space-around', textAlign:'center', m:5}}>
                <Grid2 xs={6} sm={4}><img onClick={()=> {window.open('https://www.youtube.com/wheezywaiter', '_blank')}} src={youtube} className='socialIcons' alt="youtube logo" /></Grid2>
                <Grid2 xs={6} sm={4}><img onClick={()=> {window.open('http://reddit.com/r/beardlovers', '_blank')}} src={reddit} className='socialIcons' alt="reddit logo"/></Grid2>
                <Grid2 xs={6} sm={4}><img onClick={()=> {window.open('http://www.twitter.com/wheezywaiter', '_blank')}} src={twitter} className='socialIcons' alt="twitter logo"/></Grid2>
                <Grid2 xs={6} sm={4}><img onClick={()=> {window.open('http://www.facebook.com/craigbenzine', '_blank')}} src={facebook} className='socialIcons' alt="facebook logo"/></Grid2>
                <Grid2 xs={6} sm={4}><img onClick={()=> {window.open('https://instagram.com/wheezywaiter', '_blank')}} src={insta} className='socialIcons' alt="instagram logo"/></Grid2>
                <Grid2 xs={6} sm={4}><img onClick={()=> {window.open('http://patreon.com/wheezywaiter', '_blank')}} src={patreon} className='socialIcons' alt="patreon logo"/></Grid2>
            </Grid2>

        </Container>
    )
}