import React from 'react';
import PropTypes from 'prop-types';

const FetchingError = ({ status, name }) => {
  return (
    <div className='fetching-error'>
       {status === 404 &&
         <div>{`Sorry, did not find a user named "${name}"`}</div>
       }
       {!(status === 404) &&
         <div>Ooops, something went wrong. Please try again later.</div>
       }
    </div>
  );
}

FetchingError.propTypes = {
  status: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default FetchingError;
