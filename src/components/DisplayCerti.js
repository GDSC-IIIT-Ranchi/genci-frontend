import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ButtonAppBar from "./ButtonAppBar";

function Form() {
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
        <div>
          <h2>{allDetail.name}</h2>
          <h2>{allDetail.event_name}</h2>
          <h2>{allDetail.date}</h2>
        </div>
        <div>
          <img src={allDetail.certificate_url}></img>
        </div>
      </div>
    </>
  );
}

export default Form;
