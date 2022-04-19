import React from "react";
import { useParams } from "react-router-dom";

function Form() {
  const { id } = useParams();
  console.log(id);
  return <></>;
}

export default Form;
