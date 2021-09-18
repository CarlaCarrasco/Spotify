import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  textField: {
    color: '#fff'
  }
}));

export default function Search({artistData, setArtistData}) {
  const classes = useStyles();

  const allArtist = [...artistData];


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Search Artist" color="grey" className={classes.textField}
        type="search" variant="standard" onChange={(e) => {
          if(e.target.value){
            const searchedArtists = allArtist.filter(artist => {
            if(artist.name.includes(e.target.value)){
              return artist
            }
          })
        setArtistData(searchedArtists) 
        }
        else{
          setArtistData(allArtist)
        }
        console.log(allArtist)
      }}/>
    </form>
  );
}
