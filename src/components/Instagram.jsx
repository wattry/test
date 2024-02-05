import { Paper, Typography } from '@mui/material';

import { Section} from './sections/Section'

export function Instagram() {
  return (<Section>
    <Typography variant="h2" >Media</Typography>
    <iframe
      class="instagram-media instagram-media-rendered"
      id="instagram-embed-0"
      src="https://www.instagram.com/rockstarphil/embed/?cr=1&v=14&wp=1792"
      allowtransparency="true"
      allowfullscreen="true"
      frameborder="0"
      height="372"
      scrolling="no"
      data-instgrm-payload-id="instagram-media-payload-0"
      style={{
        backgroundColor: 'white',
        borderRadius: '3px',
        border: '1px solid rgb(219, 219, 219)',
        boxShadow: 'none',
        display: 'block',
        margin: '0px 0px 12px',
        minWidth: '326px',
        padding: '0px'
      }}
    >
    </iframe>
  </Section>)
}