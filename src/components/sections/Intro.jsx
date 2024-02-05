import {
  Typography,
  Grid
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { AlbumSwitcher } from '../AlbumSwitcher';
import { Section } from './Section';

export function Intro() {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Section >
      <Grid container justifyContent={'center'} >
        <Grid
          item
          sm={12}
          lg={8}
          pr={isSmall ? 0 : 5}
          pt={2}
        >
          <Typography paragraph align="left" >
            Hey, kind friends,
          </Typography>
          <Typography paragraph align="left">
            Folksinger is my first solo album since “Collision” in 2000. In the meantime, my wife and I have raised our kids, I’ve had the good fortune to be in several bands and make albums with great friends, and I’ve done so many gigs that it felt like a relief during the COVID lockdown when I stepped back from performing.
          </Typography>
          <Typography paragraph align="left">
            I haven’t felt the call to get back on stage more regularly, but I’ve still been writing songs. Mostly I sing them on my couch, but I sure love those chances to share songs together around campfires and on porches with friends.
          </Typography>
          <Typography paragraph align="left">
            These are the songs that have kept me company for the last few years. I hope these songs might keep you company, too.
          </Typography>
          <Typography align="left">
            Thanks for listening.
          </Typography>
        </Grid>
        <Grid item sm={12} lg={4} mt={2} width="100%" sx={{ backgroundColor: '#FFFFFF' }}>
          <AlbumSwitcher />
        </Grid>
      </Grid>
    </Section>);
}