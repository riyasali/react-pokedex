
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Footer() {
    return (
 <Box
 component="footer"
 sx={{
   py: 3,
   px: 2,
   mt: 'auto',
   backgroundColor: (theme) =>
     theme.palette.mode === 'light'
       ? theme.palette.grey[200]
       : theme.palette.grey[800],
 }}
>
 <Container maxWidth="sm">
   <Typography variant="body1" sx={{textAlign:'center'}}>
     PokeDex using React and PokeAPI
   </Typography>
 </Container>
</Box>
    );
};