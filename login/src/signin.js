import React, {Component} from 'react';
import axios from 'axios';

export default class signin extends Component{
    constructor(props){
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Email : '',
            Password : '',
            message:''
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
    onSubmit(){
        axios.get('http://localhost:4000/user/login/'+this.state.Email+'/'+this.state.Password)
            .then( res => { console.log(res.data.message)});

    }
    render() {
        return(
            <div>
                <div className="container">
                    <h1>Sign In</h1>
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
                        <div className="clearfix">
                            <button type="reset" className="cancelbtn">Cancel</button>
                            <button type="submit" className="signupbtn">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}