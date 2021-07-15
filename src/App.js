import logo from "./logo.svg";
import "./App.css";

import HorizontalVirtualizedList from "./experiments/HorizontalVirtualizedList";
import DragAndDrop from "./experiments/dragAndDrop/index";

function App() {
    return (
        <div className="App">
            {/* <HorizontalVirtualizedList /> */}
            <DragAndDrop />
        </div>
    );
}

export default App;
