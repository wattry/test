import { useState } from 'react';
import { Grid, useMediaQuery } from '@mui/material';

import { BandCampPlayer } from "./BandCampPlayer";
import { SpotifyPlayer } from './SpotifyPlayer';
import { SelectInput } from './SelectInput';

export function AlbumSwitcher() {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [type, setType] = useState('folksinger');
  const onChange = (value) => {
    setType(value);
  };

  return (<Grid container flexDirection="column" pr={isSmall ? 0 : 5}>
    <Grid item pb={1} flex>
      <SelectInput
        fullWidth
        source="album"
        label="Album"
        value={type}
        onChange={onChange}
        choices={[{
          id: 'folksinger',
          name: 'Folksinger',
        }, {
          id: 'collision',
          name: 'Collision',
        }]} />
    </Grid>
    <Grid item flex>
      {type === 'folksinger' && <BandCampPlayer
        album="901286560"
        size={"large"}
        bgco={"ffffff"}
        linkco={"333333"}
        artwork={"small"}
        tracklist={"true"}
        transparent={"true"}
      />}
      {type === 'collision' && <SpotifyPlayer />}
    </Grid>
  </Grid>);
}