import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  saveCustomeExchange,
  handleCustomeExchangeInput,
} from "../../redux/ActionCreators";
import { valueValidator } from '../../utils';
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@material-ui/core";

import "./styles.css";

const RateSettings = () => {
  const dispatch = useDispatch();
  const customExchangeRate = useSelector((state) => state.customExchangeRate);
  const isCustomSet = useSelector((state) => state.isCustomSet);

  const handleSelectRate = (e) => {
    dispatch(handleCustomeExchangeInput(e.target.checked));
  };

  const handleEnterRate = (e) => {
    const currentValue = e.target.value;
    if (valueValidator(currentValue)) {
      dispatch(saveCustomeExchange(String(e.target.value)));
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
