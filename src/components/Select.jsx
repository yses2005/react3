import PropTypes from "prop-types";
import classnames from "classnames";

function Select({ name, disabled, className, options }) {
    return (
        <select
            name={name}
            disabled={disabled}
            className={className}
        >
            {
                options.map((option) => (
                    <option value={option}>
                        {option}
                    </option>
                ))
            }
        </select>
    );
  }

Select.propTypes = {
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    options: PropTypes.array,
};

Select.defaultProps = {
    name: "Select",
    disabled: false,
    className: null,
    options: [],
  };
  
export default Select;