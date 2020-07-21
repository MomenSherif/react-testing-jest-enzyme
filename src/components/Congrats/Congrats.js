import React from 'react';
import PropTypes from 'prop-types'; // ES6

const Congrats = ({ success }) => {
  return (
    <div className='alert alert-success' data-test='component-congrats'>
      {success && 'Congraulations!'}
    </div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
