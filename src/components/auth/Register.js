import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';

class Register extends Component {
    state = {
        email: "",
        password: "",
        username: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    //This method checks if the username or email already exists in Users in the API.
    constructNewArticle = evt => {
        evt.preventDefault();
        let emailBool = false;
        let userNameBool = false;
        let emailArray = [];
        let userNameArray = [];
        APIManager.getAllUsers().then((usersArray) => {
            emailArray = usersArray.filter((user) => user.email === this.state.email)
            userNameArray = usersArray.filter((user) => user.username === this.state.username)
            console.log(emailArray)
            console.log(userNameArray)
            console.log("Step 1:",emailBool)
              //Checks to make sure all the fields in the form are filled out.
        if (this.state.email === "" || this.state.password === "" || this.state.username === "") {
            window.alert("Hey dumbass, make sure the email, password, and username are all filled out in the form")
        } else {

            //Check to see if the emailArray is empty and sets the emailBool to true if the condition is met.  If true, that means there was no email match in the API.
            if (emailArray.length === 0) {
                emailBool = false;
            } else {
                alert("This email address is taken")
            }

            //Check to see if the userNameArray is empty and sets the userName to true if the condition is met.  If true, that means there was no match to the username in the API.
            if (userNameArray.length === 0) {
                userNameBool = true;
            } else {
                alert("This username is taken")
            }

            //Checks if both bools are true.  If they are both true that means there was no match, so its OK to create the new user.   The information is then set to state and posted to the API.
            if (emailBool === true && userNameBool === true) {
                console.log("Step 2:", emailBool)
                this.setState({ loadingStatus: true });
                const user = {
                    email: this.state.email,
                    password: this.state.password,
                    username: this.state.username,
                }
                APIManager.postUser(user).then(() => this.props.history.push("/"))
            }

        }
        })

      
    };

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="email"
                                placeholder="Email"
                            />
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="username"
                                placeholder="Username"
                            />
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="password"
                                placeholder="Password"
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewArticle}
                            >Register</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}
export default Register

