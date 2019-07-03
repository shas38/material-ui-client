import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const FormPersonalDetails = (props: any) => {
    const nextStep = (e: any) => {
        e.preventDefault();
        props.nextStep();
    };

  const back = (e: any) => {
    e.preventDefault();
    props.prevStep();
  };


    const { values, handleChange } = props;
    const theme = createMuiTheme({
        /* theme for v1.x */
    });
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <h1 title="Enter Personal Details"> Enter Personal Details </h1>
          <TextField
            placeholder="Enter Your Occupation"
            label="Occupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            placeholder="Enter Your City"
            label="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br />
          <TextField
            placeholder="Enter Your Bio"
            label="Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
          <br />
            <Button
                color="primary"
                onClick={nextStep}
            >
            Continue
            </Button>
            <Button
                onClick={back}
            >
            Back
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

export default FormPersonalDetails;