// import React from "react";

// const LoginValidation = (values) => {
//   return <div></div>;
// };

// export default LoginValidation;

function Validation(values) {
  //   console.log(values + "vl");
  // console.log(values.email);
  // console.log(values.password);
  // alert("validation part");
  let error = {};
  //   const email_pattern = /^[A-za-z]+@[A-za-z]+$/;
  //   const password_pattern = /^[a-z0-9]+$/;
  //   const email_pattern = /^[a-z0-9]+$/;
  //   const password_pattern = /^[a-z0-9]+$/;

  if (values.email === "") {
    error.email = "Email should not be empty";
  }
  //   else if (!email_pattern.test(values.email)) {
  //     error.email = "Email Didn't matched";
  // }
  else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "password should not be empty";
  }
  //   else if (!password_pattern.test(values.password)) {
  //     error.password = "Password didn't matched";
  //   }
  else {
    error.password = "";
  }

  return error;
}

export default Validation;
