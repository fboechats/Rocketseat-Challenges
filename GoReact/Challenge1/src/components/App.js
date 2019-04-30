import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Diego Fernandes',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        time: 'há 3 min',
        body:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere ',
      },
      {
        id: 2,
        name: 'Rocketseat',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        time: 'há 30 min',
        body:
          'Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </>
    );
  }
}
