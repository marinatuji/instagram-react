import React from 'react';
import './Feed.scss';
import Post from './Post';

class Feed extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="feed">
          <Post />
        </section>
      </div>
    );
  }
}

export default Feed;
