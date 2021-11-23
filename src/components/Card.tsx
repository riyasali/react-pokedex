import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Badge from './Badge';
import { CardActionArea } from '@mui/material';

export default function PokeCard(props: any) {
  const pokemonImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world'
  return (
    <Card sx={{ maxWidth: 400 }} className={props.pokemon.badges[0].bgColor}>
       <CardActionArea onClick={() => props.openDetails(props.pokemon)}>
      <CardMedia
        component="img"
        height="320"
        width="320"
        image={`${pokemonImageUrl}/${props.pokemon.id}.svg`}
        alt="green iguana"
        sx={{ minHeight: '320px', background: '#eee', objectFit: 'scale-down', cursor: 'pointer'
       }}
      />
      <CardContent sx={{ paddingTop: '8px' }}>
      <Typography variant="button" display="block" gutterBottom sx={{color: 'GrayText', textAlign: 'left'}}>
        #{props.pokemon.id}
      </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
          {props.pokemon.name}
        </Typography>
      </CardContent>
      <CardActions>
       <Badge badges={props.pokemon.badges}></Badge>
      </CardActions>
      </CardActionArea>
    </Card>
  );
}