import React, { Component } from "react";

// This will require to npm install axios
import axios from 'axios';

import { Card, Avatar } from 'antd';
import { List } from 'antd';
import { Link } from "react-router-dom";

import "../styles/adminNews.css"

//oneNews = 1 news, news = more
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

const OneNews = (props) => (
        <Card
            style={{ width: 300 }}
            actions={[
                <Link to={"/editNews/" + props.news.id}>Rediger</Link>,
                <Link onClick={ () => {props.deleteOneNews(props.news.id)} } to="/adminnewsfeed" > Slet </Link>
            ]}
        >
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
        this.deleteNews = this.deleteOneNews.bind(this);
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

    deleteOneNews(id) {
        axios.delete("https://gftrekronersydrestapi.azurewebsites.net/api/news/" + id).then((response) => {
            console.log(response.data);
        });
    
        this.setState({
            news: this.state.news.filter((el) => el.id !== id),
        });
        }

    newsList() {
        return this.state.news.map((currentonenews) => {
            return (
                <OneNews
                    news={currentonenews}
                    key={currentonenews.id}
                    deleteOneNews={this.deleteNews}
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
            <div className="adminNewsWrapper">
                <div className="adminNewsContainer">
                    <h3> Overblik over nyheder </h3>
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
                                actions={[
                                    <Link to={"/editNews/" + item.id}>Rediger</Link>,
                                    <Link onClick={ () => {this.deleteOneNews(item.id)} } to="/adminnewsfeed" > Slet </Link>
                                ]}
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
            </div>
        );
    }
}
