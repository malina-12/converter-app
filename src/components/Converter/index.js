import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, FormGroup, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  handleConvertationInput,
  setConvertTo,
  getResult,
  getDefaultCurrency,
} from "../../redux/ActionCreators";
import { numberValidator } from '../../utils';

import "./styles.css";

const Converter = () => {
  const dispatch = useDispatch();
  const {customExchangeRate, convertationInput, selectedCurrency, defaultCurrency, isCustomSet, result} = useSelector((state) => state);

  const convertCurrency = () => {
    if (convertationInput && selectedCurrency) {
      const result = Number(convertationInput) / Number(selectedCurrency);
      dispatch(getResult(result));
    }
  };

  const handleEnterRate = (e) => {
    const currentValue = e.target.value;
    if (numberValidator(currentValue)) {
      dispatch(handleConvertationInput(e.target.value));
    }
  };

  const getCurrency = async () => {
    const url =
      "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
    const response = await fetch(url);
    const currency = await response.json();
    const USDCurrency = currency.filter((el) => el.ccy === "USD")[0]?.sale;
    if (USDCurrency.length) {
      dispatch(getDefaultCurrency(USDCurrency));
      dispatch(setConvertTo(USDCurrency));
    }
  };

  useEffect(() => {
    getCurrency();
  }, []);

  useEffect(() => {
    if (isCustomSet && customExchangeRate) {
      dispatch(setConvertTo(customExchangeRate));
      convertCurrency();
    } else {
      dispatch(setConvertTo(defaultCurrency));
      convertCurrency();
    }
  }, [customExchangeRate, dispatch, isCustomSet, convertationInput]);

  return (
    <div className="container">
      <div className="form">
        <h2 className="form-header">{isCustomSet ? 'Currency converter' : 'Currency converter to USD'}</h2>
        <FormGroup row>
          <TextField
            label="UAH"
            variant="outlined"
            value={convertationInput}
            onChange={handleEnterRate}
          />
        </FormGroup>

          <div className="result">
            {convertationInput && result && `${result}`}
            {convertationInput && result && !isCustomSet && ' USD'}
          </div>
      </div>

      <Link to="/settings">
        <Button variant="outlined" color="primary">
          Go to settings page
        </Button>
      </Link>
    </div>
  );
};

export default Converter;
