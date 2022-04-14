
import React, { useEffect, useState } from "react";
import './style.css'
import { IconButton } from "@mui/material";
import { Container } from 'react-bootstrap'
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { Link as RouterLink, useNavigate } from "react-router-dom";

// material-ui
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  Link,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// project import



// assets
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

function LoginPage() {
  const [checked, setChecked] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();

    const User = {
      email: email,
      password: password,
    };
    try {
      let res = await fetch(`${process.env.REACT_APP_BE_LINK}/users/login`, {
        //https://epichat1.herokuapp.com
        method: "POST",
        body: JSON.stringify(User),
        headers: { "Content-type": "application/json" },
      });
      if (res.status !== 200) {
        // handleOpen();
        alert("you you entered wrong password or email");
        // setOpen(true);
      }
      if (res.ok) {
        let { accessToken } = await res.json();
        console.log(accessToken, "adsasdasfa");
        localStorage.setItem("MyToken", accessToken);

        navigate("/");
        console.log("Successfully logged in!");
      }
    } catch (error) {
      console.log(error);
    }
  };
    return (
      <div className="[ background__page ] [ d-flex justify-content-center align-items-center ]">
        <Container
          
          className="[ d-flex flex-column justify-content-center align-items-center ]"
        >
         <Link to='/'> <h1 style={{ color: "white" }}>logo</h1></Link>
          <h3 className="mt-3" style={{ color: "white" }}>
            Sign in to your Futer Account
          </h3>
          <div className="d-flex mt-3">
            <IconButton
              className="mr-4"
              aria-label="delete"
              style={{ backgroundColor: "white" }}
            >
              <FaFacebookSquare style={{ color: "#3b5998" }} />
            </IconButton>
            <IconButton
              aria-label="delete"
              style={{ backgroundColor: "white" }}
            >
              <FaGoogle style={{ color: "#F4B400" }} />
            </IconButton>
          </div>
          <div className="d-flex align-items-center my-3">
            <div
              style={{ backgroundColor: "white", height: "1px", width: "8rem" }}
            ></div>
            <span className="mx-3" style={{ color: "white" }}>
              or
            </span>
            <div
              style={{ backgroundColor: "white", height: "1px", width: "8rem" }}
            ></div>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              submit: null,
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email is required"),
              password: Yup.string().max(255).required("Password is required"),
            })}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting }
            ) => {
              try {
                setStatus({ success: false });
                setSubmitting(false);
              } catch (err) {
                setStatus({ success: false });
                setErrors({ submit: err.message });
                setSubmitting(false);
              }
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form
                noValidate
                onSubmit={handleSubmit}
                style={{ width: "20vw" }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel
                        htmlFor="email-login"
                        style={{ color: "white" }}
                      >
                        Email Address
                      </InputLabel>
                      <OutlinedInput
                        style={{ color: "black", backgroundColor: "white" }}
                        id="email-login"
                        type="email"
                        value={values.email}
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        fullWidth
                        error={Boolean(touched.email && errors.email)}
                      />
                      {touched.email && errors.email && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-email-login"
                        >
                          {errors.email}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel
                        htmlFor="password-login"
                        style={{ color: "white" }}
                      >
                        Password
                      </InputLabel>
                      <OutlinedInput
                        style={{ color: "black", backgroundColor: "white" }}
                        fullWidth
                        error={Boolean(touched.password && errors.password)}
                        id="-password-login"
                        type={showPassword ? "text" : "password"}
                        value={values.password}
                        name="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              size="large"
                            >
                              {showPassword ? (
                                <EyeOutlined />
                              ) : (
                                <EyeInvisibleOutlined />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        placeholder="Enter password"
                      />
                      {touched.password && errors.password && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-password-login"
                        >
                          {errors.password}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>

                  {errors.submit && (
                    <Grid item xs={12}>
                      <FormHelperText error>{errors.submit}</FormHelperText>
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <Button
                      disableElevation
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Log in
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
          {/* <div className="d-flex align-items-center mt-4">
            <div
              style={{ backgroundColor: "white", height: "1px", width: "8rem" }}
            ></div>
            <span className="mx-3" style={{ color: "white" }}>
              or
            </span>
            <div
              style={{ backgroundColor: "white", height: "1px", width: "8rem" }}
            ></div>
          </div>
          <form onSubmit={handleRegister} className="d-flex flex-column mx-4">
            <label htmlFor="email" className="mb-0">
              <b> Email address</b>
            </label>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="registerinputs"
              type="email"
              id="email"
              placeholder="Email address"
            />
            <label htmlFor="password" className="mb-0 mt-4">
              {" "}
              <b> Password</b>
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="registerinputs"
              type="password"
              id="password"
              placeholder="Password"
            />
            <button
              type="submit"
              disabled={!email || !password}
              className="register-button"
            >
              Log in
            </button>
          </form> */}

          <div className="d-flex mt-3">
            {" "}
            <p style={{ color: "white" }}>New to Futer? &nbsp;</p>{" "}
            <RouterLink to="/register">create an account</RouterLink>
          </div>
        </Container>
      </div>
    );}

export default LoginPage