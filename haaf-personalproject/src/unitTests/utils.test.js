import {isPullReqType, isForkType} from '../utils/dataTransform.utils'
import {isTextFieldPopulated} from '../utils/helpers.utils'
import {testData} from './dummyGitData'

const {events, numberForkEvents, numberPullReqEvents} = testData

describe('pull request event type check', () => {
    it('returns only pull request events', () => {
      const pullRequstEvents = events.filter(event => isPullReqType(event.type))
      expect(pullRequstEvents.length).toStrictEqual(numberPullReqEvents)
    })
})

describe('fork event type check', () => {
    it('returns only fork events', () => {
        const forkEvents = events.filter(event => isForkType(event.type))
        expect(forkEvents.length).toStrictEqual(numberForkEvents)
    })
})

describe('text input check', () =>{
    it('returns true if string contains chars', () =>{
        const str = "Check"
        expect(isTextFieldPopulated(str)).toStrictEqual(true)
    })
    it('returns false if string provided is empty', () =>{
        const str = ""
        expect(isTextFieldPopulated(str)).toStrictEqual(false)
    })
})