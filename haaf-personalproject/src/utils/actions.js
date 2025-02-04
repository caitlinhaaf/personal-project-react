export const fetchGitData = (userID) => (
  (dispatch) => {
    fetch(`https://api.github.com/users/${userID}/events`)
      .then(res => {
        const status = res.status;
        if (status === 200) return res.json();
        else if(status === 404) throw new Error("Invalid user ID - try another name.");
        else throw new Error("Server not found - please try again later.");
      })
      .then(
        result => {
          dispatch(setEventData(result))
        },
        error => {
          dispatch(setErrorState(error.message))
        }
      );
  }
)

export const setEventData = data => (
  {
    type: "SET_EVENTS", 
    payload: data
  }
)

export const setErrorState = errorMsg => (
  {
    type: "EVENTS_ERROR",
    payload: errorMsg
  }
)

export const setNewSearch = () => (
    {
      type: "SET_NEW_SEARCH",
    }
)

export const searchIdUpdate = searchTxt => (
    {
      type: "SEARCH_ID_UPDATE",
      payload: searchTxt
    }
)

export const setEventsLoading = () => (
  {
    type: "SEARCH_EVENTS_LOADING"
  }
)

