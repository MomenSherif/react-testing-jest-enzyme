import React from 'react';
import PropTypes from 'prop-types';

const GussedWords = ({ gussedWords }) => {
  return (
    <div data-test='component-gussed-words'>
      {gussedWords.length === 0 ? (
        <span data-test='gussed-instructions'>You must guess a word!</span>
      ) : (
        <div data-test='gussed-words'>
          <h3>Gussed Words</h3>
          <table className='table table-sm'>
            <thead className='thead-light'>
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {gussedWords.map(({ gussedWord, letterMatchCount }, i) => (
                <tr key={i} data-test='gussed-word'>
                  <td>{gussedWord}</td>
                  <td>{letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

GussedWords.propTypes = {
  gussedWords: PropTypes.arrayOf(
    PropTypes.shape({
      gussedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GussedWords;
