import {
  Typography,
  Link,
  Box,
  useMediaQuery
} from '@mui/material';

import { Section } from './Section';

function Bandcamp(props) {
  const { band, album } = props;

  return (<Box
    component="span"
  >
    <Link target="_blank" href={`https://${band}.bandcamp.com/album/${album}`}>Bandcamp</Link>
  </Box>);
}

function Spotify(props) {
  const { albumId } = props;

  return (<Box
    component="span"
  >
    <Link target="_blank" href={`https://open.spotify.com/album/${albumId}`}>Spotify</Link>
  </Box>);
}

function AppleMusic(props) {
  const { album, id } = props;

  return (<Box
    component="span"
  >
    <Link target="_blank" href={`https://music.apple.com/us/album/${album}/${id}`}>Apple Music</Link>
  </Box>);
}

function Feature(props) {
  const { feature } = props;

  return (feature && <Box component="span" fontWeight='bold'>"{feature}"</Box>)
}

function Entry(props) {
  const { name, year, access, children } = props;

  return (
    <Typography pl={1} pb={1}>{name} <Feature {...props} /> ({year}) {access} {children}</Typography>
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
        <Entry name="Collision" year='2000' access="CD only">
          <Spotify albumId="6smHi8h2URRQ8lMxWlyuup" />
        </Entry>
        <Entry name="Cory Brammer & 32 Leaves" year='2003' access="CD only" />
        <Entry name="Blue Moonshine" feature="New Mountain Music" year='2005' access="CD only">
          <Spotify albumId="29Coq3PubVosZy8ZmwzZST" />,&nbsp;
          <AppleMusic album='new-mountain-music' id="76842729" />
        </Entry>
        <Entry name="Blue Moonshine" feature="Distilled EP" year='2011'>
          <Spotify albumId="431629884" />,&nbsp;
          <AppleMusic album="distilled-ep" id="431629884" />,&nbsp;
          <Bandcamp band="bluemoonshine" album="distilled" />
        </Entry>
        <Entry name="Appalachian Soul, self titled" year='2017'>
          <Spotify albumId="2Xp4sYvI1DUcIlV4UdhPvc" />,&nbsp;
          <Bandcamp band="appalachiansoul" album="appalachian-soul" />,&nbsp;
        </Entry>
        <Entry name="Folksinger" year='2024'>
          <Spotify albumId="0kxzzUsHz7RZBYBMjy3Bbt" />,&nbsp;
          <AppleMusic album="folksinger" id="1727566434" />,&nbsp;
          <Bandcamp band="rockstarphil" album="folksinger" />
        </Entry>
      <Typography pl={1} pb={1}>
        <Link
          target="_blank"
          href="/Phil Norman Folksinger - lyrics and chords.pdf">Lyrics and guitar chords for Folksinger</Link>
      </Typography>
    </Section>)
}