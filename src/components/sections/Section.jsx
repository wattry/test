import {
  Paper,
  Grid,
  useMediaQuery
} from '@mui/material';

export function Section(props) {
  const {
    grid = {
    },
    paper = {
      elevation: 0,
      sx: { padding: '1rem' }
    },
    children
  } = props;
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));


  return (<Grid item {...grid} >
    <Paper {...paper} >
      <div style={{ paddingLeft: isSmall ? 0 : '10rem' }}>
        {children}
      </div>
    </Paper>
  </Grid>);
}
