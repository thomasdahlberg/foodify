import React, {Component} from 'react';
import styles from './SignupForm.module.css';

class SignupForm extends Component {
    
    state = this.getInitialState();
    
    getInitialState() {
        return {
            name: '',
            email: '',
            password: '',
            passwordConf: ''
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();


        this.getInitialState();
    }

    render() {
        return(
        <form className={styles.form}>
            <fieldset>
                <legend>Sign Up Form</legend>
                <label htmlFor="name">Name</label>
                <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                
                <label htmlFor="email">Email</label>
                <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                
                <label htmlFor="password">Password</label>
                <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    onChange={this.handleChange}
                />
                
                <label htmlFor="passwordConf">Password Confirmation</label>
                <input 
                    id="passwordConf" 
                    name="passwordConfirmation" 
                    type="Password" 
                    value={this.state.passwordConf}
                    onChange={this.handleChange}
                />
                
                <button type="submit">Submit</button>
            </fieldset>
        </form>
        );
    }
}

export default SignupForm;