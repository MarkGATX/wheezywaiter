import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import testImage from '../../images/testImage.jpg'
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Button from "@mui/material/Button";
import { useEffect } from "react";
import gapi from "https://apis.google.com/js/api.js"
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import { AspectRatio } from "react-aspect-ratio";
import Tooltip from "@mui/material/Tooltip";
import './WheezyVids.css'

import API from '../utils/API.js'

export default function WheezyVids() {
    // Set state for the search result and the search query
    const [result, setResult] = useState([]);
    const [MainVid, setMainVid] = useState('');

    useEffect(() => {
        const wheezyVidLookup = async () => {
            try {
                const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=4&playlistId=UUQL5ABUvwY7YoW5lgMyAS_w&key=${process.env.REACT_APP_YT_API_KEY}`);
                setMainVid(response.data.items[0].snippet.resourceId.videoId);
                setResult(response.data.items);
            } catch (error) {
                console.error(error);
            }
        };
        wheezyVidLookup();

    }, []);

    return (
        <Container sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText', display: 'flex', flexWrap: 'wrap', mb: 5 }} >
            <Typography variant='h3' sx={{ mb: 2 }} xs={12}>
                Video goodness...
            </Typography>
            <Grid2 container spacing={3} xs={12} sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', mb: 3 }}>
                <Grid2 xs={12} >
                    {MainVid ? (
                        <iframe
                            class="video"
                            src={`https://www.youtube.com/embed/${MainVid}`}
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                            allowfullscreen>
                        </iframe>
                    ) : (
                        <AspectRatio ratio='16/9' style={{ maxWidth: '100%' }}>
                            <Skeleton variant="rectangular" sx={{ width: '100%' }} />
                        </AspectRatio>
                    )
                    }
                    
                </Grid2>
                {result ? result.map((video, index) => (
                    <Grid2 xs={6} md={3}>
                        <AspectRatio ratio='16/9' style={{ maxWidth: '100%' }}>
                            <Tooltip title={video.snippet.title} placement='top'>
                    <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} style={{ width: '100%' }} key={index}/>
                    </Tooltip>
                    </AspectRatio>
                    </Grid2>
                )
                    
                ) : (
                    <Grid2 xs={6} md={3}>
                        {/* <AspectRatio ratio='16/9' style={{ maxWidth: '100%' }}> */}
                            <Skeleton variant="rectangular" sx={{ width: '100%' }} />
                        {/* </AspectRatio> */}
                    </Grid2>
                )}
                
                <Grid2 xs={6} md={3} sx={{ textAlign: 'right', display: 'inline-flex', justifyContent: 'end', verticalAlign: 'middle' }}>
                    <Button variant='contained' sx={{ backgroundColor: 'secondary.main', color: '#fff' }}><ArrowBackOutlinedIcon />More this way</Button>
                </Grid2>
                <Grid2 xs={6} md={3} sx={{ display: 'inline-flex', verticalAlign: 'middle' }}>
                    <Button onClick={() => { API.wheezyVidLookup() }} variant='contained' sx={{ color: '#fff' }}>More that way <ArrowForwardOutlinedIcon /></Button>
                </Grid2>
            </Grid2>
        </Container>
    )
}