import React from 'react';

import { useHistory } from 'react-router';
import { categoryUrl } from '../../../urls';

import { makeStyles } from '@material-ui/core/styles';
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


const useStyles = makeStyles((theme) => ({


  card: {
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    transition: '0.5s ease-in-out',
    '&:hover': {
      '& $cardContent':{
        display: 'block',
        opacity: 1,
      },
      opacity: 0.5,
      transform: 'translateY(-20px)'
    }
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height:'300px',
    flexGrow: 2,
  },
   cardContent: {
     flexGrow: 1,
     display: 'none',
     //opacity: 0,
    //  '&:hover':{
    //   opacity:1,
    // }
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
                        Wear Your Dream Clothes
                    </Typography>

                  </CardContent> 
                
                  {/* <CardActions>
                  
                    <Button size="small" color="primary">
                      see more
                    </Button>
                  </CardActions> */}
                </Card>
    );
};

export default CategoryCard;