import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "components/Input.module.scss";

function Input({ type, name, placeholder, onChange, className }) {
  const classes = classnames(styles.input, className);

  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className={classes}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  placeholder: null,
  className: null,
};

export default Input;
