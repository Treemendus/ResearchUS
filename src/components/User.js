import React from 'react'
import PropTypes from 'prop-types'

function User(props) {
    return (
        <div className="col-md-12">
            <div className="col-md-4 form-group">
                {props.user.first_name}
            </div>
            <div className="col-md-4 form-group">
                {props.user.last_name}
            </div>
            <div className="col-md-4 form-group">
                {props.user.email}
            </div>
        </div>
    );
}



// User.propTypes = {
//     firstname: PropTypes.string.isRequired,
//     lastname: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
// }

export default User