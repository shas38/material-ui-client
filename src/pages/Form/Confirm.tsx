import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; 
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button  from '@material-ui/core/Button';

const  Confirm = (props: any) => {
    const nextStep = (e: any) => {
        e.preventDefault();
        // PROCESS FORM //
        props.nextStep();
    };

    const back = (e: any) => {
        e.preventDefault();
        props.prevStep();
    };

    const {values: { firstName, lastName, email, occupation, city, bio }} = props;
    const theme = createMuiTheme({
        /* theme for v1.x */
    });
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          {/* <AppBar title="Confirm User Data" /> */}
          <List>
            <ListItem>
                <ListItemText
                    primary="First Name" 
                    secondary={firstName}
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="Last Name" 
                    secondary={lastName}
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="Email" 
                    secondary={email}
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="Occupation" 
                    secondary={occupation}
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="City" 
                    secondary={city}
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="Bio" 
                    secondary={bio}
                />
            </ListItem>
          </List>
          <br />
            <Button
                color="primary"
                onClick={nextStep}
            >
            Confirm & Continue   
            </Button>
            <Button
                color="primary"
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

export default Confirm;