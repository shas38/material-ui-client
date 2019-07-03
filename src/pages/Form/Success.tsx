import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; 


const Success = (props: any) => {


    const theme = createMuiTheme({
        /* theme for v1.x */
    });

    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <h1 title="Success"> Success </h1>
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with further instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
}

export default Success;