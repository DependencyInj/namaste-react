
import React from 'react';
import ReactDOM from 'react-dom';

const CompositeHeading = () => <h1>This is going to be a composite functional component !</h1>

const FunctionalHeading = () => {
    return (
        <div>
            <CompositeHeading/>
            <h1>
                Namaste React fucntional component.🚀
            </h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalHeading/>);