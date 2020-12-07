import React, { Component } from 'react'
import { connect } from 'react-redux';
 
class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

// handleChange() will always be bound 
// to the particular instance of the component 
// it is defined in.

  handleChange = event => {
    this.setState({
        text: event.target.value
    });
};

handleSubmit = event => {
  event.preventDefault();
  this.props.addTodo(this.state)
}
// alt way to write it
// handleSubmit = event => {
//   event.preventDefault();
//   this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
// };
 

  render() {
    return(
      <div>
        <form onSubmit={ event =>
        this.handleSubmit(event) }>
          <p>
            <label>Add Todo: </label>
              <input
              type="text"
              onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};
 
export default connect(null, mapDispatchToProps)(CreateTodo);
// alt way to write it
// export default connect()(CreateTodo);