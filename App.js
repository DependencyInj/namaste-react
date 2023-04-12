
import React from 'react';
import ReactDOM from 'react-dom';


const jsxHeading = <h1 id="headin">React and Akshay saini is amazing</h1>;

const FunctionalHeading = () => {
    return (
        <div>
            <h1>
                Namaste React fucntional component.🚀
            </h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalHeading/>);