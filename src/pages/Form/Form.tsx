import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import UserForm from './UserForm'


const Form = (props: any) => {

    return (
        <Card style={{width: '80%', margin: "5rem auto 0", textAlign: 'center', top: '20%'}}>
            <UserForm/>
        </Card>
    )
  
}


export default Form;

