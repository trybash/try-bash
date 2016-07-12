import * as actions from 'src/vuex/actions'

describe('actions', () => {
  describe('sendCommand', () => {
    it('should dispatch command', () => {
      const dispatch = sinon.spy()
      actions.sendCommand({ dispatch }, 'Command')
      expect(dispatch.calledOnce).to.be.true
      expect(dispatch.calledWith('SEND_COMMAND', 'Command')).to.be.true
    })
  })

  describe('updateTask', () => {
    it('should dispatch new task', () => {
      const dispatch = sinon.spy()
      actions.updateTask({ dispatch }, 'New Task')
      expect(dispatch.calledOnce).to.be.true
      expect(dispatch.calledWith('UPDATE_TASK', 'New Task')).to.be.true
    })
  })

  describe('reset', () => {
    it('should dispatch reset', () => {
      const dispatch = sinon.spy()
      actions.reset({ dispatch })
      expect(dispatch.calledOnce).to.be.true
      expect(dispatch.calledWith('RESET')).to.be.true
    })
  })

  describe('nextSection', () => {
    it('should start next section', () => {
      const dispatch = sinon.spy()
      const state = {
        currentLesson: 0,
        currentSection: 1
      }
      actions.nextSection({dispatch, state})
      expect(dispatch.calledOnce).to.be.true
      expect(dispatch.calledWith('START_SECTION', 0, 2))
    })
  })
})
