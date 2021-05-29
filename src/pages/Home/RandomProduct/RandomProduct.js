import React from 'react';
import { useSelector } from 'react-redux';

import {isLoading} from '../../../constants/isLoading';
import { picUrl } from '../../../constants/picUrl';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import './RandomProduct.css'
import { Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    randomRoot:{
        background: '#ECF3FF',
        paddingBottom : theme.spacing(5),
        paddingTop : theme.spacing(5)
    }
    ,  headP: {
        textAlign:'center',
        fontSize: '1rem',
        color: '#ed5217',
        textTransform: 'capitalize',
        display: 'block',
        paddingTop : '10px'
        
    },
    head :{
        textAlign:'center',
        fontSize: '2rem',
        fontWeight: '600',
        color: '#444',
        paddingBottom: '20px',
        position: 'relative',
        margin: '15px 0 10px'
    }

   
  }));


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 5,
    slidesToSlide: 5 // optional, default to 1.
  },
  shojib: {
    breakpoint: { max: 1200, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const RandomProduct = () => {

    const classes = useStyles();

    const initData = useSelector(st => st.category);

    const {randomProduct} = initData;

    return (

    <Container maxWidth="xl" className={classes.randomRoot}>

<Typography className={classes.headP}  gutterBottom>
                               What to Buy
                    </Typography>


                        <Typography className={classes.head}  gutterBottom>
                                Choose Your Category
                        </Typography>


        <Carousel
  className="carouselItem"
  swipeable={false}
  draggable={false}
//   showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  //autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  //deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>

  {isLoading(randomProduct) ? 


randomProduct.map(ran=>
<Card className='sty'><img style={{height:'14rem',width :'10rem'}}  src={picUrl(ran.pic)}></img></Card>)



: <div>Loading</div>
    }
</Carousel>

</Container>
    );
};

export default RandomProduct;