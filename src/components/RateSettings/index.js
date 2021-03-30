import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@material-ui/core";
import {
  saveCustomExchange,
  handleCustomExchangeInput,
} from "../../redux/ActionCreators";
import { numberValidator } from '../../utils';


import "./styles.css";

const RateSettings = () => {
  const dispatch = useDispatch();
  const {customExchangeRate, isCustomSet} = useSelector((state) => state);

  const handleSelectRate = (e) => {
    dispatch(handleCustomExchangeInput(e.target.checked));
  };

  const handleEnterRate = (e) => {
    const currentValue = e.target.value;
    if (numberValidator(currentValue)) {
      dispatch(saveCustomExchange(String(e.target.value)));
    }
    if (!currentValue.length) {
      dispatch(saveCustomExchange(''))
    }
  };

  return (
    <div className='container'>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
            className=''
              checked={isCustomSet}
              onChange={handleSelectRate}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          }
          label="Use custom exchange rate"
        />
        <TextField
          label="Custom exchange rate"
          variant="outlined"
          value={customExchangeRate}
          onChange={handleEnterRate}
          disabled={!isCustomSet}
        />
      </FormGroup>
      <Link to="/">
        <Button variant="outlined" color="primary">
          Go to converter page
        </Button>
      </Link>
    </div>
  );
};

export default RateSettings;
