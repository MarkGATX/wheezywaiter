import WheezyStory from "../WheezyStory"
import { Box } from "@mui/material"
import Toolbar from "@mui/material/Toolbar"
import WheezyVids from "../WheezyVids"

export default function Main () {

    return (
        <>
        <Box component='main'>
            <WheezyStory />
            <WheezyVids />
        </Box>

        </>
    )
}