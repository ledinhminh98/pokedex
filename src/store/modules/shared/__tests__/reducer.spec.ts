import { Creators as SharedActions } from '../actions'
import sharedReducer, { INITIAL_STATE_SHARED } from '../reducer'

describe('Reucer Shared', () => {
  it('HANDLE MODAL', () => {
    const state = sharedReducer(
      INITIAL_STATE_SHARED,
      SharedActions.handleModal(true),
    )

    expect(state).toStrictEqual({
      modal: true,
    })
  })
})
