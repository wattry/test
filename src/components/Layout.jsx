import {
  Grid
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { HeaderImage } from './HeaderImage';
import { MediaLinks } from './sections/MediaLinks';
import { Intro } from './sections/Intro';
import { Discography } from './sections/Discography';
import { Fawm } from './sections/Fawm';
import { OtherPhils } from './sections/OtherPhils';
import { Instagram } from './Instagram';
import { Footer } from './Footer';
import { Section } from './sections/Section';

export function Layout() {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      direction='column'>
      <HeaderImage />
      <MediaLinks />
      <Intro />
      <Discography />
      <Fawm />
      <OtherPhils />
      <Grid item>
        <Instagram />
      </Grid>
      <Footer />
    </Grid>
  );
}