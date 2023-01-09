import WheezyStory from "../WheezyStory"
import { Box } from "@mui/material"
import WheezyVids from "../WheezyVids"
import Socials from "../Socials"

export default function Main () {

    return (
        <>
        <Box component='main'>
            <WheezyStory />
            <WheezyVids />
            <Socials />
        </Box>

        </>
    )
}