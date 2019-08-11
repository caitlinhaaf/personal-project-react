export const fetchGitData = () => {
  return (dispatch) => {
    fetch(`https://api.github.com/users/${this.state.searchID}/events`)
      .then(res => {
        const status = res.status;
        if (status === 200) return res.json();
        else if(status === 404) throw new Error("Invalid user ID - try another name.");
        else throw new Error("Server not found - please try again later.");
      })
      .then(
        result => {
          // this.setState(setEventData(result))
          dispatch({
            type: "SET_EVENTS",
            payload: result
          })
        },
        error => {
          // this.setState(setErrorState(error.message))
          dispatch({
            type: "EVENTS_ERROR",
            payload: error.message
          })
        }
      );
  }
}

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

export const searchIdUpdate = searchTxt => {
    console.log("UPDATING SEARCH ID", searchTxt)
    return {
      type: "SEARCH_ID_UPDATE",
      payload: searchTxt
    }
}

export const setEventsLoading = () => (
  {
    type: "SEARCH_EVENTS_LOADING"
  }
)

