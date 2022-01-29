import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "components/FullscreenWrapper.module.scss";

function FullscreenWrapper({ children, centerHorizontally, centerVertically }) {
  const classes = classnames(
    styles.wrapper,
    centerHorizontally && styles.centerHorizontally,
    centerVertically && styles.centerVertically
  );
  return <div className={classes}>{children}</div>;
}

FullscreenWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  centerHorizontally: PropTypes.bool,
  centerVertically: PropTypes.bool,
};

FullscreenWrapper.defaultProps = {
  centerHorizontally: false,
  centerVertically: false,
};

export default FullscreenWrapper;
