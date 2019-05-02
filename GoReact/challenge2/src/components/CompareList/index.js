import React from 'react';
import PropTypes from 'proptypes';

import { Container, Repository } from './styles';

const CompareList = ({
  loadingRepo,
  repositories,
  handleRemoveRepository,
  handleUpdateRepository,
}) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
          <button
            className="left"
            type="button"
            onClick={() => handleRemoveRepository(repository.id)}
          >
            <i className="fa fa-trash" />
          </button>
          <button
            className="right"
            type="button"
            onClick={() => handleUpdateRepository(repository.id)}
          >
            {loadingRepo ? (
              <i className="fa fa-refresh fa-pulse" />
            ) : (
              <i className="fa fa-refresh" />
            )}
          </button>
        </header>
        <ul>
          <li>
            {repository.stargazers_count}
            <small>stars</small>
          </li>
          <li>
            {repository.forks_count}
            <small>forks</small>
          </li>
          <li>
            {repository.open_issues_count}
            <small>issues</small>
          </li>
          <li>
            {repository.lastCommit}
            <small>last commit</small>
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
    }),
  ).isRequired,
  handleRemoveRepository: PropTypes.func.isRequired,
  handleUpdateRepository: PropTypes.func.isRequired,
  loadingRepo: PropTypes.bool.isRequired,
};

export default CompareList;
