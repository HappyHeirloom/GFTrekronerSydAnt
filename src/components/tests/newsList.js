import React, { Component } from "react";

// This will require to npm install axios
import axios from 'axios';

import { Card, Avatar } from 'antd';

const { Meta } = Card;

const News = (props) => (
    <Card
        style={{ width: "auto", color: props.news.tag }}
    >
        <Meta
            avatar={
                // TODO Make avatar change depending on news image.
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
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


    render() {
        return (
            <div>
                <h3> Nyheder </h3>
                {this.newsList()}
            </div>
        );
    }
}
