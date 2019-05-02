import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    loading: false,
    loadingRepo: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });

    this.setState({ loading: false, repositories: await this.getLocalRepositories() });
  }

  handleAddRepository = async (e) => {
    const { repositories, repositoryInput } = this.state;

    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, repository],
        repositoryError: false,
      });

      const localRepositories = await this.getLocalRepositories();

      await localStorage.setItem(
        '@GitCompare:repositories',
        JSON.stringify([...localRepositories, repository]),
      );
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  getLocalRepositories = async () => JSON.parse(await localStorage.getItem('@GitCompare:repositories')) || [];

  handleRemoveRepository = async (id) => {
    const { repositories } = this.state;

    const repo = repositories.filter(x => x.id !== id);

    await localStorage.setItem('@GitCompare:repositories', JSON.stringify(repo));

    this.setState({ repositories: repo });
  };

  handleUpdateRepository = async (id) => {
    this.setState({ loadingRepo: true });

    const { repositories } = this.state;

    const repoId = repositories.find(repo => repo.id === id);

    try {
      const { data: repository } = await api.get(`/repos/${repoId.full_name}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryError: false,
        repositoryInput: '',
        repositories: repositories.map(repo => (repo.id === repository.id ? repository : repo)),
      });

      await localStorage.setItem('@GitCompare:repositories', JSON.stringify(repositories));
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loadingRepo: false });
    }
  };

  render() {
    const {
      loadingRepo, loading, repositories, repositoryInput, repositoryError,
    } = this.state;

    return (
      <Container>
        <img src={logo} alt="GitHub Compare" />

        <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="user/repository"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {loading ? <i className="fa fa-spinner fa-pulse" /> : <i className="fa fa-search" />}
          </button>
        </Form>

        <CompareList
          loadingRepo={loadingRepo}
          repositories={repositories}
          handleRemoveRepository={this.handleRemoveRepository}
          handleUpdateRepository={this.handleUpdateRepository}
        />
      </Container>
    );
  }
}
