import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import { AspectRatio } from "react-aspect-ratio";
import Tooltip from "@mui/material/Tooltip";
import './CCGov.css'

export default function CCGov() {

    const [ResultGov, setResultGov] = useState([]);
    const [MainVidGov, setMainVidGov] = useState('');
    const [NextVidsGov, setNextVidsGov] = useState('');
    const [PrevVidsGov, setPrevVidsGov] = useState('');

    const wheezyGovUpdate = async (token) => {
        try {
            console.log(token)
            const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=4&pageToken=${token}&playlistId=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H&key=${process.env.REACT_APP_YT_API_KEY}`);
            console.log(response.data)
            setResultGov(response.data.items);
            setNextVidsGov(response.data.nextPageToken);
            setPrevVidsGov(response.data.prevPageToken)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const wheezyGovLookup = async () => {
            try {
                const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=4&playlistId=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H&key=${process.env.REACT_APP_YT_API_KEY}`);
                console.log(response.data)
                setMainVidGov(response.data.items[0].snippet.resourceId.videoId);
                setResultGov(response.data.items);
                setNextVidsGov(response.data.nextPageToken);
                setPrevVidsGov(response.data.prevPageToken);
            } catch (error) {
                console.error(error);
            }
        };
        wheezyGovLookup();

    }, []);



    return (

        <Container component='section' sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText', display: 'flex', flexWrap: 'wrap', mb: 5 }} >
            <Typography variant='h4' component='h4' sx={{ my: 4 }} xs={12}>
                Crash Course: U.S. Government
            </Typography>
            <Typography variant='body1' sx={{ my: 4 }} xs={12}>
                We take a tour of U.S. Government and Politics based on the 2014 AP U.S. Government and Politics curriculum.
            </Typography>
            <Grid2 container spacing={3} xs={12} sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', mb: 3 }}>
                <Grid2 xs={12} >
                    {MainVidGov ? (
                        <iframe
                            title="US Government Video Frame"
                            className="video"
                            src={`https://www.youtube.com/embed/${MainVidGov}`}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                            allowFullScreen
                        >
                        </iframe>
                    ) : (
                        <AspectRatio ratio='16/9' style={{ maxWidth: '100%' }}>
                            <Skeleton variant="rectangular" sx={{ width: '100%', height: '100%' }} />
                        </AspectRatio>
                    )
                    }

                </Grid2>
                {ResultGov ? ResultGov.map((video, index) => (
                    <Grid2 xs={6} md={3} key={index}>
                        <AspectRatio ratio='16/9' style={{ maxWidth: '100%' }}>
                            <Tooltip title={video.snippet.title} sx={{ backgroundColor: 'palette.secondary.main', color: 'palette.secondary.contrastText' }} placement='top'>
                                <img className='vidThumb' src={video.snippet.thumbnails.high.url} alt={video.snippet.title} onClick={() => setMainVidGov(video.snippet.resourceId.videoId)} style={{ width: '100%' }} />
                            </Tooltip>
                        </AspectRatio>
                    </Grid2>
                )

                ) : (
                    <Grid2 xs={6} md={3}>
                        <AspectRatio ratio='16/9' style={{ maxWidth: '100%' }}>
                            <Skeleton variant="rectangular" sx={{ width: '100%' }} />
                        </AspectRatio>
                    </Grid2>
                )}
                <Grid2 xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
                    <Grid2 xs={6} md={3} sx={{ textAlign: 'right', display: 'inline-flex', justifyContent: 'end', verticalAlign: 'middle' }}>
                        {PrevVidsGov ? (
                            <Button variant='contained' onClick={() => { wheezyGovUpdate(PrevVidsGov) }} ><ArrowBackOutlinedIcon />More on the gov</Button>
                        ) : (
                            <Button disabled variant='contained' onClick={() => { wheezyGovUpdate(PrevVidsGov) }} ><ArrowBackOutlinedIcon />Click the other one</Button>
                        )
                        }

                    </Grid2>

                    <Grid2 xs={7} md={3} sx={{ display: 'inline-flex', verticalAlign: 'middle' }}>
                        {NextVidsGov ? (
                            <Button onClick={() => { wheezyGovUpdate(NextVidsGov) }} variant='contained' >Learn more<ArrowForwardOutlinedIcon /></Button>
                        ) : (
                            <Button disabled onClick={() => { wheezyGovUpdate(NextVidsGov) }} variant='contained' >That's all!<ArrowForwardOutlinedIcon /></Button>
                        )}

                    </Grid2>
                </Grid2>
            </Grid2>
        </Container>
    )
}