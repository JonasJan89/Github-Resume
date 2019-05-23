import React from 'react';
import PropTypes from 'prop-types';

const GithubRepos = ({ githubRepos }) => {
  return (
    <div className='github-repos'>
      {githubRepos.length > 0 &&
        <div className='github-repos__wrapper'>
          <h2 className='github-repos__title'>Repositories:</h2>
          <div className='github-repos__repositories'>
            {githubRepos.map((repro) => {
              return (
                <div className='github-repos__repository' key={repro.id}>
                  <div className='github-repos__repository-name'>{repro.name}</div>
                  <div className='github-repos__repository-language'>{repro.language}</div>
                </div>
              )
            })}
          </div>
        </div>
      }
      {githubRepos.length <= 0 &&
        <div className='github-repos__no-repos'>
          Sorry, this user does not have repositories.
        </div>
      }
    </div>
  )
};

GithubRepos.propTypes = {
  githubRepos: PropTypes.array.isRequired,
};

export default GithubRepos;
