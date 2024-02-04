import { useEffect, useState, Suspense } from 'react';
import { forwardRef } from 'react';
import { Paper, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

<iframe style="border: 0; width: 350px; height: 470px;" src=""
  seamless><a href="https://rockstarphil.bandcamp.com/album/folksinger">Folksinger by Phil Norman</a></iframe>
const Styled = styled(function BandCampPlayer(props) {
  const {
    baseUrl = 'https://bandcamp.com/EmbeddedPlayer',
    children,
    album,
    className,
    options = {
      size: "large",
      bgco: "ffffff",
      linkco: "333333",
      artwork: "small",
      transparent: "true",
    }
  } = props;
  const [path, setPath] = useState();

  useEffect(() => {
    if (!path) {
      const arr = [];

      for (const [key, value] of Object.entries(options)) {
        arr.push([`${key}=${value}`]);
      }

      setPath(`${baseUrl}/album=${album}/${arr.join('/') }`);
    }
  }, []);

  return (<Suspense >
    <iframe
    className={className}
    src={path}
    seamless
  >
    <Link href="https://rockstarphil.bandcamp.com/album/folksinger">Folksinger by Phil Norman</Link>
    </iframe>
  </Suspense>);
}, { name: 'RSP-bandcamp-player' })({
  border: '0', width: '350px', height: '470px'
});

export { Styled as BandCampPlayer };
