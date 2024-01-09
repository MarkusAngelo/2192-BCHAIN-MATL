import React from "react";
import ChildComponent from "./ChildComponent";

// function ParentComponent() {
//     const dataToPass = "Hello from Parent!";
//     return (
//         <ChildComponent message={dataToPass} />
//     );
// }
// export default ParentComponent;

// CLASS PARENT COMPONENT

class ParentComponent extends React.Component {
    render() {
    const dataToPass = "Message from Class!";
    return (
        <ChildComponent message={dataToPass} />
        );
    }
}

export default ParentComponent;



