import PropTypes from 'prop-types';

import styles from './Container.module.scss';

const Container = function ({ children, ...props }) {
  return (
    <div
      className={styles.container}
      style={{
        display: 'inherit',
        alignItems: 'inherit',
        justifyContent: 'inherit',
      }}
      {...props}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
