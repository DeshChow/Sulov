import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';

import React from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const orders = [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'Cao Yu'
    },
    createdAt: 1555016400000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'Alexa Richardson'
    },
    createdAt: 1554930000000,
    status: 'refunded'
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'Anje Keizer'
    },
    createdAt: 1554757200000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'Clarke Gillebert'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    customer: {
      name: 'Adam Denisov'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  }
];

const LatestOrders = ({latestOrder}) => {


     const dateConvert=(date)=>
     {
       const str = new Date( Number(date));

       console.log(str,typeof(str));


     return str.toDateString() ;
     }

     console.log('latestOrder ',latestOrder)

   

    return latestOrder===undefined? <div></div> : <Card>
    <CardHeader title="Latest Orders" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{background: '#1A2138' ,color: 'white'}}>
                Order Reference
              </TableCell>
              <TableCell style={{background: '#1A2138' ,color: 'white'}}>
                Customer
              </TableCell>
              <TableCell sortDirection="desc"  style={{background: '#1A2138' ,color: 'white'}}>
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                 
                >
                  <TableSortLabel
                    active
                    direction="desc"
                     style={{background: '#1A2138' ,color: 'white'}}
                  >
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell >
              <TableCell style={{background: '#1A2138' ,color: 'white'}}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {latestOrder.map((order) => {





            return  <TableRow
                hover
                key={order._id}
              >
                <TableCell style={{textTransform: 'uppercase'}}>
                 {order._id.slice(order._id.length-6,order._id.length)}
                </TableCell>
                <TableCell style={{textTransform: 'capitalize'}}>
                  {order.orderInfo.userAddress.firstName}
                </TableCell>
                <TableCell>
               
           {dateConvert(order.date)}
                </TableCell>
                <TableCell>
                  <Chip
                    color="primary"
                    label={"Available"}
                    size="small"
                  />
                </TableCell>
              </TableRow>
})}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
};

export default LatestOrders;