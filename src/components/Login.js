import React, { Component } from 'react';

class Login extends Component {
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
    this.setState({
        [e.target.name]: e.target.value
    })
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
        name: this.state.name,
        password: this.state.password
    }
    console.log(this.state);
    this.props.handleSubmit(user)
  }

  render() {
    if (this.props.isAuth) { 
      return <div/>;
    } 
    else return(
        <div className="container">
            <h2>Вход</h2>
            <form>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Имя"
                    className='form-control form-control-lg'
                    name="name"
                    onChange={ e => this.handleInputChange(e) }
                    value={ this.state.name }
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Пароль"
                    className='form-control form-control-lg'
                    name="password"
                    onChange={ e => this.handleInputChange(e) }
                    value={ this.state.password }
                    />
                </div>
                <div className="form-group">
                    <button type="button" 
                    onClick={e => this.handleSubmit(e)}
                    className="btn btn-primary" >
                        Войти
                    </button>
                </div>
            </form>
        </div>
      )
  }
}

export default Login;