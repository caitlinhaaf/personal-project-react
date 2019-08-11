import React from 'react'
import testRenderer from 'react-test-renderer'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Button from '../components/button'

describe('button component', () => {
    it('renders an enabled button', () => {
      const button = testRenderer.create(
        <Button>
            Button Text
        </Button>
        )
      expect(button.toJSON().children).toStrictEqual(["Button Text"])
      expect(button.toJSON().props.className).toStrictEqual("button")
    })

    it('fires a click event', () => {
      const mockClickEvt = jest.fn();
      const button = Enzyme.shallow((<Button clickEvt={mockClickEvt}>Button Text</Button>));
      button.find('button').simulate('click');
      expect(mockClickEvt.mock.calls.length).toEqual(1);
    })

    it('renders an disabled button', () => {
        const button = testRenderer.create(
          <Button disabled={true}>
              Button Text
          </Button>
          )
    
        expect(button.toJSON().children).toStrictEqual(["Button Text"])
        expect(button.toJSON().props.className).toStrictEqual("button disabled")
      })

  })