import React from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            name:"",
            userName:"",
            imgUrl:"",
        }

        console.log("child Constructing Profile");
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/DependencyInj');
        const json = await data.json();
        this.setState({
            name: json.name,
            userName: json.login,
            imgUrl: json.avatar_url
        })
        console.log("json", json);
        console.log("child Mounting Profile...");
    }

    render() {
        console.log("child Rendering Profile...");
        return (
            <div>
                <h1>Profile of {this.state.name}</h1>
                <h2>UserName: {this.state.userName}</h2>
                <img src={this.state.imgUrl}/>
                <button onClick={() => this.setState({
                    count: this.state.count + 1
                })}>Set count</button>
            </div>
        );
    }

    
}

export default Profile;