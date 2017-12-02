import { combineReducers } from 'redux'
import * as actions from '../actions'

function projects(state = [], action) {
    switch (action.type) {
      case actions.ADD_PROJECT:
        return [
          ...state,
          {
            name: action.text,
            description: action.description,
            created_on: action.created_on
          }
        ]
      default:
        return state
    }
  }

const projectReducers = combineReducers({
    projects
});

export default projectReducers