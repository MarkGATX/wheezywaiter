import WheezyStory from "../WheezyStory"
import { Box } from "@mui/material"
import WheezyVids from "../WheezyVids"
import Socials from "../Socials"
import WOP from "../WOP"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import YTSubs from "../YTSubs";
import SubstackSubs from "../SubstackSubs";


export default function Main(props) {


    return (
        <>
            <Box component='main'>
                <WheezyStory/>
                <WheezyVids />
                <Socials />
                <WOP />
            </Box>
        </>
    )
}