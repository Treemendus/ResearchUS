import React from 'react'
// import PropTypes from 'prop-types'
import Project from './Project'
// import AddProject from './AddProject'

class ProjectList extends React.Component {
  constructor(props){
    super(props);
    this.state = {projects: []}

    this.fetchProjects = this.fetchProjects.bind(this);
    // this.addProject = this.addProject.bind(this);
  }
  
  fetchProjects(){
    fetch("http://localhost:5000/projects")
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
        projects: body
      });
    });
  }

//   addProject(){
//       alert('test');
//   }

  render() {
    return (
      <div>
        <div className="col-md-12 form-group">
          <button onClick={this.fetchProjects}>Load Projects</button>
        </div>
        <div className="col-md-12 form-group">
          {this.state.projects.map(function(p, i){
            return <Project project={p} key={i}  />;
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

export default ProjectList