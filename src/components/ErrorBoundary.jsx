import { Component } from "react";
import { Typography, useTheme } from '@mui/material';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null
    };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    this.setState({ error, info });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      const { Fallback } = this.props;

      return <Fallback {...this.state} />;
    }

    return this.props.children;
  }
}

function DefaultFallback(props) {
  const theme = useTheme();

  return <div
    style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '2rem',
      border: `1px solid ${theme.palette.error[theme.palette.mode]}`
    }}
  >
    <Typography gutterBottom variant='h5' color={theme.palette.error[theme.palette.mode]}>An Error occurred rendering the application</Typography>
    <Typography paragraph>We can't load your code</Typography>
    <Typography paragraph sx={{ maxWidth: '50%', textAlign: 'left'}}>{props?.error?.stack}</Typography>
  </div>;
}

ErrorBoundary.defaultProps = {
  Fallback: DefaultFallback
}
