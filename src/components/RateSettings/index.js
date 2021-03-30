import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  saveCustomeExchange,
  handleCustomeExchangeInput,
} from "../../redux/ActionCreators";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const RateSettings = () => {
  const dispatch = useDispatch();
  const customExchangeRate = useSelector((state) => state.customExchangeRate);
  const isCustomSet = useSelector((state) => state.isCustomSet);

  const valueValidator = (val) => {
    const numberValue = Number(val);
    const isNumber = !isNaN(numberValue);
    const isNumberFinite = isFinite(numberValue);
    return isNumber && isNumberFinite;
  };

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
    <>
      <FormGroup row className="container">
        <FormControlLabel
          control={
            <Checkbox
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
    </>
  );
};

export default RateSettings;
