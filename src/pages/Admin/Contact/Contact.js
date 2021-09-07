import { Container, makeStyles, Paper, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, TextField } from '@material-ui/core';
import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import UserContactCard from '../../../Components/UserContactCard/UserContactCard';
import { userContactActions } from './../../../redux/actions/userContactActions';
import LoaderComponent from '../../../Components/LoaderComponent/LoaderComponent';

 const useStyles = makeStyles(theme=>({
     title:{
        textAlign:'center',
        fontSize: '1rem',
        paddingTop: '40px',
        fontWeight: '600',
        color: 'black',
        paddingBottom: '10px',
        position: 'relative',
        '&::before': {
            content: '" "',
            position: 'absolute',
            left: '0',
            bottom: '0',
            width: '5rem',
            height: '3px',
            background: '#00ab55',
            borderRadious: '20px',
            left: '50% !important',
            transform: 'translateX(-50%)',
        },
    },
    table: {
        marginTop: theme.spacing(3),
        marginLeft: '1.5rem',
        width: '96%',
        '& thead th':{
            fontWeight: '600',
            color: 'white',
            backgroundColor: theme.palette.primary.light
        },
        '& tbody td':{
            fontWeight: 300
        },
        '& tbody tr:hover':{
            backgroundColor: '#fffbf2',
            cursor: 'pointer' 
        }
    }

}))


const Contact = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const userContact = useSelector(state=>state.userContact.data);

     const pages = [5,10,25];
     const [page,setPage] = useState(0);
     const [rowsPerPage,setRowsPerPage] = useState(pages[0]);
     const [filterFn,setFilterFn] = useState({fn: items=>{ return items; }});



    useEffect(()=>{

        dispatch(userContactActions())


    },[])


    const handleChangePage = (event,newPage)=>{
         setPage(newPage);
    }

    const handleChangeRowsPerPage = (event)=>{
        setRowsPerPage(parseInt(event.target.value,10))
        setPage(0);
    }
    
   
    const handleSearch = (e)=>{
        let target = e.target;
        setFilterFn({
            fn: items=>{
                if(target.value==="")
                    return items;
                else
                    return items.filter(x=>x.first_name.toLowerCase().includes(target.value));
            }
        })
    }


 

    return (

        userContact===undefined?<LoaderComponent/> :
        <div>
            {/* {

userContact.map(contact=><UserContactCard contact={contact} key={contact._id}/>)

            } */}
            <div className={classes.title}>
            <h1>Customer's Messages</h1>
            <span></span>
          </div>
        <Paper style={{marginTop: '50px'}}>
            <Toolbar style={{display: 'flex',justifyContent: 'space-between',paddingTop:'30px'}}>
                 <TextField id="outlined-basic" label="Search by Name" variant="outlined"  InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                       <SearchIcon />
                                    </IconButton>
                                 </InputAdornment>
                            )
                  }}
                  
                  onChange={ handleSearch }
                  />
            </Toolbar>
            <Table className = {classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell key="first_name">
                            <TableSortLabel>
                                First Name
                            </TableSortLabel>
                        </TableCell>
                        <TableCell key="last_name">
                            <TableSortLabel>
                                Last Name
                            </TableSortLabel>
                        </TableCell>
                        <TableCell key="email">
                            <TableSortLabel>
                                Email
                            </TableSortLabel>
                        </TableCell>
                        <TableCell key="phone">
                            <TableSortLabel>
                                Phone
                            </TableSortLabel>
                        </TableCell>
                        <TableCell key="message">
                            <TableSortLabel>
                                Message
                            </TableSortLabel>
                        </TableCell>
                    </TableRow>
                </TableHead>
    
                <TableBody>
                    {
                        filterFn.fn(userContact).slice(page*rowsPerPage,(page+1)*rowsPerPage).map(item=> {
                           return (
                            <TableRow>
                                <TableCell>{item.first_name}</TableCell>
                                <TableCell>{item.last_name}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.mobile}</TableCell>
                                <TableCell style={{marginRight: '30px'}} >{item.text}</TableCell>
                                
                            </TableRow>
                        )
    })}

                </TableBody>
            </Table>
            <TablePagination component="div"
             page={page} 
             rowsPerPageOptions={pages} 
             rowsPerPage={rowsPerPage} 
             count={userContact.length}
             onChangePage={handleChangePage}
             onChangeRowsPerPage = {handleChangeRowsPerPage}>
            </TablePagination>
             
        </Paper>
        
           


        </div>
    );
};

export default Contact;