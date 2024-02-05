import { Link, Grid, useMediaQuery } from '@mui/material';

const spotify = new URL('/logos/Spotify_logo_with_text.svg', import.meta.url);
const apple = new URL('/logos/AppleMusic_2019.svg', import.meta.url);
const bandcamp = new URL('/logos/Bandcamp-logotype-color.svg', import.meta.url);
const instagram = new URL('/logos/Instagram-logo-black-white-horizontal-png.png', import.meta.url);

function MediaLink(props) {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const { src, href, ...rest } = props;
  const style = { maxHeight: isSmall ? '1rem' : '2rem' };

  return (<Grid item >
    <Link href={href} target="_blank">
      <img src={src} style={style} {...rest} />
    </Link>
  </Grid>)
}

export function MediaLinks() {
  console.log('spotify', spotify);
  return (
    <Grid item paddingTop={1}>
      <Grid
        container
        spacing={2}
        alignContent="center"
        alignItems="center"
        justifyContent="center"
      >
        <MediaLink
          src={spotify.href}
          href={'https://open.spotify.com/album/0kxzzUsHz7RZBYBMjy3Bbt?si=1YCbkgBYQP-NVk9kTT'}
          />
        <MediaLink
          src={apple.href}
          href="https://music.apple.com/us/album/folksinger/1727566434"
        />
        <MediaLink
          src={bandcamp.href}
          href="https://rockstarphil.bandcamp.com/album/folksinger"
        />
        <MediaLink
          style={{ maxHeight: '2rem' }}
          src={instagram.href}
          href="https://www.instagram.com/rockstarphil/"
        />
      </Grid>
    </Grid>)
}