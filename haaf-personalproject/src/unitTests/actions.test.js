import {setErrorState, setEventData, setNewSearch, searchIdUpdate, setEventsLoading} from '../utils/actions'
import {testData} from './dummyGitData'

const {events, prAndForkEventsOnly} = testData


describe('setting error state', () => {
    it('sets error message contents and returns updated state', () => {
      const msg = "There has been an error"
      expect(setErrorState(msg)).toStrictEqual({
        hasError: true,
        errorMsg: "There has been an error",
        isLoading: false,
      })
    })
})
  
describe('setting event data', () => {
    it('sends events data into state', () => {
        expect(setEventData(events)).toStrictEqual(
            {
                events: prAndForkEventsOnly, 
                hasError: false,
                errorMsg: "",
                searchVisible: false,
                isLoading: false,
            }
        )
    })
})

describe('setting new search', () => {
    it('clears search data from state, resets initial state', () => {
        expect(setNewSearch()).toStrictEqual(
            {
                searchVisible : true, 
                pullReqEvents: [],
                forkEvents: [],
                searchID: "",
                submitDisable: true
              }
        )
    })
})


describe('updating search ID', () => {

    it('updates state with user string, enables submit button', () => {
        expect(searchIdUpdate("NewID")).toStrictEqual(
            {
                searchID: "NewID",
                submitDisable: false
            }
        )
    })

    it('updates state with empty user string, disables submit button', () => {
        expect(searchIdUpdate("")).toStrictEqual(
            {
                searchID: "",
                submitDisable: true
            }
        )
    })
})

describe('set event loading state', () => {
    it('sets loading state to true', () => {
        expect(setEventsLoading()).toStrictEqual({ isLoading: true})
    })
})



