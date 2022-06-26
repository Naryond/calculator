import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const Square = (props) => {
  const handleClick = (i) => {
    props.value(i);
  };

  return <button className="button" onClick={handleClick}></button>;
};

Square.propTypes = {
  value: PropTypes.func,
};
export default Square;
