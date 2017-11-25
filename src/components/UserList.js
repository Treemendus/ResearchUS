import React from 'react'
import PropTypes from 'prop-types'
import User from './User'

class UserList extends React.Component {
  constructor(props){
    super(props);
    this.state = {users: []}

    this.fetchUsers = this.fetchUsers.bind(this);
  }
  
  // componentDidMount() {
  //   fetchUsers().then(response => {
  //     this.setState({
  //       users: response.users
  //     });
  //   })
  // }

  fetchUsers(){
    fetch("http://localhost:5000/users")
      .then(function(response) {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          var error = new Error(response.statusText)
          error.response = response
          throw error
        }
    })
    .then((body) => {
      this.setState({
        users: body
      });
    });
  }

  

  render() {
    return (
      <div>
        <div className="col-md-12 form-group">
          <button onClick={this.fetchUsers}>Load Users</button>
        </div>
        <div className="col-md-12 form-group">
          {this.state.users.map(function(u, i){
            return <User user={u} key={i}  />;
          })}
        </div>
      </div>
    );
  }
}

// UserList.propTypes = {
//   users: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       firstname: PropTypes.string.isRequired,
//       lastname: PropTypes.string.isRequired,
//       email: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired
// }

export default UserList