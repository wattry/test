import { useEffect, useState, Suspense } from 'react';
import { forwardRef } from 'react';
import { Paper, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

<iframe style="border: 0; width: 350px; height: 470px;" src=""
  seamless><a href="https://rockstarphil.bandcamp.com/album/folksinger">Folksinger by Phil Norman</a></iframe>
const Styled = styled(function BandCampPlayer(props) {
  const {
    baseUrl = 'https://bandcamp.com/EmbeddedPlayer',
    className,
    ...rest
  } = props;
  const [path, setPath] = useState();

  useEffect(() => {
    if (!path) {
      const arr = [];

      for (const [key, value] of Object.entries(rest)) {
        arr.push([`${key}=${value}`]);
      }

      setPath(`${baseUrl}/${arr.join('/') }`);
    }
  }, [rest]);

  return (<Suspense >
    <iframe
    className={className}
    src={path}
    seamless
    frameBorder="0"
  >
    <Link href="https://rockstarphil.bandcamp.com/album/folksinger">Folksinger by Phil Norman</Link>
    </iframe>
  </Suspense>);
}, { name: 'RSP-bandcamp-player' })({
  border: '0',
  width: '100%',
  height: '360px'
});

export { Styled as BandCampPlayer };
