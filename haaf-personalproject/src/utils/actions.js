// functions to mimick action creators in Redux
// will make for a clean transition to Redux
import {isPullReqType, isForkType} from './dataTransform.utils'
import {isTextFieldPopulated} from './helpers.utils'

export const setEventData = data => (
    {
    events: data.filter( event => (
      isPullReqType(event.type) || isForkType(event.type)
    )),
    hasError: false,
    errorMsg: "",
    searchVisible: false,
    isLoading: false,
  }
)

export const setErrorState = errorMsg => (
    {
    hasError: true,
    errorMsg: errorMsg,
    isLoading: false,
  }
)

export const setNewSearch = () => (
    {
        searchVisible : true, 
        pullReqEvents: [],
        forkEvents: [],
        searchID: "",
        submitDisable: true
      }
)

export const searchIdUpdate = searchTxt => (
    {
        searchID: searchTxt,
        submitDisable: !isTextFieldPopulated(searchTxt)
      }
)