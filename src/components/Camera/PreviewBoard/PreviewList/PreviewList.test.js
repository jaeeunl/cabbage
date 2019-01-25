import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PreviewList from './PreviewList'
import Screenshot from './Screenshot/Screenshot'

configure({adapter: new Adapter()})

describe('<PreviewList />', () => {
    let wrapper
    const mockProps = {
        currentSession: [{}, {}, {}],
        openImageModal: () => {}
    }

    beforeEach(() => {
        wrapper = shallow(<PreviewList {...mockProps} />)
    })

    test('should have 3 screenshots', () => {
        expect(wrapper.find(Screenshot)).toHaveLength(3)
    })
  })