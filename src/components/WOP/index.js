import { Box, Container, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import './WOP.css'

const wopMembers = [
    'Byron Marsh',
    'Bill Raub',
    'Keith Killoran',
    'Martin',
    'Jakub Koziol',
    'Jennifer Fredericks',
    'Kristin Bennett',
    'Martha Stroud',
    'Matt',
    'Today I Found Out',
    'Dominic Lavallee',
    'Thomas Henauer',
    'A Howard',
    'Alexander Bragdon',
    'Allison Rice',
    'Amy Mackiewicz',
    'andreamsofcake',
    'Andreas Hess',
    'Anna Vishnyakov',
    'Ben Sanders',
    'Björn Gustafsson',
    'Bkuuzin',
    'Bored Nihilist',
    'Brad Kipe',
    'Caitlin Deane',
    'Dora Grote',
    'emiliescarlett',
    'Gecko736',
    'Graeme Boyd',
    'Gregg Crawford',
    'Gwen Haley',
    'Hakan Akkan',
    'Harry Needham',
    'Jake Coogle',
    'Janet Kownacki',
    'John Hall',
    'Kat Farrell',
    'Laura Ambrose',
    'Lee Porteous',
    'Leslee Bighorn',
    'Lily Blum',
    'Linnea Solberg',
    'Mathis',
    'Matt Miller',
    'Matthew Palden Gocha',
    'Nabil Masud',
    'RV Diem',
    'Sjoerd Wennekes',
    'Stefan Beer',
    'Trint Ladd',
    'Victoria Goh',
]


export default function WOP() {
    return (
        <Container>
            <Typography variant='h3'>
                Wall of Preeminence
            </Typography>
            <Typography variant='body'>
                You too can join the lauded souls on the heralded Wall of Preeminence. All you have to do is become a Patron to get your name emblazoned in 72 dpi on a picture of some bricks.
            </Typography>
            <Box className='wop' >
                <Grid2 container spacing={2} sx={{ flexWrap: 'wrap', justifyContent:'space-around', mx:2 }}>
                    {wopMembers.map((name) => (
                        <Grid2 sm={6} md={4}>
                            <Typography variant="h5" component="p" sx={{textShadow:'#000 5px 5px 8px;'}}>
                                {name}
                            </Typography>
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
        </Container>
    )

}