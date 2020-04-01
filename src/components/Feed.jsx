import React from 'react';
import './Feed.scss';
import Post from './Post';

class Feed extends React.Component {
  render() {
    const { posts } = this.props;

    return (
      <div className="container">
        <section className="feed">
          { posts.length > 0
            ? posts.map((cadaItem) => (<Post />))
            : <h2> Não há nenhum post no feed <span role="img" aria-label="Emoji Triste">😭</span>!</h2>
          }
        </section>
      </div>
    );
  }
}

export default Feed;
