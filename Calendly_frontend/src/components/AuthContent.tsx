// @ts-ignore
import React, { Component } from "react";
import axios from "axios";

interface State {
  data: string[];
}

export default class AuthContent extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount(): void {
    // Define your username and password
    const username = "said";
    const password = "test@123";

    // Encode credentials
    const encodedCredentials = btoa(`${username}:${password}`);

    // Set up Axios instance with basic authentication
    const instance = axios.create({
      baseURL: "http://localhost:8787", // Base URL of your backend API
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
      },
    });

    // Make API request
    instance
      .get("/messages")
      .then((response) => {
        // Handle successful response
        this.setState({ data: response.data });
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
  }

  render() {
    return (
      <div>
        {this.state.data && this.state.data.length > 0 ? (
          this.state.data.map((line, index) => <p key={index}>{line}</p>)
        ) : (
          <p>No data available</p>
        )}
      </div>
    );
  }
}
