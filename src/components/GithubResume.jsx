import React from 'react';
import PropTypes from 'prop-types';
import GithubRepos from './GithubRepos.jsx';
import GithubProfile from './GithubProfile.jsx';

const GithubResume = ({ githubProfile, githubRepos }) => {
  return (
    <div className='github-resume'>
      <div className='github-resume__wrapper'>
      <GithubProfile githubProfile={githubProfile} />
      <GithubRepos githubRepos={githubRepos} />
      </div>
    </div>
  )
};

GithubResume.propTypes = {
  githubRepos: PropTypes.array.isRequired,
  githubProfile: PropTypes.object.isRequired,
};

export default GithubResume;
