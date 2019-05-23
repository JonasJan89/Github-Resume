import React from 'react';
import PropTypes from 'prop-types';

const GithubForm = ({ handleSubmit }) => {
  return (
    <form className='github-form' onSubmit={handleSubmit}>
      <input className='github-form__input' type='text' placeholder='Github username' />
      <button  className='btn github-form__btn' type='submit'>Generate</button>
    </form>
  );
}

GithubForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default GithubForm;
