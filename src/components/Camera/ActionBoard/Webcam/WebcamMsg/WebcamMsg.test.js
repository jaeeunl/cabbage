import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WebcamMsg from './WebcamMsg'

configure({adapter: new Adapter()})

describe('<WebcamMsg />', () => {

    test('should render error message if cameraError is true', () => {
        const mockProps = {
            cameraError: true,
            currentSession: []
        }
        const wrapper = shallow(<WebcamMsg {...mockProps}/>)

        expect(wrapper.find('.camera--action--webcam--msg--error')).toHaveLength(1);
    })

    test('should render session length message if cameraError is false', () => {
        const mockProps = {
            cameraError: false,
            currentSession: []
        }
        const wrapper = shallow(<WebcamMsg {...mockProps}/>)

        expect(wrapper.find('.camera--action--webcam--msg--session-length')).toHaveLength(1);
    })
  })