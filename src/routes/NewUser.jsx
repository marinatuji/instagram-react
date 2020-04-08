import React from 'react';

import './Feed.scss';

class NewUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      avatar: '',
      username: '',
      email: '',
      submit: false
    };
  }

  setName(event) {
    const { value } = event.target;
    this.setState({ name: value });
  }

  setAvatar(event) {
    const { value } = event.target;
    this.setState({ avatar: value });
  }

  setUserName(event) {
    const { value } = event.target;
    this.setState({ username: value });
  }

  setEmail(event) {
    const { value } = event.target;
    this.setState({ email: value });
  }

  cadastraUsuario(event) {
    event.preventDefault();
    const { name, avatar, username, email } = this.state;

    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        avatar,
        username,
        email
      })
    })
      .then(response => response.json())
      .then(() => this.setState({ submit: true }));
  }

  render() {
    const { name, avatar, username, submit } = this.state;

    return (
      <div className="container">
        <section className="feed">
          <article className="post new-user">
            <header className="post__header">
              <h1>Novo usuário</h1>
            </header>

            {submit && window.alert('Cadastrada(o) com sucessso !')}

            <div className="user">
              <div href="#" className="user__thumb">
                {avatar.length > 0 ? (
                  <img src={avatar} alt="" />
                ) : (
                  <img src="http://placehold.it/200x200" alt="" />
                )}
              </div>

              <p href="#" className="user__name">
                {name} - @{username}
              </p>
            </div>

            <div className="post__form">
              <label>Nome</label>
              <input
                type="text"
                placeholder="Ex: Fulano Ciclano"
                onChange={event => this.setName(event)}
              />

              <label>Usuário</label>
              <input
                type="text"
                placeholder="Ex: fulano_ciclano"
                onChange={event => this.setUserName(event)}
              />

              <label>Email</label>
              <input
                type="email"
                placeholder="Ex: fulano@provedor.com"
                onChange={event => this.setEmail(event)}
              ></input>

              <label>Url da Imagem de Perfil</label>
              <input
                type="text"
                placeholder="http://..."
                onChange={event => this.setAvatar(event)}
              ></input>

              <button
                type="button"
                onClick={event => this.cadastraUsuario(event)}
              >
                Cadastrar
              </button>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default NewUser;
