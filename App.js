
import React from 'react';
import ReactDOM from 'react-dom';

const CompositeHeading = () => <h1>This is going to be a composite functional component !</h1>

const FunctionalHeading = () => {
    return (
        <>
            <div>
                <p>This is a parent</p>
                <CompositeHeading />
                <h1>
                    Namaste React fucntional component.🚀
                </h1>
            </div>
            <>
            <h1>Fragment inside a fragment</h1>
            </>
            <div>This is another parent</div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalHeading />);