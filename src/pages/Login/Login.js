  
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SignUp from './SignUp';


import firebase from "firebase/app";
import "firebase/auth";


import firebaseConfig from './firebase.confiq'
// import google from '../../images/google.png'
// import facebook from '../../images/facebook.png'

// import { ClearUserInfo, InsertUserInfo } from '../../Utilities/SessionData';


import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {AiFillTag} from "react-icons/ai";
import {FaFacebook} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import { authAction } from './../../redux/actions/authAction';


import swal from 'sweetalert';


if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);


export const  handleSignOut = () => {

  firebase.auth().signOut()
    .then(result => {

      alert('sign out')

     

    }).catch(error => console(error, error.message));


}



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {

  const location=useLocation();

  const {from}=location.state  || {from :{pathname:'/'}};

  const auth = useSelector(state=>state.auth)

  const {isSignedIn} = auth===undefined ? {} : auth;


  const classes = useStyles();

  const [state,setState] = useState(0);

  const history = useHistory();

  const changeState=(s)=>{

    setState(s);

    

  }

  const dispatch = useDispatch();


  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const fbProvider = new firebase.auth.FacebookAuthProvider();

//   const history=useHistory();

  const [userInformation,setUserInformation]=useState({

    

    
  });

    // const location=useLocation();

    // let {from}=location.state  || {from :{pathname:'/home'}};


    const [loginUser,setLoginUser]=useState({});

    const LoginCheck=(email)=>
    {

      //console.log(email,typeof(email));

        
    //  history.replace(from);

       
    }

    React.useEffect(()=>
    {
      if(isSignedIn===true)
        {
         const flag= from.pathname.includes('/sulov/admin/')

         if(flag && (auth.email!=process.env.REACT_APP_admin1 && auth.email!=process.env.REACT_APP_admin2 ))
         {
           return history.push('/')
          
         }
          else return history.push(from);

        }

    },[isSignedIn])

  const handleGoogleSignInUp = async () => {

     try{

    const result = await firebase.auth().signInWithPopup(googleProvider);

   

    

    const {displayName,email,photoURL,emailVerified} = result.user;


    const data ={
        name :displayName,
        email : email,
        pic : photoURL
    }
    console.log('1223213 ',result)

      if(emailVerified)

     dispatch(authAction(data));

     else swal('User Email is not verified')


    

     }

     catch(err)
     {

        console.log(2, err)

     }
     
     
  }


   

  const handleFbSignIn=()=>{

    // console.log('fb');
 
    // firebase.auth().signInWithPopup(fbProvider).then(function(result) {
     
      

    //   const {displayName,email,photoURL} = result.user;


    //   const data ={
    //       name :displayName,
    //       email : email,
    //       pic : photoURL
    //   }
    //   console.log(data)
  
    //    dispatch(authAction(data));
    //     // history.push('/home');

    //     // window.location.reload(false);
 
 
           
 
 
    // }).catch(function(error) {
      
     

    //   console.log(2,error);
     
    // });
    
  }



  const handleBlurSignUp = (event) => {
 
 
    let isFieldValid = true;
 
    if (event.target.name === 'email') {
 
      //console.log(event.target.value);
      const isEmailValid = /\S+@\S+\.\S+/
 
      isFieldValid &= isEmailValid.test(event.target.value);
 
      // console.log(isEmailValid.test(event.target.value));
    }
    else if (event.target.name === 'password') {
 
      const isPasswordValid = event.target.value.length > 6;
 
      const passHasNumber = /\d{1}/.test(event.target.value);


       if(!isPasswordValid && !passHasNumber)
      swal('Your password should contain at least seven characters and one digit');
       else if(isPasswordValid==false)
       swal('Your password should contain at least seven characters');

      else if(passHasNumber==false)
      swal('Your password shoould contain minimum one digit');

     
 
      isFieldValid &= isPasswordValid && passHasNumber;
 
      // console.log(isPasswordValid&&passHasNumber);
    }
    
 
 
    if (isFieldValid) {
      const newUserInfo = { ...userInformation };
 
      newUserInfo[event.target.name] = event.target.value;

      console.log(newUserInfo,event.target.name,event.target.value);
 
      setUserInformation(newUserInfo);
    }

  
 
 
 
  }

  const handleBlurSignIn=(event)=>
  {
    const newUserInfo = { ...loginUser };
 
      newUserInfo[event.target.name] = event.target.value;

 
      setLoginUser(newUserInfo);
  }

  const signupForm=(e)=>
  {

    // console.log(1,userInformation);

    if (userInformation.displayName && userInformation.email && userInformation.password) {

     
      firebase.auth().createUserWithEmailAndPassword(userInformation.email, userInformation.password)
        .then(async res => {

            console.log('now hist  ',res);

       
        //   updateUserName(userInformation.displayName)

        swal('check your email and verify your email address');

        await res.user.sendEmailVerification()

        

        console.log('successfully sign in ');

     
        const {displayName,email,photoURL} =userInformation;


        const data ={
            name :displayName,
            email : email,
            pic : photoURL,
            emailVerified : res.user.emailVerified
        }
        dispatch(authAction(data));
          

        
 
        })
        .catch((error) => {
 
          swal('already have a account');


 
         
        });
    }
   
    e.preventDefault();
        

  }

//   const ChangeSignUpForm=()=>
//   {
    
//     const container = document.getElementById('container');
//     container.classList.add("right-panel-active");
   
//   }




  

 
//   const ChangeSignInForm = () => {
//     const container = document.getElementById('container');
//     container.classList.remove("right-panel-active");
//   }


  const signinForm=(e)=>
  {
       

    console.log(loginUser);
    
       if(loginUser.emailSignIn && loginUser.passwordSignIn)
       {
          console.log('hamaisi sign in');


           firebase.auth().signInWithEmailAndPassword(loginUser.emailSignIn,loginUser.passwordSignIn)
           .then(result=>
            {
           
              const data={

            email  :  result.user.email
              }


              if(result.user.emailVerified){
                  dispatch(authAction(data))
                    // history.push('/')
                  
              }

             else swal('Please verify your account first , check your email')

            //   console.log('success',result.user);

            //   InsertUserInfo( { displayName, emailVerified, email });
      
            //   history.push('/');
      
            //   window.location.reload(false);
                  
            })
            .catch(err=>
              {
                swal("Your Email Account Doesn't Exist , please sign up first ");
              })
  
       }
       e.preventDefault();

    
  }







  return state===0 ?<Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Grid container justify='center' alignItems ='center' style={{textAlign : "center"}}>

            <Grid item xs={6} onClick= {handleGoogleSignInUp}>

                Google 
            </Grid>

            <Grid item xs={6} onClick = {handleFbSignIn}>

         Facebook
            </Grid>



        </Grid>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="emailSignIn"
            autoComplete="email"
            autoFocus
            onBlur={handleBlurSignIn}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="passwordSignIn"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onBlur={handleBlurSignIn}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {signinForm}
          >
            Sign In
          </Button>
          <Grid container>
          
            <Grid item>
              
            Don't have an account? <span onClick={()=>changeState(1)} style={{cursor : "pointer"}}> Sign Up</span>
             
            </Grid>


          </Grid>

        
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container> : 
    <SignUp changeState={changeState} handleGoogleSignInUp={handleGoogleSignInUp}

    signupForm={signupForm} handleBlurSignUp={handleBlurSignUp}
    
    
    />

}
