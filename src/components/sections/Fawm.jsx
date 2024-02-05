import {
  Paper,
  Typography,
  Link,
  Box
} from '@mui/material';

import { Section } from './Section'

function FawmLink(props) {
  const { children, href } = props;

  return (<Box
    component="span"
  >
    <Link target="_blank" href={href}> {children}</Link>
  </Box>);
}

export function Fawm(props) {
  return (
    <Section >
      <Typography gutterBottom variant="h3" component='h2' >February Album Writing Month (FAWM)</Typography>
      <Typography paragraph>If it’s February, you might find some new songs on my <FawmLink href="https://write.fawm.org/@philnorman">FAWM page.</FawmLink> Even better, come join in and write 14 songs in 28 days, too.</Typography>
      <div>
        <Typography >Personal FAWM demo collections:</Typography>
        <Typography gutterBottom marginLeft={4}>
          Four Februarys
          <FawmLink
            href={'https://soundcloud.com/rockstarphil/sets/four-februarys-volume-1'}>
            Volume 1 (2007-2010)</FawmLink>
        </Typography>
        <Typography gutterBottom marginLeft={4}>
          Four February
          <FawmLink
            href={'https://soundcloud.com/rockstarphil/sets/four-februarys-volume-2-2011'}>
            Volume 2 (2011-2014)</FawmLink>
        </Typography>
      </div>
      <div>
        <Typography >Appearances on official FAWM compilations:</Typography>
        <Typography gutterBottom marginLeft={4}>
          Four Februarys
          <FawmLink
            href={'https://open.spotify.com/album/3qINasI7Ib2Er7roUhoE4c'}>
            Volume 1 (2007-2010)</FawmLink>
        </Typography>
        <Typography gutterBottom marginLeft={4}>
          Four February
          <FawmLink
            href='https://open.spotify.com/album/4CURH57esFSRSxxp2X3Lgc'>
            Volume 2 (2011-2014)</FawmLink>
        </Typography>
      </div>
    </ Section>)
}