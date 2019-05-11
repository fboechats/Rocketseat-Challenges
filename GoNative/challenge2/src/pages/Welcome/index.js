import React, { Component } from "react";

import {
  View,
  StatusBar,
  TextInput,
  FlatList,
  ActivityIndicator,
  Text,
  AsyncStorage,
  TouchableOpacity
} from "react-native";

import api from "~/services/api";

import Icon from "react-native-vector-icons/FontAwesome";

import RepositoryItem from "./components/RepositoryItem";

import styles from "./styles";

export default class Welcome extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    repository: "",
    repositories: [],
    loadingList: true,
    loadingButton: false,
    error: "",
    refreshing: false
  };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    const repositories = JSON.parse(
      await AsyncStorage.getItem("@GitIssues:repositories")
    );

    this.setState({
      repositories: repositories || [],
      loadingList: false,
      refreshing: false
    });
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  renderList = () => {
    const { repositories, refreshing, clear } = this.state;

    return !repositories.length ? (
      <Text style={styles.empty}>Nenhum repositório adicionado</Text>
    ) : (
      <FlatList
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
        style={styles.list}
      />
    );
  };

  addRepository = async () => {
    const { repository, repositories, loadingList } = this.state;

    if (loadingList) return;

    this.setState({ loadingButton: true });

    if (!repository) {
      this.setState({
        error: "Preencha o repositório para continuar",
        loadingButton: false
      });
      return;
    }

    if (repositories.find(repo => repo.full_name === repository)) {
      this.setState({ error: "Repositório duplicado", loadingButton: false });
      return;
    }

    try {
      const { data } = await api.get(`/repos/${repository}`);

      this.setState({
        repository: "",
        error: "",
        repositories: [...repositories, data]
      });

      await AsyncStorage.setItem(
        "@GitIssues:repositories",
        JSON.stringify([...repositories, data])
      );
    } catch (_err) {
      this.setState({ repository: "", error: "Repositório inexistente" });
    } finally {
      this.setState({ loadingButton: false });
    }
  };

  clearAsync = () => {
    AsyncStorage.clear();
  };

  render() {
    const { repository, loadingButton, loadingList, error } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style={styles.header}>
          <Text style={styles.title}>GitIssues</Text>
          <TouchableOpacity onPress={this.clearAsync}>
            <Text style={styles.clear}>Clear</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Adicionar novo repositório"
              underlineColorAndroid="transparent"
              value={repository}
              onChangeText={text => this.setState({ repository: text })}
            />

            <TouchableOpacity onPress={this.addRepository}>
              {loadingButton ? (
                <ActivityIndicator
                  style={styles.buttonLoading}
                  size="small"
                  color="#000"
                />
              ) : (
                <Icon
                  style={styles.button}
                  name="plus"
                  size={20}
                  color="#000"
                />
              )}
            </TouchableOpacity>
          </View>
          {!!error && <Text style={styles.error}>{error}</Text>}
        </View>
        {loadingList ? (
          <ActivityIndicator size="large" style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
