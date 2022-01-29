import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "components/Button.module.scss";

function Button({ label, type, onClick, disabled, className }) {
  const classes = classnames(styles.button, className);

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  label: "Submit",
  type: "button",
  onClick: null,
  disabled: false,
  className: null,
};

export default Button;
