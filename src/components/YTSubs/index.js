import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import Container from "@mui/material/Container";
import './YTSubs.css'

const useScript = (url) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [url]);
};

export default function YTSubs() {


    return (

        <>
            <Container >

                <Box>{useScript("https://apis.google.com/js/platform.js")}</Box>
                <Typography variant='h4'  xs={12} sx={{mb:3}}>
                    Subscribe
                </Typography>
                <Box component='section' xs={12} md={5} sx={{display:'flex', flexWrap:'wrap', gap:'1em', alignItems:'center', justifyContent:'center'}} >
                    <Typography variant='body1' component='div'  xs={12}>
                        Hey, while you're here, why don't you subscribe to my YouTube channel?
                    </Typography>
                    <Box className='darkBoxContainer'>
                        <Box className="g-ytsubscribe" data-channel="WheezyWaiter" data-layout="full" data-count="default" xs={12}></Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}