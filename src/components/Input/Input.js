import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
  contents = this.props.success ? null : (
    <form className='form-inline'>
      <input
        type='text'
        className='mb-2 mx-sm-3'
        placeholder='Enter guess'
        data-test='input-box'
      />
      <button
        type='submit'
        className='btn btn-primary'
        data-test='submit-button'
      >
        Submit
      </button>
    </form>
  );

  render() {
    return <div data-test='component-input'>{this.contents}</div>;
  }
}

const mapStateToProps = ({ success }, ownProps) => ({
  success,
});

export default connect(mapStateToProps)(Input);
