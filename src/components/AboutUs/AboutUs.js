import Profile from "../Profile/Profile";
import React from "react";

class AboutUs extends React.Component {
    constructor(props){
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("Parent componentDidMount");
    }
    render(){
        console.log("Parent render");
        return (
            <div>
                <h1>About Us</h1>
                <div>This is a food orderng app sample about page.</div>
                <Profile name="Harikrishnan Soman" />
            </div>
        )
    }
}

export default AboutUs;