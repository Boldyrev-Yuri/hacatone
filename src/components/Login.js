import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

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
        <div className="container inline">
            <h2>Вход</h2>
            <form>
                <div className="form-group">
                    <Input
                    type="text"
                    placeholder="Имя"
                    className='form-control form-control-lg'
                    name="name"
                    onChange={ e => this.handleInputChange(e) }
                    value={ this.state.name }
                    />

                </div>
                <div className="form-group">
                    <Input
                    type="password"
                    placeholder="Пароль"
                    className='form-control form-control-lg'
                    name="password"
                    onChange={ e => this.handleInputChange(e) }
                    value={ this.state.password }
                    />
                </div>
                <div className="form-group div-marging">
                    <Button 
                    variant="contained" 
                    color="primary"
                    type="button" 
                    onClick={e => this.handleSubmit(e)}
                    className="btn btn-primary"
                    >
                        Войти
                    </Button>
                </div>
            </form>
        </div>
      )
  }
}

export default Login;