import React, { Component } from 'react'
import moment from 'moment'
import { Form, Input, Button, Select, DatePicker, TimePicker, message } from 'antd';

// This will require to npm install axios
import axios from 'axios';
import { withRouter } from "react-router";

import "../styles/adminEventEdit.css";

function returnMonth(month){
    switch(month){
        case "Jan":
            return "0";
        case "Feb":
            return "1";
        case "Mar":
            return "2";
        case "Apr":
            return "3";
        case "May":
            return "4";
        case "Jun":
            return "5";
        case "Jul":
            return "6";
        case "Aug":
            return "7";
        case "Sep":
            return "8";
        case "Oct":
            return "9";
        case "Nov":
            return "10";
        case "Dec":
            return "11";
        default:
            return "0";
    }
}

function fixArray(arrayToFix, date){
    var string = String(arrayToFix);
    var tempAr = string.split(' ');
    var tempArNum;
    if(date === true){
        tempAr.shift();
        var dateToNum = returnMonth(tempAr[0]);
        tempAr.shift();
        tempAr.unshift(dateToNum);
        tempAr.splice(3,6);
        var year = tempAr.pop();
        tempAr.unshift(year); 
    } else {
        tempAr.splice(0,4);
        tempAr.splice(1,5);
        string = tempAr.join('');
        tempAr = string.split(':');

    }
    tempArNum = tempAr.map(Number);
    
    return tempArNum;
}

//#region form antd
const { Option } = Select;
const format = 'HH:mm:ss';

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
        this.onChangeAllDay = this.onChangeAllDay.bind(this);
        this.onChangeStart = this.onChangeStart.bind(this);
        this.onChangeEnd = this.onChangeEnd.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: "",
            title: "",
            allDay: "",
            startDate: "",
            startTime: "",
            start: "",
            endDate: "",
            endTime: "",
            end: "",
        };
    }

    dateArray(string, start){
        var tempArr = string.split(',');
        var date = tempArr.splice(0,3);
        date[1]++;
        var strng = date.join("-")
        if(start === true){
            this.setState({startDate: strng});
        } else {
            this.setState({endDate: strng});
        }
    }
    
    timeArray(string, start){
        var tempArr = string.split(',');
        var date = tempArr.splice(2,3);
        var strng = date.join(":")
        if(start === true){
            this.setState({startTime: strng});
        } else {
            this.setState({endTime: strng});
        }
    }

    componentDidMount() {
        axios
          .get("https://gftrekronersydrestapi.azurewebsites.net/api/event/" + this.props.match.params.id)
          .then((response) => {
            this.setState({
                id: response.data.id,
                title: response.data.title,
                allDay: String(response.data.allDay),
                start: response.data.start,
                end: response.data.end,
            });
            this.dateArray(this.state.start, true);
            this.dateArray(this.state.end, false);
            this.timeArray(this.state.start, true);
            this.timeArray(this.state.end, false);
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

    onChangeAllDay = (value) => {
        var bool;
        if(value === "true"){
            bool = true;
        }else if(value === "false"){
            bool = false;
        }
        this.setState({allDay: bool})
    }

    onChangeStartDate = (value) => {
        var sDate = fixArray((moment(value)._d), true);
        this.setState({startDate: sDate});
    }
    onChangeStartTime = (value) => {
        var sTime = fixArray((moment(value)._d), false);
        this.setState({startTime: sTime})
    }
    onChangeStart = () => {
        var array = this.state.startDate.concat(this.state.startTime)
        var string = array.join(',');
        this.setState({start: string});
    }
    
    onChangeEndDate = (value) => {
        var eDate = fixArray((moment(value)._d), true);
        this.setState({endDate: eDate});
    }
    onChangeEndTime = (value) => {
        var eTime = fixArray((moment(value)._d), false);
        this.setState({endTime: eTime});
    }
    onChangeEnd() {
        var array = this.state.endDate.concat(this.state.endTime)
        var string = array.join(',');
        this.setState({end: string});
    }

    onReset = () => {
        this.formRef.current.resetFields();
      };



    // This function will handle the submission.
    onSubmit() {
        if(this.state.startDate !== null && this.state.startDate !== "" 
        && this.state.startTime !== null && this.state.startTime !== ""
        && this.state.endDate !== null && this.state.endDate !== "" 
        && this.state.endTime !== null && this.state.endTime !== ""
        ){
            this.onChangeStart();
            this.onChangeEnd();
            // When post request is sent to the create url, axios will add a new record(newperson) to the database.
            const newEditedEvent = {
                id: this.state.id,
                title: this.state.title,
                allDay: this.state.allDay,
                start: this.state.start,
                end: this.state.end,
            };
            axios
            .put(
              "https://gftrekronersydrestapi.azurewebsites.net/api/event/",
              newEditedEvent
            )
            .then((res) => console.log(res.data));
    
            this.props.history.push("/");
        }
        else {
            message.warning("Please enter date and time");
        }

    }

    //#endregion


    render() {
        return (
            <div className="adminEventEditWrapper">
                <div className="adminEventEditContainer">
                    <h3>Redigér et event</h3>
                    <Form ref={this.formRef} name="control-ref" onFinish={this.onSubmit}>
                        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
                            <Input 
                            placeholder={this.state.title}
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                            />
                        </Form.Item>

                        <Form.Item name="allDay" label="allDay" rules={[{ required: true }]}>
                            <Select
                                placeholder={this.state.allDay}
                                onChange={this.onChangeAllDay}
                                allowClear
                                >
                                <Option value="true">True</Option>
                                <Option value="false">False</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item name="start" label="Start" >
                            <DatePicker
                                placeholder={this.state.startDate}
                                onChange={this.onChangeStartDate}
                                allowClear
                                />
                            <TimePicker
                                placeholder={this.state.startTime}
                                format={format}
                                onChange={this.onChangeStartTime}
                                allowClear
                                />
                        </Form.Item>

                        <Form.Item name="end" label="End">
                        <DatePicker
                                placeholder={this.state.endDate}
                                onChange={this.onChangeEndDate}
                                allowClear
                                />
                            <TimePicker
                                placeholder={this.state.endTime}
                                format={format}
                                onChange={this.onChangeEndTime}
                                allowClear
                                />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Tilføj
                            </Button>
                            <Button htmlType="button" onClick={this.onReset}>
                                Nulstil
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

export default withRouter(Edit);