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
import { Footer } from './Footer';

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
      <Footer />
    </Grid>
  );
}