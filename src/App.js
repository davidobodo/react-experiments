import logo from "./logo.svg";
import "./App.css";

import HorizontalVirtualizedList from "./experiments/HorizontalVirtualizedList";
import DragAndDrop from "./experiments/dragAndDrop/index";
import Autocomplete2 from "./experiments/autocomplete/Autocomplete2";

function App() {
    return (
        <div className="App">
            {/* <HorizontalVirtualizedList /> */}
            {/* <DragAndDrop /> */}
            <Autocomplete2 />
        </div>
    );
}

export default App;
