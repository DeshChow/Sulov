import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserContactCard from '../../../Components/UserContactCard/UserContactCard';
import { userContactActions } from './../../../redux/actions/userContactActions';

const Contact = () => {


    const dispatch = useDispatch();

    const userContact = useSelector(state=>state.userContact.data);



    useEffect(()=>{

        dispatch(userContactActions())


    },[])

 

    return (

        userContact===undefined?<div>Loading</div> :
        <div>
            {

userContact.map(contact=><UserContactCard contact={contact} key={contact._id}/>)

            }
        </div>
    );
};

export default Contact;