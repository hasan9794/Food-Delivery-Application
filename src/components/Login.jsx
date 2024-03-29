import React, { Component } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Form, Col, Button, Row, CloseButton } from 'react-bootstrap'
import { auth, db } from '../config/firebase'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(e) {
        // alert('handleSubmit')
        let { email, password } = this.state;

        if (email.length === 0) {
            // alert('Enter  email!')
            NotificationManager.warning('Enter email');
        }
        else if (password.length === 0) {
            // alert('Enter password')
            NotificationManager.warning('Enter password');
        }
        else if (email.length !== 0 && password.length !== 0) {
            // alert('active')
            this.signInUser(email, password)

        }


        e.preventDefault()
    }


    signInUser(email, password) {
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                let info = auth.currentUser
                // alert(info.uid)


                //login for restaurant
                db.collection('restaurants').get()
                    .then(snap => {
                        // console.log(snap.docs)
                        // alert(snap.docs)
                        snap.docs.forEach(doc => {
                            console.log(doc.id)
                            if (info.uid === doc.id) {
                                console.log("Restaurant successfully signed in");
                                // console.log(this.props)
                                NotificationManager.success('Successfully signed in', 'Done!');
                                setTimeout(() => {
                                    this.props.history.push('/restaurantview')
                                }, 3000)
                            }
                        })
                    })


                //login for user
                db.collection('users').get()
                    .then(snap => {
                        // console.log(snap.docs)
                        // alert(snap.docs)
                        snap.docs.forEach(doc => {
                            console.log(doc.id)
                            if (info.uid === doc.id) {
                                console.log("User successfully signed in");
                                // console.log(this.props)
                                NotificationManager.success('Successfully signed in', 'Done!');
                                setTimeout(() => {
                                    this.props.history.push('/userview')
                                }, 3000)
                            }
                        })
                    })
                })



                    .catch((error) => {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // ...
                        NotificationManager.error(errorMessage, 'Try again!', 5000)
                    });
            }


    render() {
                    console.log(this.state.email, this.state.password)
        return(
            <div className = 'container' >
                            <br />
                            <br />

                            <div className="d-flex justify-content-center">
                                <Form style={{width: "37%"}} onSubmit={this.handleSubmit} className=' center shadow p-3 mb-5 bg-white rounded'>
                                    <h1>LOGIN</h1>
                                    <br />

                                    <Form.Group controlId="formBasicEmail">

                                        <Form.Control type="email" name='email' placeholder="Enter email" onChange={this.handleChange} />

                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">

                                        <Form.Control type="password" name='password' minLength='6' placeholder="Password" onChange={this.handleChange} />
                                    </Form.Group>


                                    <Button className="w-100" variant="dark" type="submit">LogIn</Button>

                                </Form>
                            </div>

                            <NotificationContainer />


            </div>
        );
    }
}

export default Login;