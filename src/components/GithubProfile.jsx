import React from 'react';
import PropTypes from 'prop-types';

const GithubProfile = ({ githubProfile }) => {
  const { avatar_url, name, login } = githubProfile;
  console.log(githubProfile);
  return (
    <div className='github-profile'>
      <div className='github-profile__img-wrapper'>
        <img
          className='github-profile__img'
          src={avatar_url}
          alt={name}
        />
      </div>
      <div className='github-profile__username'>
        {login}
      </div>
    </div>
  )
};

GithubProfile.propTypes = {
  githubProfile: PropTypes.object.isRequired,
};

export default GithubProfile;
