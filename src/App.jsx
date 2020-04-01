import React from 'react';
import './App.scss';
import Topbar from './components/Topbar';
import Stories from './components/Stories';
import Feed from './components/Feed';

// Pensar nos estados -- ok
// Pegar a lista de usuários --ok
// Guardar lista de usuários no estado de APP --ok
// Iterar sobre a lista de usuários pegandos os IDs e fazer requisições dos posts de cada um.
// Guardar no estado a lista de posts;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      posts: [],
      usersFetched: 0,
    }
  }

  componentDidMount() {
    const usersList = fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users');

    usersList
      .then((res) => res.json())
      .then(dados => this.setState({ users:  dados }));
  }

  componentDidUpdate() {
    const { users, posts, usersFetched } = this.state;

    if (usersFetched === users.length) {
      return;
    }

    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[usersFetched].id}/posts`)
      .then((res) => res.json())
      .then(dados => this.setState({
        posts: [...posts, ...dados],
        usersFetched: usersFetched + 1,
      }))
  }

  render() {
    const { users, posts } = this.state;

    console.log(posts);

    return (
      <React.Fragment>
        <Topbar />

        <Feed posts={posts} />
      </React.Fragment>
    )
  }
}

export default App;
