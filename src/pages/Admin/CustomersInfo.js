import { Container, makeStyles, Paper, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, TextField } from '@material-ui/core';
import React from 'react';
import { useState, useEffect } from 'react';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { adminInitAction, getAllCustomersInfo } from '../../redux/actions/adminInitActions';
import { useDispatch, useSelector } from 'react-redux';
import { picUrl } from '../../constants/picUrl';
import LoaderComponent from '../../Components/LoaderComponent/LoaderComponent';

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


const CustomersInfo = () => {
  const classes = useStyles();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
 
   const dispatch = useDispatch();

  const adminInitData = useSelector(state => state.adminInitData);

  const {customers} = adminInitData;

  const pages = [5,10,25];
  const [page,setPage] = useState(0);
  const [rowsPerPage,setRowsPerPage] = useState(pages[0]);

  const [filterFn,setFilterFn] = useState({fn: items=>{ return items; }});


  useEffect(()=>
  {

     dispatch(getAllCustomersInfo());
        

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
                    return items.filter(x=>x.name.toLowerCase().includes(target.value));
            }
        })
    }

    const convertDate=(temp)=>
    {

      const d = new Date(Number(temp));

      console.log(d,temp);

      return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`
         

    }


  return customers==undefined ?  <LoaderComponent/> : <>
          <div className={classes.title}>
            <h1>Customer's List</h1>
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
                        <TableCell key="customer_name">
                            <TableSortLabel>
                                Name
                            </TableSortLabel>
                        </TableCell>
                        <TableCell key="phone">
                            <TableSortLabel>
                                Phone
                            </TableSortLabel>
                        </TableCell>
                        <TableCell key="email">
                            <TableSortLabel>
                                Email
                            </TableSortLabel>
                        </TableCell>
                        <TableCell key="location">
                            <TableSortLabel>
                                Location
                            </TableSortLabel>
                        </TableCell>
                        <TableCell key="registration-date">
                            <TableSortLabel>
                                Registration Date
                            </TableSortLabel>
                        </TableCell>
                    </TableRow>
                </TableHead>
    
                <TableBody>
                    {
                        filterFn.fn(customers).slice(page*rowsPerPage,(page+1)*rowsPerPage).map(item=> {
                           return (
                            <TableRow>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.phone===null ? "Not Available" : item.phone}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>#{item.address===null ? "Not Available": item.address}</TableCell>
                                <TableCell style={{paddingRight: '70px'}}>{convertDate(item.registration_date)}</TableCell>
                                
                            </TableRow>
                        )
    })}

                </TableBody>
            </Table>
            <TablePagination component="div"
             page={page} 
             rowsPerPageOptions={pages} 
             rowsPerPage={rowsPerPage} 
             count={customers.length}
             onChangePage={handleChangePage}
             onChangeRowsPerPage = {handleChangeRowsPerPage}>
            </TablePagination>
             
        </Paper>
        
        </>
  
};



export default CustomersInfo;