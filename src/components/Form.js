import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Form() {
  const { id } = useParams();
  const url=""
  const [allDetail, setDetail] = useState({});
  axios.get(url)
  .then((res)=>{
     console.log(res)
     setDetail(...res.data)
  }).catch(err=>console.log(err))
  console.log(id);
  return (
    <>
      <div>
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
