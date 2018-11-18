import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

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
        <div className="container inline">
            <form>
                <div className="form-group div-marging">
                    <Button 
                    variant="contained" 
                    color="primary"
                    type="button" 
                    onClick={e => this.handleSubmit(e)}
                    className="btn btn-primary"
                    >
                        Выйти
                    </Button>
                </div>
            </form>
        </div>
      )
  }
}

export default Logout;