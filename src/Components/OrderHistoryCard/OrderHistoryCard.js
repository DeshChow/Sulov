import { Container, makeStyles, Paper, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, TextField } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { CssBaseline } from '@material-ui/core';
import React,{useState} from 'react';
import  Box  from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PublicIcon from '@material-ui/icons/Public';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import './OrderHistory.css';
import { picUrl } from '../../constants/picUrl';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme=>({
     title:{
        textAlign:'left',
        fontSize: '1rem',
        paddingTop: '40px',
        fontWeight: '600',
        color: 'black',
        paddingBottom: '10px',
        position: 'relative',
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


const OrderHistoryCard = (props) => {

    const classes = useStyles();
    const {stripePaymentDetails} = props.data

    const {orderProduct,userAddress} = props.data.orderInfo;

    const {firstName,lastName,address1,address2,state,city,zip,country} = userAddress;

    const { id,amount_received,payment_method_types,status,charges} = props.data.stripePaymentDetails;

    const { receipt_url } = charges.data[0];

    const { date } = props.data;


    // console.log('hashhhh ',charges.data[0])

     const pages = [5,10,25];
     const [page,setPage] = useState(0);
     const [rowsPerPage,setRowsPerPage] = useState(pages[0]);
     const [filterFn,setFilterFn] = useState({fn: items=>{ return items; }});


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
                    return items.filter(x=>x.title.toLowerCase().includes(target.value));
            }
        })
    }

    const convertDate=(temp)=>
    {

      const d = new Date(Number(temp));

      console.log(d,temp);

      return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`
         

    }


    return (
        <>
        <CssBaseline/>

        <Container component={Box} p={4}>
         
    

         <Paper component={Box} p={5}>

               <div>
                    <div>
                        <h3 style={{textAlign: 'left'}}>Buyer's Info</h3>
                        <span className="animate-border-order"></span>
                    </div>
                    <br></br>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      <div>
                      <AccountCircleIcon style={{marginBottom: '2px'}}></AccountCircleIcon>
                      Name: {firstName} {lastName}
                      </div>
                      <div>
                      <HomeIcon style={{marginBottom: '5px'}}></HomeIcon>
                      First Address: {address1},{state}
                      </div>
                      <div>
                          <AccountBalanceIcon  style={{marginBottom: '2px'}}></AccountBalanceIcon>
                           Second Address: {address2},{state}
                      </div>
                      <div>
                          <LocationCityIcon  style={{marginBottom: '5px'}}></LocationCityIcon>
                          City: {city}
                      </div>
                     <div>
                         <VerifiedUserIcon  style={{marginBottom: '2px'}}></VerifiedUserIcon>
                         Zip: {zip}
                     </div>
                     <div>
                         <PublicIcon  style={{marginBottom: '2px'}}></PublicIcon>
                          Country: {country}

                     </div>
                      
                    </div>
                    <div>
            {/* {

userContact.map(contact=><UserContactCard contact={contact} key={contact._id}/>)

            } */}
            <div className={classes.title}>
            <h3>Buyer's Order</h3>
            <span className="animate-border-product"></span>
          </div>
        <Paper style={{marginTop: '10px'}}>
            <Toolbar style={{display: 'flex',justifyContent: 'space-between',paddingTop:'30px'}}>
                 <TextField id="outlined-basic" label="Search by Product Name" variant="outlined"  InputProps={{
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
                        <TableCell key="title">
                            <TableSortLabel>
                                Title
                            </TableSortLabel>
                        </TableCell>
                        <TableCell >
                            <TableSortLabel>
                                Product Image
                            </TableSortLabel>
                        </TableCell>
                        <TableCell key="quantity-ordered" >
                            <TableSortLabel>
                                Quantity
                            </TableSortLabel>
                        </TableCell>
                        <TableCell key="price">
                            <TableSortLabel >
                                Price
                            </TableSortLabel>
                        </TableCell>
                    </TableRow>
                </TableHead>
    
                <TableBody>
                    {
                        filterFn.fn(orderProduct).slice(page*rowsPerPage,(page+1)*rowsPerPage).map(item=> {
                           return (
                            <TableRow>
                                <TableCell >{item.title}</TableCell>
                                <TableCell > <img src={picUrl(item.pic)}></img></TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell><span style={{marginRight: '30px'}} >{item.price}</span></TableCell>
                            </TableRow>
                        )
    })}

                </TableBody>
            </Table>
            <TablePagination component="div"
             page={page} 
             rowsPerPageOptions={pages} 
             rowsPerPage={rowsPerPage} 
             count={orderProduct.length}
             onChangePage={handleChangePage}
             onChangeRowsPerPage = {handleChangeRowsPerPage}>
            </TablePagination>
             
        </Paper>
        </div>

        <div>
            <div>
                 <br></br>
                 <br></br>
                <h3 style={{textAlign: 'left'}}>Buyer's Payment</h3>
                <span className="animate-border-payment"></span>
                <br></br>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div>
                        <CheckBoxOutlineBlankIcon style={{marginBottom: '3px'}}></CheckBoxOutlineBlankIcon>
                        Payment ID: {id}
                    </div>
                    <div>
                        <CheckBoxOutlineBlankIcon style={{marginBottom: '3px'}}></CheckBoxOutlineBlankIcon>
                        Payment Received:৳{amount_received}
                    </div>
                     <div style={{marginRight: '35px'}}>
                        <CheckBoxOutlineBlankIcon style={{marginBottom: '3px'}}></CheckBoxOutlineBlankIcon>
                        Payment Date: {payment_method_types}
                    </div>
                </div>
                 <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div>
                        <CheckBoxOutlineBlankIcon style={{marginBottom: '3px'}}></CheckBoxOutlineBlankIcon>
                        Payment Receipt: <a href={receipt_url}>Print the Receipt</a>
                    </div>
                    <div style={{marginLeft: '75px'}}>
                        <CheckBoxOutlineBlankIcon style={{marginBottom: '3px'}}></CheckBoxOutlineBlankIcon>
                        Payment Status: <span style={{color: 'green'}}>{status}</span>
                    </div>
                    <div>
                        <CheckBoxOutlineBlankIcon style={{marginBottom: '3px'}}></CheckBoxOutlineBlankIcon>
                        Payment Date: {convertDate(date)} 
                    </div>
                </div>
            </div>


        </div>

    </div>
               

         </Paper>

         </Container>
        </>
    );
};

export default OrderHistoryCard;