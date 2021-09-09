import { CssBaseline, Container, Paper, Grid, Button, Typography } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoading } from "../../../../constants/isLoading";
import { categoryActions } from "../../../../redux/actions/categoryActions";
import Sulov from "../../../../Sulov";
import { Component } from "react";
import Box from "@material-ui/core/Box";

import SaveIcon from "@material-ui/icons/Save";

import LoaderComponent from "../../../../Components/LoaderComponent/LoaderComponent";
import { useHistory } from 'react-router';

const axios = require("axios");
const ProductAdd = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState([]);

  const dispatch = useDispatch();

  const initData = useSelector((state) => state.category);

  const { category } = initData;

  const history = useHistory();

  console.log(initData);

  useEffect(() => {
    dispatch(categoryActions());
  }, []);

  const handleFileChange = (e) => {
    const newFile = e.target.files;

    console.log('newFile ',newFile);

    setFile(newFile);

    console.log(newFile);
  };

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    // formData.append('file', file)

    const newFile = Object.values(file);

    newFile.forEach((f) => {
      formData.append("file", f);
    });

    formData.append("status", info.status);

    formData.append("star", info.star);

    formData.append("itemCount", info.itemCount);

    formData.append("title", info.title);
    formData.append("price", info.price);

    formData.append("description", info.description);

    formData.append("categoryTitle", info.categoryTitle);
    formData.append("categoryId", info.categoryId);

  

    fetch("http://localhost:5000/product/add", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertCount) history.push('/sulov/admin/products');
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onChangeValue = (e) => {
    const data = category.filter((ct) => ct._id == e.target.value)[0];

    const newInfo = { ...info };

    newInfo.categoryId = data._id;
    newInfo.categoryTitle = data.title;

    setInfo(newInfo);
  };

  const onChangeStatus = (e) => {
    const newInfo = { ...info };

    newInfo.status = e.target.value;

    setInfo(newInfo);
  };

  return !isLoading(category) ? (
    <LoaderComponent/>
  ) : (
    <>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={5}>

            <Typography align='center' style={{fontSize : "20px",fontWeight : "bold",
        margin  : "15px 0px"}}>Product Add</Typography>
          <form onSubmit={handleSubmit}>
            <label htmlFor="exampleInputName1">
              <b>Title</b>
            </label>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="title"
              id="inputTitle"
              placeholder="title"
              required
            />
              <br/>

            <label htmlFor="exampleInputName2">
              <b>Status</b>
            </label>

            <label htmlFor="exampleInputName3">
              <b>Star</b>
            </label>
            <input
              onBlur={handleBlur}
              type="number"
              className="form-control"
              name="star"
              id="inputStar"
              placeholder="star"
              required
            />
            <br/>

            <label htmlFor="exampleInputName4">
              <b>Price</b>
            </label>
            <input
              onBlur={handleBlur}
              type="number"
              className="form-control"
              name="price"
              id="inputPrice"
              placeholder="price"
              required
            />
              <br/>

            <label htmlFor="exampleInputName5">
              <b>Itme Count</b>
            </label>
            <input
              onBlur={handleBlur}
              type="number"
              className="form-control"
              name="itemCount"
              id="inputItemCount"
              placeholder="itemCount"
              required
            />
              <br/>

            <label htmlFor="exampleInputName5">
              <b>Image</b>
            </label>
            <input
              className="form-control"
              onChange={handleFileChange}
              type="file"
              multiple

              style={{height:"45px"}}
             
            ></input>
              <br/>

              <label htmlFor="exampleInputName5">
              <b>Choice Your Category</b>
            </label>

            <div>
              {category.map((ct) => (
                <div key={ct._id}>
                  <label for={ct.title} style={{display : "flex",alignItems : "center"}}>
                    {" "}
                    <input
                      onChange={onChangeValue}
                      type="radio"
                      value={ct._id}
                      name="category"
                      required
                    />
                    <span style={{ marginLeft: "10px" }}>{ct.title}</span>
                  </label>
                
                </div>
              ))}
            </div>

            <label>

                <br/>
               
            <label htmlFor="exampleInputName5">
              <b>Status</b>
            </label >
            <br/>
            
           
            </label>

            <label style={{display : "flex",alignItems : "center"}}>
            <input
                onChange={onChangeStatus}
                type="radio"
                value="active"
                name="status"
                required
              />
              <span  style={{marginLeft : "5px"}}> Active</span>
            </label>

           
            
            <label style={{display : "flex",alignItems : "center"}}>
              {" "}
              <input
                onChange={onChangeStatus}
                type="radio"
                value="inactive"
                name="status"
                required
              />
              <span style={{marginLeft : "5px"}}> Inactive</span>
            </label>
         

            <div className="form-group" >
            <br/>
              <label>
                <b>Item Details</b>
              </label>
              <textarea
                onBlur={handleBlur}
                class="form-control"
                name="description"
                placeholder="Write Something About Your Product"
                rows="10"
              ></textarea>
            </div>

            <br />

            {/* <input type="submit" value="Submit" /> */}

            <Grid container justify="center" style={{ textAlign: "center" }}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  type="submit"
                  // className={classes.button}
                  // onClick={handleSubmit}
                  startIcon={<SaveIcon />}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default ProductAdd;
