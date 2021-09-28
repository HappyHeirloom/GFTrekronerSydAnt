import React, { Component } from 'react'
import { Form, Input, Button, Select } from 'antd';
import { FormInstance } from 'antd/es/form';

// This will require to npm install axios
import axios from 'axios';


//#region form antd
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
//#endregion

export default class Create extends Component {
    formRef = React.createRef();
    // This is the constructor that stores the data.
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeTag = this.onChangeTag.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: "",
            image: "",
            tag: "",
            message: "",
        };
    }


    //#region Functions
    // These methods will update the state properties.
    onChangeTitle(e) {
        this.setState({
            title: e.target.value,
        });
    }

    onChangeImage = (value) => {
        this.setState({image: value})
    }

    onChangeTag = (value) => {
        this.setState({tag: value})
    }
    
    onChangeMessage(e) {
        this.setState({
            message: e.target.value,
        });
    }

    onReset = () => {
        this.formRef.current.resetFields();
      };

    // This function will handle the submission.
    onSubmit() {
        // When post request is sent to the create url, axios will add a new record(newperson) to the database.
        const newNews = {
            title: this.state.title,
            image: this.state.image,
            tag: this.state.tag,
            message: this.state.message,
        };

        axios
            .post("http://localhost:5000/news/add", newNews)
            .then((res) => console.log(res.data));

        // We will empty the state after posting the data to the database
        this.setState({
            title: "",
            image: "",
            tag: "",
            message: "",
        });
        this.formRef.current.resetFields();
    }

    //#endregion


    render() {
        return (
            <div>
                <h3>Opret en nyhed</h3>
                <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onSubmit}>
                    <Form.Item name="title" label="Titel" rules={[{ required: true }]}>
                        <Input 
                        placeholder="Indtast en titel"
                        value={this.state.title}
                        onChange={this.onChangeTitle}
                        />
                    </Form.Item>

                    <Form.Item name="picture" label="Billede" rules={[{ required: true }]}>
                        <Select
                            placeholder="Select a type of image for the news block"
                            onChange={this.onChangeImage}
                            allowClear
                        >
                            <Option value="Parking">Parkering</Option>
                            <Option value="Rules">Reglement</Option>
                            <Option value="Other">Andet</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="tag" label="Farve" rules={[{ required: true }]}>
                        <Select
                            placeholder="Select a color for the news block"
                            onChange={this.onChangeTag}
                            allowClear
                        >
                            <Option value="Red">Rød</Option>
                            <Option value="Yellow">Gul</Option>
                            <Option value="Green">Grøn</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="message" label="Tekst" rules={[{ required: true }]}>
                        <Input
                        placeholder="Indtast din nyhedstekst"
                        value={this.state.message}
                        onChange={this.onChangeMessage}
                        />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={this.onReset}>
                        Reset
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
