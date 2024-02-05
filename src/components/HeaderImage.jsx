import {
  Typography,
  Grid,
  Box
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const phil = new URL('/Phil-widewebcrop.jpg', import.meta.url);

export function HeaderImage() {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (<Grid item
    sx={{
      position: 'relative',
    }}
  >
    <img
      style={{
        width: '100%',
        maxWidth: '1920px',
        maxHeight: '800px'
      }}
      src={phil.href} />
    <div style={{
      position: 'absolute',
      top: isSmall ? '4.5rem' : '10rem',
      right: isSmall ? '0.5rem' : '8rem',
    }}>
      <Typography
        variant={isSmall ? 'h4' : "h2"}
        sx={{ color: '#FFFFFF' }}>Phil Norman</Typography>
      <Typography
        variant={isSmall ? 'h5' : "h3"}
        sx={{ color: '#FFFFFF' }}>Folksinger</Typography>
    </div>
  </Grid>);
}