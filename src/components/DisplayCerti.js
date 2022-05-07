import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ButtonAppBar from "./navbar/ButtonAppBar";
import DisplayDetails from "./certificate/DisplayDetails";
import DisplayStuCerti from "./certificate/DisplayStuCerti";
import { Grid } from "@mui/material";

function DisplayCerti() {
  const { id } = useParams();
  const url = "http://127.0.0.1:8000/";
  const [allDetail, setDetail] = useState({
    certificate_url: "",
    date: "",
    event_name: "",
    id: "",
    name: "",
  });

  axios
    .get(url)
    .then((res) => {
      console.log(res);
      setDetail({ ...res.data });
    })
    .catch((err) => console.log(err));

  console.log(allDetail.name);
  return (
    <>
      <div>
        <ButtonAppBar />
        <Grid container spacing={0}>
          <Grid item md={4}>
            <DisplayDetails
              name={allDetail.name}
              event_name={allDetail.event_name}
              date={allDetail.date}
            />
          </Grid>
          <Grid item md={6}>
            <DisplayStuCerti url={allDetail.certificate_url} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default DisplayCerti;
