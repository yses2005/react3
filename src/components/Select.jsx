import PropTypes from "prop-types";
import classnames from "classnames";

function Select({ name, disabled, className, options, value }) {
    return (
        <select
            name={name}
            disabled={disabled}
            className={className}
            value={value}
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