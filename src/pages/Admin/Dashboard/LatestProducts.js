import { v4 as uuid } from 'uuid';

import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import React from 'react';
import { picUrl } from '../../../constants/picUrl';

const LatestProducts = ({latestProduct}) => {

  

  return latestProduct==undefined? <></> :   <Card>
    <CardHeader  subtitle={`${latestProduct.length} in total`}
      title="Latest Products"
    />
    <Divider />
    <List>
      {latestProduct.map((product, i) => (
        <ListItem
          divider={i < latestProduct.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <img
              alt={product.title}
              src={picUrl(product.pic[0])}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.title}
            // secondary={`Updated ${product.updatedAt.fromNow()}`}
          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
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

    }

export default LatestProducts;