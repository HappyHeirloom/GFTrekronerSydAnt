import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { message, Form, Input, Button } from 'antd';
import axios from 'axios';

class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { admin: {} };
    }

    componentDidMount() {
        var loggedIn = localStorage.getItem("loggedIn");
        if (loggedIn === "true"){
            this.props.history.push("/dashboard");
        } else {
            axios
            .get("https://gftrekronersydrestapi.azurewebsites.net/api/admin")
            .then((response) => {
                this.setState({admin: response.data[0]});
            })
            .catch(function (error){
                console.log(error);
            })
        }
    }

    onFinish = (values) => {
        if(values.username === this.state.admin.username && values.password === this.state.admin.password){
            localStorage.setItem("loggedIn", "true");
            message
            .loading('Checking login...', 0.2)
            .then (() => message.success("Login success.", 0.3))
            message
            .loading("Redirecting...", 1)
            .then(() => this.props.history.push("/dashboard"))
        }
        else{
            this.onFinishFailed();
        }
    };
  
    onFinishFailed = (errorInfo) => {
        message
        .loading('Checking login...', 0.2)
        .then(() => message.error('Login failed.', 0.5))
        .then(() => message.error('Please input the correct username and password'));
    };
  
    render () {
        return (
        <Form
            name="basic"
            labelCol={{
            span: 24,
            }}
            wrapperCol={{
            span: 24,
            }}
            initialValues={{
            remember: true,
            }}
            onFinish={this.onFinish}
            autoComplete="off"
        >
            <Form.Item
            label="Username"
            name="username"
            rules={[
                {
                required: true,
                message: 'Please input your username!',
                },
            ]}
            >
            <Input />
            </Form.Item>
    
            <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}
            >
            <Input.Password />
            </Form.Item>
    
            <Form.Item
            wrapperCol={{
                offset: 0,
                span: 24,
            }}
            >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
        );
    }
};

export default withRouter(AdminLogin)