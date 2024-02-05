import useMediaQuery from '@mui/material/useMediaQuery';

export function SpotifyPlayer(props) {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (<iframe
    src="https://open.spotify.com/embed/album/6smHi8h2URRQ8lMxWlyuup?utm_source=generator&theme=0"
    style={{
      height: isSmall ? "600px" : '360px',
      width: "100%",
      border: "0px",
      borderRadius: '0px',
      backgroundColor: '#CCCCCC'
    }}
    allowFullScreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy">
    </iframe>);
}