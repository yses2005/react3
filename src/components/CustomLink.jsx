import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "components/CustomLink.module.scss";

function CustomLink({ to, label }) {
  return (
    <Link to={to} className={styles.link}>
      {label}
    </Link>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CustomLink;
