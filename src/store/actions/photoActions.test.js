import configureStore from 'redux-mock-store'

import * as actions from './photoActions'

const mockStore = configureStore()
const store = mockStore()

describe('actions', () => {
    beforeEach(() => {
        store.clearActions()
    })

    describe('openCamera', () => {
        test('dispatches the corrent action and payload', () => {
            const expectedActions = [
                {
                    type: 'OPEN_CAMERA',
                    isCameraOpen: true
                }
            ]
    
            store.dispatch(actions.openCamera())
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    describe('selectAlbumHandler', () => {
        test('dispatches the corrent action and payload', () => {
            const expectedActions = [
                {
                    type: 'SELECT_ALBUM',
                    selectedAlbumName: 'cropname'
                }
            ]
    
            store.dispatch(actions.selectAlbumHandler('cropname'))
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    describe('openImageModal', () => {
        test('dispatches the corrent action and payload', () => {
            const expectedActions = [
                {
                    type: 'OPEN_IMAGE_MODAL',
                    isImageModalOpen: true,
                    imgModalSrc: 'base64'
                }
            ]
    
            store.dispatch(actions.openImageModal('base64'))
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

