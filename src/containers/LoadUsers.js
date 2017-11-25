import React from 'react'
import { connect } from 'react-redux'

let LoadUsers = ({ dispatch }) => {
    let input 
    return (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault()
            //   if (!input.value.trim()) {
            //     return
            //   }
            //   dispatch(addTodo(input.value))
            //   input.value = ''
            }}
          >
            {/* <input
              ref={node => {
                input = node
              }}
            /> */}
            <button type="submit">
              Get Users
            </button>
          </form>
        </div>
      )
}

// componentWillMount() {
//   this.props.dispatch(getUsers()); // dispatch like you usually do
// }

LoadUsers = connect()(LoadUsers)

export default LoadUsers