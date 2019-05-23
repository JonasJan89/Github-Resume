import React from 'react';
import PropTypes from 'prop-types';
import GithubForm from './GithubForm.jsx';

const Header = ({ handleSubmit }) => {
  return (
    <div className='header'>
      <h1>Welcome to Jonas' Github Résumé Generator!</h1>
      <p>If you want to have a fast overview of your repositories, type in your Github username and click on generate.</p>
      <GithubForm handleSubmit={handleSubmit} />
    </div>
  );
}

Header.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Header;
