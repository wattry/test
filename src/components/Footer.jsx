import {
  Typography,
  Link,
  Grid,
  useMediaQuery,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Styled = styled('div', { name: 'rspFooter' })(({ isSmall }) => {
  return ({
    maxHeight: '5rem',
    display: 'flex',
    paddingTop: isSmall ? '1rem' : '1rem',
    paddingBottom: isSmall ? '1rem' : '1rem',
    paddingLeft: isSmall ? '0.2rem' : '2rem',
    paddingRight: isSmall ? '0.2rem' : '2rem',
    justifyContent: 'space-between'
  })
});

export function Footer() {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (<Grid item>
    <Paper elevation={10} square>
    <Styled isSmall={isSmall}>
      <Typography>&copy;Phil Norman 2024</Typography>
      <Typography>Email: <Link href="mailto:rockstarphil@gmail.com">rockstarphil@gmail.com</Link></Typography>
      <Typography display="none">
        Congrats on the album Phil, the it's great. It's a privilege to know you,
        and to have listened to your music while I worked on this for a kinds friend.
        You said it best, "It's not what I have, it's who I know". I'm so have to met
        you on my road.
      </Typography>
    </Styled>
    </Paper>
  </Grid>);
}

