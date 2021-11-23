

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function Badge(props: any) {
  return (
        <Stack direction={{ xs: 'column', sm: 'row' }}  spacing={{ xs: 1, sm: 1, md: 1 }} sx={{ justifyContent: 'center', width: '100%' }}>
          {props.badges.map((badge: any, index:number) => ( <Chip label={badge.label} size="small" key={index}  color={badge.color} />))}
        </Stack>
  );
}