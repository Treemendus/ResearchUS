import React from 'react'
// import PropTypes from 'prop-types'

function Project(props){
    return (
        <div className="col-md-12">
            <div className="col-md-1 form-group">
                {/* Icon */}
            </div>
            <div className="col-md-3 form-group">
                {props.project.name}
            </div>
            <div className="col-md-3 form-group">
                {props.project.description}
            </div>
            <div className="col-md-3 form-group">
                {props.project.created_on}
            </div>
            <div className="col-md-1 form-group">
                {/* Edit */}
            </div>
            <div className="col-md-1 form-group">
                {/* Delete */}
            </div>
        </div>
    );
}



// User.propTypes = {
//     firstname: PropTypes.string.isRequired,
//     lastname: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
// }

export default Project