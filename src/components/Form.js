import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Form() {
  const { id } = useParams();
  const url=""
  axios.get(url)
  .then((res)=>{
     console.log(res)
  }).catch(err=>console.log(err))
  console.log(id);
  return <></>;
}

export default Form;
