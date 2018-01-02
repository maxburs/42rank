import * as ReactDOM from 'react-dom';
import * as React from 'react';
const container = document.getElementById("container");

function HelloWorld(props: {}) {
    return <div>hello world</div>;
}

ReactDOM.render(
    <HelloWorld />,
    container
);

