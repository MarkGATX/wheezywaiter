import { Box, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import youtube from '../../images/youtube.png'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import reddit from '../../images/reddit.png'
import insta from '../../images/insta.png'
import patreon from '../../images/patreon.png'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <Box component='footer' sx={{ backgroundColor: 'primary.main', height: '12rem', color: 'primary.contrastText', pt:2, pb:5}}>
                <Grid2 container sx={{ justifyContent: 'space-between', height: '100%', alignItems: 'center', m: 2 }}>
                    <Grid2 container xs={12} spacing={5} sx={{justifyContent:'center', width:'100%'}}>
                        <Grid2 xs={1} ><img onClick={() => { window.open('https://www.youtube.com/wheezywaiter', '_blank') }} src={youtube} className='footerIcons' alt="youtube logo" /></Grid2>
                        <Grid2 xs={1} ><img onClick={() => { window.open('http://reddit.com/r/beardlovers', '_blank') }} src={reddit} className='footerIcons' alt="reddit logo" /></Grid2>
                        <Grid2 xs={1} ><img onClick={() => { window.open('http://www.twitter.com/wheezywaiter', '_blank') }} src={twitter} className='footerIcons' alt="twitter logo" /></Grid2>
                        <Grid2 xs={1}><img onClick={() => { window.open('http://www.facebook.com/craigbenzine', '_blank') }} src={facebook} className='footerIcons' alt="facebook logo" /></Grid2>
                        <Grid2 xs={1} ><img onClick={() => { window.open('https://instagram.com/wheezywaiter', '_blank') }} src={insta} className='footerIcons' alt="instagram logo" /></Grid2>
                        <Grid2 xs={1} ><img onClick={() => { window.open('http://patreon.com/wheezywaiter', '_blank') }} src={patreon} className='footerIcons' alt="patreon logo" /></Grid2>
                    </Grid2>
                    <Grid2 className='busInquiry' xs={12} sm={5} sx={{textAlign:'center'}}>
                        <Typography variant='subtitle2'>
                            FOR BUSINESS INQUIRIES...
                        </Typography>
                        <Typography variant='subtitle2' sx={{cursor:'pointer'}} onClick={() => { window.open('mailto:bashley@settebelloentertainment.com?subject=Business Inquiry for Wheezy Waiter') }}>
                            bashley@settebelloentertainment.com
                        </Typography>
                    </Grid2>
                    <Grid2 className='copyright' xs={12} sm={5}>
                        <Typography variant='subtitle2'>
                            Content © 2020 by Wheezy. Site design by Mark Gardner
                        </Typography>

                    </Grid2>
                </Grid2>
            </Box>
        </>
    )
}