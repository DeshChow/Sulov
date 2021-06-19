import React from 'react';

import { useHistory } from 'react-router';
import { categoryUrl } from '../../../urls';

import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { picUrl } from '../../../constants/picUrl';
import { AllOutTwoTone, MicNoneTwoTone, NoEncryptionTwoTone, Translate } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';
import { BottomNavigation } from '@material-ui/core';
import './CategoryCard.css'; 


const useStyles = makeStyles((theme) => ({


  card: {
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    cursor: 'pointer',
    transition: '0.5s ease-in-out',
    '&:hover': {
    '& $cardContent':{
      //   display: 'block',
      //   opacity: 1,
      opacity: 1,
      transform: 'translateY(0px)',
     },
      opacity: 0.7,
      transform: 'translateY(-20px)',
    },
    '& $cardContent':{
      postion: 'relative',
      // background: 'rgba(76, 175, 80, 0.6)',
      background: 'rgba(0,0,0, 0.5)',
      color: 'white !important',
      typography: {
        fontFamily: [
          'Roboto',
          'sans-serif'
        ].join(','),
      },
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: '2rem',
      fontWeight: '900',
      zIndex: 3,
      opacity: 0,
      transform: 'translateY(30px)',
      transition: '0.5s all',
    },
    '&:before': {
      content:'',
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      zIndex:2,
      transition: '0.5s all',
      opacity:0,
    },
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height:'100%',
    width: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    flexGrow: 2,
  },
   cardContent: {
     flexGrow: 1,
   }
}));


const CategoryCard = (props) => {

    const {pic,_id,title} = props.data;

  

    const history = useHistory();


    const routeChange = (category,id)=>
    {
       return history.push(categoryUrl(category,id));
    }

   
 

const classes = useStyles();

return (
                <Card onClick={()=>routeChange(title,_id)} className={classes.card} >
                  <CardMedia
                    className={classes.cardMedia}
                    image={picUrl(pic)}
                    title="Image title"
                  >
                  </CardMedia>

                  <CardContent  className={classes.cardContent}>
                
                    <Typography>
                       <h2>{title}</h2>
                       <button className="card-button">See More</button>
                    </Typography>
        
                  </CardContent> 
                
                  {/* <CardActions>
                  
                    <Button size="large" color="primary">
                      see more
                    </Button>
                  </CardActions>  */}
                </Card>
              
    );
};

export default CategoryCard;