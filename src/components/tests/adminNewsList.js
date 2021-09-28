import React, { Component } from "react";

// This will require to npm install axios
import axios from 'axios';

import { Card, Avatar } from 'antd';
import { Link } from "react-router-dom";

//oneNews = 1 news, news = more
const { Meta } = Card;

const OneNews = (props) => (
    <Card
        style={{ width: 300 }}
        actions={[
            <Link to={"/edit/" + props.news._id}>Edit</Link>,
            <Link onClick={ () => {props.deleteOneNews(props.news._id)} } to="/adminnewsfeed" > delete </Link>
          ]}
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
        this.deleteNews = this.deleteOneNews.bind(this);
        this.state = { news: [] };
    }
        
    componentDidMount() {
        axios
            .get("http://localhost:5000/news/")
            .then((response) => {
                this.setState({ news: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
        }

    deleteOneNews(id) {
        axios.delete("http://localhost:5000/" + id).then((response) => {
            console.log(response.data);
        });
    
        this.setState({
            news: this.state.news.filter((el) => el._id !== id),
        });
        }

    newsList() {
        return this.state.news.map((currentonenews) => {
            return (
                <OneNews
                    news={currentonenews}
                    key={currentonenews._id}
                    deleteOneNews={this.deleteNews}
                />
            );
        });
    }


    render() {
        return (
            <div>
                <h3> Overview of newsfeed </h3>
                {this.newsList()}
            </div>
        );
    }
}
