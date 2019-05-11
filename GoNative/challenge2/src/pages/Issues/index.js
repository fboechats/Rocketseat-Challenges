import React, { Component } from "react";

import api from "~/services/api";

import IssueHeader from "./components/IssueHeader";

import IssueItem from "./components/IssueItem";

import { Text, View, ActivityIndicator, FlatList } from "react-native";

import styles from "./styles";

class Issues extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    filter: "all",
    issues: [],
    loading: true,
    error: "",
    refreshing: false
  };

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    this.setState({ refreshing: true });

    const { navigation } = this.props;
    const { filter } = this.state;

    try {
      const { data } = await api.get(
        `/repos/${navigation.getParam("full_name")}/issues?state=${filter}`
      );

      this.setState({ issues: data });
    } catch (_err) {
      this.setState({ error: "Erro ao recuperar as Issues" });
    } finally {
      this.setState({ loading: false, refreshing: false });
    }
  };

  renderListItem = ({ item }) => <IssueItem issue={item} />;

  renderList = () => {
    const { issues, refreshing } = this.state;

    return !issues.length ? (
      <Text style={styles.empty}>Nenhuma issue encontrada</Text>
    ) : (
      <FlatList
        data={issues}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadIssues}
        refreshing={refreshing}
        style={styles.list}
      />
    );
  };

  filterIssues = async value => {
    this.setState({ filter: value });

    const { navigation } = this.props;

    try {
      const { data } = await api.get(
        `/repos/${navigation.getParam("full_name")}/issues?state=${value}`
      );

      this.setState({ issues: data });
    } catch (_err) {
      this.setState({ error: "Erro ao recuperar as Issues" });
    }
  };

  render() {
    const { loading, filter } = this.state;

    return (
      <View style={styles.container}>
        <IssueHeader filter={filter} filterIssues={this.filterIssues} />
        {loading ? (
          <ActivityIndicator size="large" style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}

export default Issues;
