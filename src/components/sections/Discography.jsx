import {
  Typography,
  Link,
  Box,
  useMediaQuery,
  Grid
} from '@mui/material';

import { Section } from './Section';

const spotify = new URL('/spotify_icon.svg', import.meta.url);
const apple = new URL('/apple_music_icon.svg', import.meta.url);
const bc = new URL('/bandcamp_icon.png', import.meta.url);

function Icon(props) {
  const { side = 32, src } = props

  return (<img height={side} width={side} src={src} />);
}

function IconLink(props) {
  const { href, children } = props;

  return (<Box
    component="span"
  >
    <Link
      target="_blank"
      pl={1}
      href={href}>
      {children}
    </Link>
  </Box>)
}

function Bandcamp(props) {
  const { band, album } = props;

  return (<IconLink
    href={`https://${band}.bandcamp.com/album/${album}`}>
    <Icon src={bc.href} />
  </IconLink>);
}

function Spotify(props) {
  const { albumId } = props;

  return (<IconLink
    href={`https://open.spotify.com/album/${albumId}`}>
    <Icon src={spotify.href} />
  </IconLink >);
}

function AppleMusic(props) {
  const { album, id } = props;

  return (<IconLink
    href={`https://music.apple.com/us/album/${album}/${id}`}>
    <Icon src={apple.href} />
  </IconLink >);
}

function Feature(props) {
  const { feature } = props;

  return (feature && <Box component="span" fontWeight='bold'>"{feature}"</Box>)
}

function Entry(props) {
  const { name, year, access, children } = props;

  return (
    <Typography pl={1} pb={1} >
      <Box component="span" sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <Box component="span">{name} <Feature {...props} /> ({year}) {access}</Box>
        <Box component="span">{children}</Box>
      </Box>
    </Typography>
  );
}

export function Discography(props) {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Section
      paper={{ sx: { backgroundColor: '#CCCCCC', padding: 2 } }}
    >
      <Typography gutterBottom variant='h3' component='h2'>Discography:</Typography>
      <Entry name="Before" year='1996' access="Cassette only" />
      <Entry name="If By Yes" year='1998' access="CD only" />
      <Entry name="Collision" year='2000'>
        <Spotify albumId="6smHi8h2URRQ8lMxWlyuup" />
      </Entry>
      <Entry name="Cory Brammer & 32 Leaves" year='2003' access="CD only" />
      <Entry name="Blue Moonshine" feature="New Mountain Music" year='2005'>
        <Spotify albumId="29Coq3PubVosZy8ZmwzZST" />
        <AppleMusic album='new-mountain-music' id="76842729" />
      </Entry>
      <Entry name="Blue Moonshine" feature="Distilled EP" year='2011'>
        <Spotify albumId="431629884" />
        <AppleMusic album="distilled-ep" id="431629884" />
        <Bandcamp band="bluemoonshine" album="distilled" />
      </Entry>
      <Entry name="Appalachian Soul, self titled" year='2017'>
        <Spotify albumId="2Xp4sYvI1DUcIlV4UdhPvc" />
        <Bandcamp band="appalachiansoul" album="appalachian-soul" />
      </Entry>
      <Entry name="Folksinger" year='2024'>
        <Spotify albumId="0kxzzUsHz7RZBYBMjy3Bbt" />
        <AppleMusic album="folksinger" id="1727566434" />
        <Bandcamp band="rockstarphil" album="folksinger" />
      </Entry>
      <Typography pl={1} pb={1}>
        <Link
          target="_blank"
          href="/Phil Norman Folksinger - lyrics and chords.pdf">Lyrics and guitar chords for Folksinger</Link>
      </Typography>
    </Section>)
}