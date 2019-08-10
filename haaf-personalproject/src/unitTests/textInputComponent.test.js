import React from 'react'
import testRenderer from 'react-test-renderer'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import TextInput from '../components/textInput'

describe('text input component', () => {

    it('renders default input', () => {
      const input = testRenderer.create(
        <TextInput />
        )
      expect(input.toJSON().children.length).toEqual(1)
      expect(input.toJSON().children[0].props.className).toEqual("textInput")
    })

    it('renders an error state input', () => {
        const input = testRenderer.create(
            <TextInput 
                hasError={true} 
                errorMsg="Error Message"/>
            )
        expect(input.toJSON().children.length).toEqual(2)
        expect(input.toJSON().children[0].props.className).toEqual("textInput error")
        expect(input.toJSON().children[1].children).toStrictEqual(["Error Message"])
    })

    it('fires an onchange event', () => {
        const mockUpdateEvt = jest.fn();
        const input = Enzyme.shallow((
            <TextInput updateEvent={mockUpdateEvt}/>
        ));
        input.find('input').simulate('change');
        expect(mockUpdateEvt.mock.calls.length).toEqual(1);
    })

  })