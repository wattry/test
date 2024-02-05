import { useState, useMemo, useEffect } from 'react';
import { TextField, MenuItem, CircularProgress } from "@mui/material";
import PropTypes from 'prop-types';
import get from 'lodash/get';

/**
 * Props to apply to the MUI Select Input
 * All choices must have an id (used as the value) and a name used as a label
 * unless an alternative optionValue or optionText are provided
 * @typedef {object} props
 * @property {any[]} choices
 * @property {function} parse function to parse values before being provided to choices
 * @property {any} value required state value to be set when the onChange function is used
 * @property {function} onChange handle the state change when the drop down is changed
 * @property {string} id of the component
 * @property {boolean} [isLoading] will render loading icon when data is async
 * @property {string} label label to display and apply to the aria
 * @property {object} rest additional properties that will be passed down to the MUI TextField component
 */
export const SelectInput = (props) => {
  const {
    choices: defaultChoices,
    source,
    label,
    isLoading = false,
    parse,
    value,
    optionValue = 'id',
    optionText = 'name',
    onChange,
    variant ='standard',
    ...rest
  } = props;
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    if (defaultChoices?.length) {
      setChoices(parse ? defaultChoices.map(parse) : defaultChoices);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultChoices]);

  return useMemo(() => {
    const handleChange = (event) => {
      const selected = choices.find((choice) => choice.id === event.target.value);

      onChange(event.target.value, get(selected, optionText), selected);
    };

    return (<TextField
      InputProps={{ endAdornment: isLoading ? <CircularProgress /> : <></> }}
      select
      style={{ minWidth: `${label.length + 10}px` }}
      id={`${source}SelectInput`}
      label={label}
      name={source}
      value={value}
      aria-label={label}
      onChange={handleChange}
      variant='outlined'
      {...rest}
    >
      {isLoading ? [] : choices?.map((choice, i) => (
        <MenuItem
          key={i}
          value={get(choice, optionValue)}
        >
          {get(choice, optionText)}
        </MenuItem>
      ))}
    </TextField>)
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [choices, isLoading, value]
  );
};

SelectInput.propTypes = {
  choices: PropTypes.array.isRequired,
  parse: PropTypes.func,
  source: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func
}