import { AppBar, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { useDispatch, useSelector } from 'react-redux';
import { picUrl } from '../../constants/picUrl';
import { clearShoppingCart, deleteShoppingActions } from '../../redux/actions/shoppingCartActions';
import { useHistory } from 'react-router';
import { checkOutUrl, loginUrl } from '../../urls';
import { signOutAction } from '../../redux/actions/authAction';


const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      background: '#1A2138'
    },
    list: {
        width: 250,
      },
     fullList: {
        width: 'auto',
      },
    imageStyle : {

        width : '100%',

    },
    
  }));



const NavbarInside = () => {

    // const history = useHistory();

    const classes = useStyles();


       const history = useHistory();

  
    const auth = useSelector(state=>state.auth);

    const {isSignedIn} = auth===undefined ? {} : auth;

    const {name} = auth===undefined?{} : auth

    console.log('nameeeee ',name);

    const logOut = () =>
    {
      
         dispatch(signOutAction())
        // else history.push(str)
    }



    const anchor = 'right';


    const dispatch = useDispatch()

    const [state, setState] = React.useState({
      
        right: false,
      });

     

      const allProduct = useSelector(st=>st.shoppingCart);


      const [productCount,setProductCount] = useState(allProduct.length);



      React.useEffect(() => {
           
          
        setProductCount(allProduct.length);

      }, [allProduct.length]);



      

    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const deleteProduct=(id)=>
      {
          console.log(id);
         
        
        return dispatch(deleteShoppingActions(id));

          
      }

      const cartClear = ()=>dispatch(clearShoppingCart());

      const routeChange =()=>history.push(checkOutUrl());
    
      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>

              
            {
            allProduct.map((pd) => (
              <ListItem button >

              <Grid container direction='column' justify='center' alignItems='center'>


           <Grid item>
           <img className={classes.imageStyle} src={picUrl(pd.pic)}></img>




           </Grid>
          
                  
                  <Grid item>
                  <Typography>Title : {pd.title}</Typography>

                  <Typography>Quantity : {pd.quantity}</Typography>

                  <Typography>Price : {pd.price}</Typography>

                  
                  </Grid>


              <Grid item>

                  <Button onClick={()=>deleteProduct(pd.id)} variant='contained' color='secondary'> Delete</Button>

                  </Grid>

                

                  </Grid>
              
              </ListItem>
            ))}

            <Grid container alignItems='center' justify='center'>

            <Button onClick={cartClear} variant='contained' color='secondary'> Clear Cart</Button>


    <Button onClick={routeChange} variant='contained' color='secondary'> Proceed to cart </Button>

        
            </Grid>


          </List>

         
          <Divider />
      
        </div>
      );



    return (
    
     <AppBar  position="fixed" className={classes.appBar}>
        <Toolbar>
       <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
        <div>
          <Typography variant="h6" nowrap>
             <a className="logo-container">
                  <i className="fas fa-shopping-cart fa-lg"> </i>
                  <h4 className="logo">Sulov</h4>
             </a>
          </Typography>
        </div>
          
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div>
          {name}

          </div>

           <div>
              <Button onClick={toggleDrawer('right', true)}> 
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={productCount} color="secondary">
                    <ShoppingCartIcon color='secondary' />
                       </StyledBadge>
                </IconButton>
              </Button>
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
          </div>

          <div>
          { isSignedIn?  <button onClick={logOut}>

              Logout
            </button> : <button onClick={()=>history.push('/login')}>

              sign in
            </button> 
}
            

          </div>
        </div>
      </div> 


        </Toolbar>
      
      </AppBar>
    
    );
};

export default NavbarInside;