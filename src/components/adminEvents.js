import React, { Component } from "react";

// This will require to npm install axios
import axios from 'axios';

import { Card} from 'antd';
import { List } from 'antd';
import { Link } from "react-router-dom";

//oneNews = 1 news, news = more
const { Meta } = Card;
var list = [];

const OneEvent = (props) => (
        <Card
            style={{ width: 300 }}
            actions={[
                <Link to={"/editEvent/" + props.event.id}>Rediger</Link>,
                <Link onClick={ () => {props.deleteOneEvent(props.event.id)} } to="/dashboard" > Slet </Link>
            ]}
        >
            <Meta
                title={props.event.title}
                description={"Hele dagen: " + props.event.allDay 
                + " Start dato/tid: " + props.event.start 
                + " Slut dato/tid: " + props.event.end}
            />
    </Card>
  );

export default class eventsList extends Component {
    constructor(props) {
        super(props);
        this.deleteEvent = this.deleteOneEvent.bind(this);
        this.state = { events: [] };
    }
        
    componentDidMount() {
        axios
            .get("https://gftrekronersydrestapi.azurewebsites.net/api/event")
            .then((response) => {
                this.setState({ events: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
        }

    deleteOneEvent(id) {
        axios.delete("https://gftrekronersydrestapi.azurewebsites.net/api/event/" + id).then((response) => {
            console.log(response.data);
        });
    
        this.setState({
            events: this.state.events.filter((el) => el.id !== id),
        });
        }

    eventList() {
        return this.state.events.map((currentoneevent) => {
            return (
                <OneEvent
                    event={currentoneevent}
                    key={currentoneevent.id}
                    deleteOneEvent={this.deleteEvent}
                />
            );
        });
    }

    newDataList(){
        console.log(this.eventList());
        this.eventList().forEach(element => {
            list.push(element.props.event);
        });

        list.reverse();
    }

    emptyArray(){
        list = [];
    }

    render() {
        return (
            <div>
                <h3> Overblik over events </h3>
                {this.newDataList()}
                <List
                    header="Events"
                    itemLayout="vertical"
                    size="large"
                    bordered="true"
                    pagination={{
                    onChange: page => {
                        
                    },
                    pageSize: 3,
                    }}
                    dataSource={list}
                    // footer={
                    // }
                    renderItem={item => (
                    <List.Item
                        key={item.id}
                        actions={[
                            <Link to={"/editEvent/" + item.id}>Rediger</Link>,
                            <Link onClick={ () => {this.deleteOneEvent(item.id)} } to="/dashboard" > Slet </Link>
                          ]}
                    >
                        <List.Item.Meta
                        title={item.title}
                        description={"Hele dagen: " + item.allDay}
                        />
                         <List.Item.Meta
                        description={"Start dato/tid: " + item.start}
                        />
                         <List.Item.Meta
                        description={"Slut dato/tid: " + item.end}
                        />
                    </List.Item>
                    )}
                />,
                {this.emptyArray()}
            </div>
        );
    }
}
