import React from 'react'
import testRenderer from 'react-test-renderer'

import Loader from '../components/loader'

describe('loader component', () => {

    it('renders an enabled button', () => {
      const loader = testRenderer.create(<Loader />)
      expect(loader.toJSON().children.length).toStrictEqual(1)
    })

  })