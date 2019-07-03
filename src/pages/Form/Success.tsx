import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; 
import AppBar from '@material-ui/core/AppBar';

const Success = (props: any) => {
//   continue = (e: any) => {
//     e.preventDefault();
//     // PROCESS FORM //
//     props.nextStep();
//   };

//   back = e => {
//     e.preventDefault();
//     props.prevStep();
//   };

    const theme = createMuiTheme({
        /* theme for v1.x */
    });

    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with further instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
}

export default Success;