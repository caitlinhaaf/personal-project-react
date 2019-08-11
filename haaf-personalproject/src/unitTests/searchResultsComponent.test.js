import React from 'react'
import testRenderer from 'react-test-renderer'

import SearchResults from '../components/searchResults'

describe('Search Results', () => {

    it('renders a header, back button, and 2 events lists', () => {
      const results = testRenderer.create(<SearchResults />)
      expect(results.toJSON().children.length).toStrictEqual(4)
    })

  })