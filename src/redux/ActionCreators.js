export const saveCustomeExchange = (payload) => ({
  type: "SAVE_CUSTOM_EXCHANGE_RATE",
  payload,
});

export const handleCustomeExchangeInput = (payload) => ({
  type: "HANDLE_CUSTOM_EXCHANGE_RATE",
  payload,
});

export const handleConvertationInput = (payload) => ({
  type: "CONVERTATION_INPUT",
  payload,
});

export const setConvertTo = (payload) => ({
  type: "SET_CONVERT_TO",
  payload,
});

export const getResult = (payload) => ({
  type: "GET_RESULT",
  payload,
});

export const getDefaultCurrency = (payload) => ({
  type: "GET_DEFAULT_CURRENCY",
  payload,
});
