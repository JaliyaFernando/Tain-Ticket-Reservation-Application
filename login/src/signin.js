import React, {Component} from 'react';
import axios from 'axios';

export default class signin extends Component{
    constructor(props){
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Email : '',
            Password : '',
            ConfirmPassword : ''
        };
    }

    onChangeEmail(e){
        this.setState({
            Email : e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            Password : e.target.value
        });
    }
    onChangeConfirmPassword(e){
        this.setState({
            ConfirmPassword : e.target.value
        });
    }
    onSubmit(){
        const obj = {
            Email : this.state.Email,
            Password : this.state.Password
        };
        axios.post('http://localhost:4000/user/add',obj)
            .then( res => { console.log(res.data)});


    }
    render() {
        return(
            <div>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="email"><b>Email</b></label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            name="email"
                            value={this.state.Email}
                            onChange={this.onChangeEmail}
                            required
                        />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="psw"
                            value={this.state.Password}
                            onChange={this.onChangePassword}
                            required
                        />

                        <label htmlFor="psw-repeat"><b>Confirm Password</b></label>
                        <input
                            type="password"
                            placeholder="Repeat Password"
                            name="psw-confirm"
                            value={this.state.ConfirmPassword}
                            onChange={this.onChangeConfirmPassword}
                            required
                        />

                        <p>By creating an account you agree to our <a href="#1">Terms
                            & Privacy</a>.</p>

                        <div className="clearfix">
                            <button type="reset" className="cancelbtn">Cancel</button>
                            <button type="submit" className="signupbtn">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}