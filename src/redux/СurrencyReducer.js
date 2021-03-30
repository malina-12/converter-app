const initialState = {
  customExchangeRate: '',
  isCustomSet: false,
  selectedCurrency: '',
  convertationInput: '',
  defaultCurrency: '',
  result: null,
};

const cardsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SAVE_CUSTOM_EXCHANGE_RATE':
      return {...state, 
        customExchangeRate: action.payload
      }

    case 'HANDLE_CUSTOM_EXCHANGE_RATE':
      return {...state, 
        isCustomSet: action.payload
      }

    case 'CONVERTATION_INPUT':
      return {...state, 
        convertationInput: action.payload
      }

    case 'SET_CONVERT_TO':
      return {...state, 
        selectedCurrency: action.payload
      }

    case 'GET_RESULT':
      return {...state, 
        result: action.payload
      }

    case 'GET_DEFAULT_CURRENCY':
      return {...state, 
        defaultCurrency: action.payload
      }

    default:
      return state
   }
};

export default cardsReducer
