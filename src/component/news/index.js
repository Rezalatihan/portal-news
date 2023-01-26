import axios from "axios";
import React, { Component } from "react";
import CardNews from "./cardNews";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default class NewsPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      input: "",
    };
  }

  componentDidMount() {
    const baseUrl =
      "https://newsapi.org/v2/top-headlines?country=id&apiKey=92a40510b84745af9b7c3eac932b54a8";
    axios.get(`${baseUrl}&q=${this.state.input}`).then((res) => {
      this.setState({
        post: res.data.articles,
      });
    });
  }

  handleInput = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSearch = () => {
    const input = this.state.input;
    const filtered = this.state.post.filter((post) => {
      return post.title.toLowerCase().includes(input.toLowerCase());
    });
    this.setState({
      input: this.state.input,
      post: filtered,
    });
  };

  render() {
    return (
      <div className="containe" >
        <div className="text-center ">
          <h1 className="font-bold text-black mt-5 mb-4">News Portal</h1>
          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              placeholder="Search News..."
              value={this.state.input}
              onChange={this.handleInput}
            />
            <Button variant="info" onClick={this.handleSearch}>
              search
            </Button>
          </InputGroup>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "3px",
          }}
        >
          {this.state.post.map((news, i) => (
            <div key={i}>
              <CardNews
                img={news.urlToImage}
                title={news.title}
                date={news.publishedAt}
                description={news.description}
                url={news.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
