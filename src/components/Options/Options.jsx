import PropTypes from 'prop-types';

import styles from './Options.module.css';

function Options({ updateFeedback, totalFeedback }) {
  return (
    <>
      <button className={styles.btn} onClick={() => updateFeedback('good')}>
        Good
      </button>

      <button className={styles.btn} onClick={() => updateFeedback('neutral')}>
        Neutral
      </button>

      <button className={styles.btn} onClick={() => updateFeedback('bad')}>
        Bad
      </button>

      {totalFeedback ? (
        <button className={styles.btn} onClick={() => updateFeedback('reset')}>
          Reset
        </button>
      ) : null}
    </>
  );
}

Options.propTypes = {
  updateFeedback: PropTypes.func,
  totalFeedback: PropTypes.number,
};

export default Options;
