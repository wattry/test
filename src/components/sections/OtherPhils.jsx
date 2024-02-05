import { Typography, Link } from '@mui/material';

import { Section } from './Section';

export function OtherPhils(props) {
  return (<Section paper={{ sx: { backgroundColor: '#CCCCCC', padding: 2 } }}>
    <Typography gutterBottom variant='h3' component='h2' >
      Other Musical Phil Normans
    </Typography>
    <Typography paragraph>
      Other musical Phil Normans that I am not, but enjoy knowing are out there doing cool things:
    </Typography>
    <Typography paragraph>
      I am not in a west coast jazz band. That’s the&nbsp;
      <Link href="https://www.facebook.com/PhilNormanTentet/">Phil Norman Tentet</Link>
    </Typography>
    <Typography paragraph>
      I do not know how to play the cello.&nbsp;
      <Link href="https://www.gravitycello.com/">Phil Norman in Colorado does.</Link>
    </Typography>
    <Typography paragraph>
      I do not write books about the Beatles.&nbsp;
      <Link href="https://www.simonandschuster.com/authors/Philip-Norman/18228509">Philip Norman does.</Link>
    </Typography>
  </Section>);
}