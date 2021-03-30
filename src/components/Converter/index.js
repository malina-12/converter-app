import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleConvertationInput,
  setConvertTo,
  getResult,
  getDefaultCurrency,
} from "../../redux/ActionCreators";
import { valueValidator } from '../../utils';
import { Button, FormGroup, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./styles.css";

const Converter = () => {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector((state) => state.selectedCurrency);
  const defaultCurrency = useSelector((state) => state.defaultCurrency);
  const convertationInput = useSelector((state) => state.convertationInput);
  const result = useSelector((state) => state.result);
  const customExchangeRate = useSelector((state) => state.customExchangeRate);
  const isCustomSet = useSelector((state) => state.isCustomSet);

  const convertCurrency = () => {
    if (convertationInput && selectedCurrency) {
      const result = Number(convertationInput) / Number(selectedCurrency);
      dispatch(getResult(result));
    }
  };

  const handleEnterRate = (e) => {
    const currentValue = e.target.value;
    if (valueValidator(currentValue)) {
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
        <h2 className="form-header">Currency converter</h2>
        <FormGroup row>
          <TextField
            label="UAH"
            variant="outlined"
            value={convertationInput}
            onChange={handleEnterRate}
          />
        </FormGroup>

        {convertationInput && result && (
          <div className="result">{`${result}` }</div>
        )}
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
