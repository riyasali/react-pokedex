
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import SearchBox from './SearchBox';

export default function Header(props:any) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                    PokeDex
                </Typography>
                <SearchBox search={props.search}></SearchBox>
            </Toolbar>
        </AppBar>
    );
}