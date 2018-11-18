import React, { Component } from 'react';

class Logout extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const name = this.props.name;
    this.props.handleSubmit(name)
  }

  render() {
    if (!this.props.isAuth) { 
      return <div/>;
    } 
    else return(
        <div className="container">
            <form>
                <div className="form-group">
                    <button type="button" 
                    onClick={e => this.handleSubmit(e)}
                    className="btn btn-primary" >
                        Выйти
                    </button>
                </div>
            </form>
        </div>
      )
  }
}

export default Logout;