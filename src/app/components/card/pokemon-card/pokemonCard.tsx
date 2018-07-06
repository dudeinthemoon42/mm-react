import * as React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import "./pokemonCard.css"

import pikachu from "../../../../static/images/pikachu.png"

export class PokemonCard extends React.Component {
  public render() {
    return (
        <div>
            <Card className="card">
                <CardMedia
                className="media"
                image={pikachu}
                title="Pikachu"
                />
                <CardContent>
                <Typography variant="headline" component="h2">
                    Pikachu
                </Typography>
                <Typography component="p">
                    Pikachu is an electric mouse Pokemon. It was the first Pokemon chosen by Ash Ketchum in the TV Series, and his closest friend.
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
                </CardActions>
            </Card>
        </div>
    );
  }
}

export default PokemonCard;
