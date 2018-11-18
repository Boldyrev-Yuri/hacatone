import React, { Component } from 'react';
import localforage from 'localforage';

class Register extends Component {

  render() {
    if (this.props.isAuth) { 
      return <div/>;
    } 
    else return(
        <div className="container">
            <h2>Регистрация</h2>
            <form>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Имя"
                    className='form-control form-control-lg'
                    name="name"
                    onChange={ e => this.props.handleInputChange(e) }
                    value={ this.props.name }
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Пароль"
                    className='form-control form-control-lg'
                    name="password"
                    onChange={ e => this.props.handleInputChange(e) }
                    value={ this.props.password }
                    />
                </div>
                <div>
                  <input 
                  id="checkbox"
                  type="checkbox"
                  name="isAdmin"
                  checked={ this.props.isAdmin }
                  onChange={ e => this.props.handleInputChange(e) }
                  />
                  <label for="checkbox">Руководитель</label>
                </div>
                <div className="form-group">
                    <button type="button" 
                    onClick={ e => this.props.handleSubmit(e) } 
                    className="btn btn-primary" >
                        Зарегистрировать
                    </button>
                </div>
            </form>
        </div>
      )
  }
}

export default Register;