import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 345,
    backgroundColor: '#424242',
    color: '#fff',
    border: '1px solid #424242'
  },
  media: {
    height: 140,
  },
});



const ArtistList = ({selectedArtist, setSelectedArtist, artistId, setArtistId, artistData}) => {
  const classes = useStyles();
  const goToProfile = (artist) => {
    setArtistId(artist.id)
    setSelectedArtist(artist)
  }


  return (
      <div className='artist-list'>
        {
         
            artistData.map((artist, index) => (

              <Card className={classes.root} key={index} variant="outlined">
                  <CardActionArea
                    onClick={() => {
                          goToProfile(artist)
                      }}>
                      <CardMedia
                      className={classes.media}
                      image={artist.images[0].url}
                      title="Contemplative Reptile"
                      />
                      <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                          {artist.name}
                      </Typography>
                      <Typography variant="body2" color="inherit" component="p">
                          {artist.genres.map((genre) => genre + ', ')}
                      </Typography>
                      </CardContent>
                  </CardActionArea>
                  <CardActions>
                      <Button size="small" color="inherit" variant="outlined" onClick={() => {
                          goToProfile(artist)
                      }}> 
                      Profile
                      </Button>
                  </CardActions>
          </Card>
          )) 
          }
    </div>
  );
}

export default ArtistList;
