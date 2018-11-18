import React, { Component } from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import localforage from 'localforage';

/*
const user = {
  user: 'user1', 
  content: {
    login: 'user1',
    password: '111',
    isAdmin: 0,
    plans: [{}]
  }
};

localforage.setItem(user.user, user.content);
console.log(localforage.getItem('user'));

  const userAdmin = {
    user: 'user2', 
    content: {
      login: 'user2',
      password: '111',
      isAdmin: 1,
      plans: [{}]
    }
  };
  
localforage.setItem(userAdmin.user, userAdmin.content);
console.log(localforage.getItem('userAdmin'));
*/
class App extends Component {
  constructor() {
    super();
    this.state = {
        name: '',
        password: '',
        isAdmin: false,
        isAuth: false
    }
  }

  handleInputChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
        [e.target.name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
        name: this.state.name,
        password: this.state.password,
        isAdmin: this.state.isAdmin
    }
    this.setState({
      isAuth: true
  });
    localforage.setItem(user.name, {...user, plans: []} );
    //console.log(localforage.getItem(user.name));
  }

  handleSubmitLogin(user) {
    localforage.getItem(user.name)
    .then((value) => {
      if (value.password === user.password) {
          this.setState({
            name: value.name,
            password: value.password,
            isAdmin: value.isAdmin,
            isAuth: true
        });
        console.log(this.state);
      } else {
        alert('Неправильный пароль');
      }
    })
    .catch((err) => {
      alert('Такого пользователя не существует');
    });
    //console.log(localforage.getItem(user.name));
  }

  render() {
    return (
      <div className="App">
        <body>
          {
            !this.state.isAuth && 
            <div>
              <Register 
                name={this.state.name} 
                password={this.state.password}
                isAdmin={this.state.isAdmin}
                isAuth={this.state.isAuth}
                handleInputChange = {e => this.handleInputChange(e)}
                handleSubmit = {e => this.handleSubmit(e)}
                />
                <Login 
                name={this.state.name} 
                password={this.state.password}
                isAdmin={this.state.isAdmin}
                isAuth={this.state.isAuth}
                handleInputChange = {e => this.handleInputChange(e)}
                handleSubmit = {e => this.handleSubmitLogin(e)}
                />
               </div>
          }
        </body>
      </div>
    );
  }
}

export default App;
