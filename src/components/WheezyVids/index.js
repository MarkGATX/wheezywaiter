import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import testImage from '../../images/testImage.jpg'
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Button from "@mui/material/Button";

export default function WheezyVids() {
    return (
        <Container sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText', display:'flex', flexWrap:'wrap', mb:3 }} >
            <Typography variant='h3' sx={{mb:2}} xs={12}>
                Video goodness...
            </Typography>
            <Grid2 container spacing={3} xs={12} sx={{display:'flex', justifyContent:"center", alignItems:'center', mb:3}}>
                <Grid2 xs={12}>
                    <img src={testImage} alt='main space for test video' style={{ width: '100%' }}/>
                </Grid2>
                <Grid2 xs={6} md={3}>
                    <img src={testImage} alt='secondary space for test video' style={{ width: '100%' }}/>
                </Grid2>
                <Grid2 xs={6} md={3}>
                    <img src={testImage} alt='secondary space for test video' style={{ width: '100%' }}/>
                </Grid2>
                <Grid2 xs={6} md={3}>
                    <img src={testImage} alt='secondary space for test video' style={{ width: '100%' }}/>
                </Grid2>
                <Grid2 xs={6} md={3}>
                    <img src={testImage} alt='secondary space for test video' style={{ width: '100%' }}/>
                </Grid2>
                <Grid2 xs={6} md={3} sx={{textAlign:'right', display: 'inline-flex', justifyContent:'end', verticalAlign: 'middle'}}>
                <Button variant='contained' sx={{backgroundColor: 'secondary.main', color:'#fff'}}><ArrowBackOutlinedIcon />More this way</Button>
                </Grid2>
                <Grid2 xs={6} md={3} sx ={{display: 'inline-flex', verticalAlign: 'middle'}}>
                   <Button variant='contained' sx={{color:'#fff'}}>More that way <ArrowForwardOutlinedIcon /></Button>
                </Grid2>
            </Grid2>
        </Container>
    )
}