import React, { Component } from "react"
import APIManager from "../../modules/APIManager"


class Login extends Component {

    state = {
        email: "",
        password: "",
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    handleLogin = (e) => {
        e.preventDefault()
        APIManager.filteredGetUsers(this.state.email, this.state.password)
            .then((usersArray) => {
                if (usersArray.length === 0) {
                    alert("The login info is incorrect")
                } else {
                    localStorage.setItem(
                        "credentials",
                        JSON.stringify({
                            email: this.state.email,
                            password: this.state.password,
                            userId: usersArray[0].id,
                        })
                    )
                    this.props.history.push("/");
                }
            })


    }

    handleRegister = () => {
        this.props.history.push("/register")
    }


    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <fieldset>
                    <h3>Welcome Back!</h3>
                    <h4>Please Sign In</h4>
                    <div className="formgrid">
                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="Email address"
                            required="" autoFocus="" />
                        <label htmlFor="inputEmail">Email address</label>
                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                        <label htmlFor="inputPassword">Password</label>
                    </div>
                    <button type="submit">
                        Sign in
            </button>
                    <a href="" onClick={this.handleRegister}>Register Account</a>
                </fieldset>
            </form>
        )
    }
}
export default Login
