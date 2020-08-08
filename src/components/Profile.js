import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfileComponent extends Component{

    render(){
        console.log(this.props)
        return(
            <>
               Profile
            </>
        )
    }

}

ProfileComponent.propTypes = {
    name: PropTypes.string,
    lastname: PropTypes.string,
    age: PropTypes.number,
    hobbies: PropTypes.array,
    spanish: PropTypes.bool,
    message: PropTypes.func,
    car: PropTypes.object,
    mother: PropTypes.string
}

export default ProfileComponent;