export const fetchGitData = (userID) => {
  console.log("DISPATCHING FETCH!")
  console.log(this)
  return (dispatch) => {
    fetch(`https://api.github.com/users/${userID}/events`)
      .then(res => {
        const status = res.status;
        if (status === 200) return res.json();
        else if(status === 404) throw new Error("Invalid user ID - try another name.");
        else throw new Error("Server not found - please try again later.");
      })
      .then(
        result => {
          dispatch({
            type: "SET_EVENTS",
            payload: result
          })
        },
        error => {
          dispatch({
            type: "EVENTS_ERROR",
            payload: error.message
          })
        }
      );
  }
}

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

