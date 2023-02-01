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
import './CCFilm.css'

export default function CCFilm() {

    const [ResultFilm, setResultFilm] = useState([]);
    const [MainVidFilm, setMainVidFilm] = useState('');
    const [NextVidsFilm, setNextVidsFilm] = useState('');
    const [PrevVidsFilm, setPrevVidsFilm] = useState('');

    const wheezyFilmUpdate = async (token) => {
        try {
            const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=4&pageToken=${token}&playlistId=PL8dPuuaLjXtN-Bd-H_TGq72CN50Fpv_JX&key=${process.env.REACT_APP_YT_API_KEY}`);
            setResultFilm(response.data.items);
            setNextVidsFilm(response.data.nextPageToken);
            setPrevVidsFilm(response.data.prevPageToken)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const wheezyFilmLookup = async () => {
            try {
                const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=4&playlistId=PL8dPuuaLjXtN-Bd-H_TGq72CN50Fpv_JX&key=${process.env.REACT_APP_YT_API_KEY}`);
                setMainVidFilm(response.data.items[0].snippet.resourceId.videoId);
                setResultFilm(response.data.items);
                setNextVidsFilm(response.data.nextPageToken);
                setPrevVidsFilm(response.data.prevPageToken);
            } catch (error) {
                console.error(error);
            }
        };
        wheezyFilmLookup();

    }, []);



    return (

        <Container component='section' sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText', display: 'flex', flexWrap: 'wrap', mb: 5 }} >
            <Typography variant='h4' component='h4' sx={{ my: 4 }} xs={12}>
                Crash Course: Film History
            </Typography>
            <Typography variant='body1' sx={{ my: 4 }} xs={12}>
                We talk about film history and the birth of the motion picture to help understand how we get meaning out of cinema.
            </Typography>
            <Grid2 container spacing={3} xs={12} sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', mb: 3 }}>
                <Grid2 xs={12} >
                    {MainVidFilm ? (
                        <iframe
                            title="Film History Video Frame"
                            className="video"
                            src={`https://www.youtube.com/embed/${MainVidFilm}`}
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
                {ResultFilm ? ResultFilm.map((video, index) => (
                    <Grid2 xs={6} md={3} key={index}>
                        <AspectRatio ratio='16/9' style={{ maxWidth: '100%' }}>
                            <Tooltip title={video.snippet.title} sx={{ backgroundColor: 'palette.secondary.main', color: 'palette.secondary.contrastText' }} placement='top'>
                                <img className='vidThumb' src={video.snippet.thumbnails.high.url} alt={video.snippet.title} onClick={() => setMainVidFilm(video.snippet.resourceId.videoId)} style={{ width: '100%' }} />
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
                        {PrevVidsFilm ? (
                            <Button variant='contained' onClick={() => { wheezyFilmUpdate(PrevVidsFilm) }} ><ArrowBackOutlinedIcon />Other film stuff</Button>
                        ) : (
                            <Button disabled variant='contained' onClick={() => { wheezyFilmUpdate(PrevVidsFilm) }} ><ArrowBackOutlinedIcon />Click the other one</Button>
                        )
                        }

                    </Grid2>

                    <Grid2 xs={7} md={3} sx={{ display: 'inline-flex', verticalAlign: 'middle' }}>
                        {NextVidsFilm ? (
                            <Button onClick={() => { wheezyFilmUpdate(NextVidsFilm) }} variant='contained' >More film stuff<ArrowForwardOutlinedIcon /></Button>
                        ) : (
                            <Button disabled onClick={() => { wheezyFilmUpdate(NextVidsFilm) }} variant='contained' >That's all!<ArrowForwardOutlinedIcon /></Button>
                        )}

                    </Grid2>
                </Grid2>
            </Grid2>
        </Container>
    )
}