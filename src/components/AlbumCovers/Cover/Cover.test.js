import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Cover from './Cover'

configure({adapter: new Adapter()})

describe('<Cover />', () => {
    let wrapper
    const mockProps = {
        cropName: 'Romaine Butter',
        clickHandler: ()=>{},
        selectedAlbumName: 'Romaine Butter'
    }

    beforeEach(() => {
        wrapper = shallow(<Cover {...mockProps}/>)
    })

    test('should include the text "Romaine Butter"', () => {
        expect(wrapper.text()).toEqual("Romaine Butter");
    })

    test('should have the main class "album-covers--list--item"', () => {
        expect(wrapper.find('.album-covers--list--item')).toHaveLength(1)
    })

    test('should have the class "romaine"', () => {
        expect(wrapper.find('.romaine')).toHaveLength(1)
    })
  })