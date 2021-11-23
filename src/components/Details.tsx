
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Badge from './Badge';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Details(props: any) {

  const pokemonImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world'

  return (
    <Dialog
      fullScreen
      open={props.open}
      onClose={props.onClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={props.onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container sx={{
        padding: '12px 0px'
      }}>
        <Grid container rowSpacing={1} >
          <Grid item xs={5} className="no-shadow">
            <Item className="no-shadow">
              <Card className={props.selectedPokeMon && props.selectedPokeMon.badges[0].bgColor}>
               <div className="card-header">
                 <div>
                   <div className="title">
                     {props.selectedPokeMon && props.selectedPokeMon.name}
                   </div>
                   <div className="title-id"> #{props.selectedPokeMon && props.selectedPokeMon.id}</div>
                 </div>
                 <div>
                 <Badge badges={props.selectedPokeMon && props.selectedPokeMon.badges}></Badge>
                 </div>
                 
               </div>
                <CardMedia sx={{ minHeight: '420px', objectFit: 'fill', padding: '4px' }}
                  component="img"
                  height="194"
                  image={`${pokemonImageUrl}/${props.selectedPokeMon && props.selectedPokeMon.id}.svg`}
                  alt="pokemon"
                ></CardMedia>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={7}>
            <Item className="no-shadow">
              <Grid container rowSpacing={1}>
                <Grid item xs={12}>
                  <Item>2</Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>2</Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>2</Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  );
};