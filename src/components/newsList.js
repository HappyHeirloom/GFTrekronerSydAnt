import React, { Component } from "react";

// This will require to npm install axios
import axios from 'axios';

import { Card, Avatar } from 'antd';
import { List } from 'antd';

const { Meta } = Card;
var list = [];


function returnImage(image){
    if(image === "Parking"){
        return "https://cdn-icons-png.flaticon.com/512/5006/5006090.png";
    }
    if(image === "Important"){
        return "https://cdn-icons-png.flaticon.com/512/3522/3522016.png";
    }
}

function returnColor(color){
    switch(color){
        case "Red":
            return "#DB3E39";
        case "Yellow":
            return "#F0ED8C";
        case "Green":
            return "#77F085";
        default:
            return "white";
    }
}




const News = (props) => (

    <Card>   
        <Meta
            avatar={
                <Avatar src={returnImage(props.news.image)} style={{backgroundColor: returnColor(props.news.tag), padding: 5}} />
            }
            title={props.news.title}
            description={props.news.message}
        />
    </Card>
  );

export default class newsList extends Component {
    constructor(props) {
        super(props);
        this.deleteRecord = this.deleteNews.bind(this);
        this.state = { news: [] };
        }
        
    componentDidMount() {
        axios
            .get("https://gftrekronersydrestapi.azurewebsites.net/api/news")
            .then((response) => {
                this.setState({ news: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
        }

    deleteNews(id) {
        axios.delete("https://gftrekronersydrestapi.azurewebsites.net/api/news/" + id).then((response) => {
            console.log(response.data);
        });
    
        this.setState({
            news: this.state.news.filter((el) => el.id !== id),
        });
        }

    newsList() {
        return this.state.news.map((currentnews) => {
            return (
                <News
                    news={currentnews}
                    key={currentnews.id}
                />
            );
        });
    }

    newDataList(){
        this.newsList().forEach(element => {
            list.push(element.props.news);
        });

        list.reverse();
    }

    emptyArray(){
        list = [];
    }

    render() {
        return (
            <div>
                {this.newDataList()}
                <List
                    header="News"
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
                    >
                        <List.Item.Meta
                        avatar={<Avatar src={returnImage(item.image)} style={{backgroundColor: returnColor(item.tag), padding: 5}} />}
                        title={item.title}
                        description={item.message}
                        />
                    </List.Item>
                    )}
                />,
                {this.emptyArray()}
            </div>
        );
    }
}
