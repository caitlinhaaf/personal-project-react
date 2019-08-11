import { combineReducers } from 'redux'

import {isPullReqType, isForkType} from './dataTransform.utils'
import {isTextFieldPopulated} from './helpers.utils'

const initialState = {
  events: [],
  searchVisible: true,
  searchID: "", 
  submitDisable: true,
  isLoading: false,
  hasError: false,
  errorMsg: ""
}

// REDUCER
const gitSearchReducer = (state=initialState, action) => {
  switch (action.type) {

    case "SET_EVENTS": {
      const eventData = action.payload;
      return {...state, 
        events: eventData.filter( event => (
          isPullReqType(event.type) || isForkType(event.type)
        )),
        hasError: false,
        errorMsg: "",
        searchVisible: false,
        isLoading: false,
      };
    }

    case "EVENTS_ERROR": {
      return {...state, 
        hasError: true,
        errorMsg: action.payload,
        isLoading: false,
      }
    }

    case "SET_NEW_SEARCH": {
      return{...state,
        searchVisible : true, 
        pullReqEvents: [],
        forkEvents: [],
        searchID: "",
        submitDisable: true
      }
    }

    case "SEARCH_ID_UPDATE": {
      return{...state,
        searchID: action.payload,
        submitDisable: !isTextFieldPopulated(action.payload)
      }
    }

    case "SEARCH_EVENTS_LOADING": {
      return {...state, isLoading: true}
    }


    default: {
      return state;
    }

  }
};

const rootReducer = combineReducers({
    search: gitSearchReducer
});

export default rootReducer