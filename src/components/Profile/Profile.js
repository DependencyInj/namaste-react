import React from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <h1>Profile of {this.props.name}</h1>
                <h2>Count: {this.state.count}</h2>
                <button onClick={() => this.setState({
                    count: this.state.count + 1
                })}>Set count</button>
            </div>
        );
    }
}

export default Profile;