import React, { Component } from "react";
import Routes from "./routes";
// import AsyncStorage from "@react-native-community/async-storage";
import "~/config/ReactotronConfig";

export default class App extends Component {
  state = {};

  async componentDidMount() {}

  render() {
    return <Routes />;
  }
}
