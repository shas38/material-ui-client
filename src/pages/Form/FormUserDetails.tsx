import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; 
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const FormUserDetails = (props: any)=> {
    
    const nextStep = (e: any) => {
    e.preventDefault();
    props.nextStep();
    };


    const { values, handleChange } = props;
    const theme = createMuiTheme({
      /* theme for v1.x */
    });
  return (
    <MuiThemeProvider theme={theme}>
        <React.Fragment>
          {/* <AppBar title="Enter User Details" /> */}
          <TextField
            placeholder="Enter Your First Name"
            label="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            placeholder="Enter Your Last Name"
            label="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            placeholder="Enter Your Email"
            label="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br />

            <Button
                color="primary"
                onClick={nextStep}
            >
            Continue
            </Button>
        </React.Fragment>
      </MuiThemeProvider>
    );
  
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;