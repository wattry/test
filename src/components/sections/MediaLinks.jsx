import { Link, Grid, useMediaQuery } from '@mui/material';

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
          src="/logos/Spotify_logo_with_text.svg" 
          href={'https://open.spotify.com/album/0kxzzUsHz7RZBYBMjy3Bbt?si=1YCbkgBYQP-NVk9kTT'}
          
          />
        <MediaLink
          src="/logos/AppleMusic_2019.svg"
          href="https://music.apple.com/us/album/folksinger/1727566434"
        />
        <MediaLink
          src="/logos/Bandcamp-logotype-color.svg"
          href="https://rockstarphil.bandcamp.com/album/folksinger"
        />
        <MediaLink
          style={{ maxHeight: '2rem' }}
          src="/logos/Instagram-logo-black-white-horizontal-png.png"
          href="https://www.instagram.com/rockstarphil/"
        />
      </Grid>
    </Grid>)
}