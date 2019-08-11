import React from 'react'
import testRenderer from 'react-test-renderer'

import SearchForm from '../components/searchForm'

describe('search form component', () => {

    it('renders a search form with text input and button components', () => {
      const form = testRenderer.create(<SearchForm />)
      expect(form.toJSON().children.length).toStrictEqual(2)
    })

  })