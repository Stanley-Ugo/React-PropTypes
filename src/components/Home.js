import React, { Component } from 'react';
import Profile from './Profile';

class HomeComponent extends Component{

    state = {
        name:'Francis',
        lastname:'Jones',
        age:23,
        hobbies:['running','jumping'],
        spanish:false,
        message(){console.log('hello')},
        car:{brand:'Ford',model:"Mustang"},
        mother:'Martha'
    }

    render(){
        return(
            <>
                <Profile {...this.state}/>
            </>

        )
    }
}


export default HomeComponent;