import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AlbumCovers from './AlbumCovers'
import Cover from './Cover/Cover'

configure({adapter: new Adapter()})

describe('<AlbumCovers />', () => {
    let wrapper
    const mockProps = {
        crops: ['crop1', 'crop2', 'crop3', 'crop4', 'crop5'],
        clickHandler: () => {},
        photos: [],
        selectedAlbumName: 'romaine'
    }

    beforeEach(() => {
        wrapper = shallow(<AlbumCovers {...mockProps}/>)
    })

    it('should render 5 <Cover /> components when there are 5 types of crops', () => {
        expect(wrapper.find(Cover)).toHaveLength(5);
    })
  })