import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

const style = {

}
const UserForm = (props: any) => {

    const [step, setStep] = useState(1);
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
      })


    // Proceed to next step
    const nextStep = () => {
    setStep((prevStep: number) => prevStep + 1);
    };

    // Go back to prev step
    const prevStep = () => {
    setStep((prevStep: number) => prevStep - 1);
    };

    // Handle fields change
    const handleChange = (input: any) => (e: any) => {
        
        const newState = {...state, ...{[input]: e.target.value}};
        console.log(newState)
        setState(newState);
    };

    const { firstName, lastName, email, occupation, city, bio } = state;
    const values = { firstName, lastName, email, occupation, city, bio };
    
    switch (step) {
        case 1:
            return (             
            <FormUserDetails
                nextStep={nextStep}
                handleChange={handleChange}
                values={values}
                
            />
            );
        case 2:
            return (
            <FormPersonalDetails
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleChange}
                values={values}
            />
            );
        case 3:
            return (
            <Confirm
                nextStep={nextStep}
                prevStep={prevStep}
                values={values}
            />
            );
        case 4:
            return <Success />;
        default:
            return <Success />;
    }
  
}


export default UserForm;