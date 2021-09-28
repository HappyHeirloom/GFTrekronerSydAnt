import React, { Component } from 'react'
import { Form, Input, Button, Select } from 'antd';

// This will require to npm install axios
import axios from 'axios';
import { withRouter } from "react-router";


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

class Edit extends Component {
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

    componentDidMount() {
        axios
          .get("http://localhost:5000/news/" + this.props.match.params.id)
          .then((response) => {
            this.setState({
                title: response.data.title,
                image: response.data.image,
                tag: response.data.tag,
                message: response.data.message,
            });
          })
          .catch(function (error) {
            console.log(error);
          });
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
        const newEditedNews = {
            title: this.state.title,
            image: this.state.image,
            tag: this.state.tag,
            message: this.state.message,
        };

        axios
        .post(
          "http://localhost:5000/update/" + this.props.match.params.id,
          newEditedNews
        )
        .then((res) => console.log(res.data));
  
        this.props.history.push("/");

    }

    //#endregion


    render() {
        return (
            <div>
                <h3>Opdatér nyhed</h3>
                <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onSubmit}>
                    <Form.Item name="title" label="Titel" rules={[{ required: true }]}>
                        <Input 
                        placeholder={this.state.title}
                        value={this.state.title}
                        onChange={this.onChangeTitle}
                        />
                    </Form.Item>

                    <Form.Item name="picture" label="Billede" rules={[{ required: true }]}>
                        <Select
                            placeholder={this.state.image}
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
                            placeholder={this.state.tag}
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
                        placeholder={this.state.message}
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

export default withRouter(Edit);