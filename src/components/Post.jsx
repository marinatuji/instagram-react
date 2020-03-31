import React from 'react';
import './Post.scss';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
    }
  }

  render() {
    const { like } = this.state;

    return (
      <article className="post">
        <header className="post__header">
          <div className="user">
            <a href="#" className="user__thumb">
              <img src="assets/img/profiles/yoda/yoda-profile.jpg" alt="" />
            </a>

            <a href="#" className="user__name">Mestre Yoda</a>
          </div>

          <button className="post__context">
            <i className="fas fa-ellipsis-h" />
          </button>
        </header>

        <figure className="post__figure">
          <img src="assets/img/profiles/yoda/yoda-1.jpg" alt="" />
        </figure>

        <nav className="post__controls">
          <button
            className="post__control"
            onClick={() => this.setState({ like: !like })}
          >
            { like
              ? <i className="fas fa-heart" />
              : <i className="far fa-heart" />
            }
          </button>

          <button className="post__control">
            <i className="far fa-comment" />
          </button>

          <button className="post__control">
            <i className="far fa-bookmark" />
          </button>
        </nav>

        <div className="post__status">
          <div className="user">
            <a href="#" className="user__thumb">
              <img src="assets/img/profiles/domino/domino-profile.jpg" alt=""/>
            </a>

            <span>
              curtido por <a href="#">Domino</a> e outras <a href="#">7 pessoas</a>
            </span>
          </div>
        </div>
      </article>
    )
  }
}

export default Post;
