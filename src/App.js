import logo from "./logo.svg";
import "./App.css";

import HorizontalVirtualizedList from "./experiments/HorizontalVirtualizedList";
import DragAndDrop from "./experiments/dragAndDrop/index";
import Autocomplete2 from "./experiments/autocomplete/Autocomplete2";
import TwoColumns from "./experiments/twoColumns/TwoColumns";
// import CollectionVirtualized from "./experiments/collectionVirtualizedList/CollectionVirtualizedList";
// import CollectionVirtualized from "./experiments/collectionVirtualizedList/one";
import Masonry from "./experiments/masonry/index";
import ImageExperiment from "./experiments/imageExperiment/imageExperiment";

function App() {
    const handleScroll = () => {
        console.log("scrolling");
    };
    return (
        <div className="App" onScroll={handleScroll}>
            {/* <HorizontalVirtualizedList /> */}
            {/* <DragAndDrop /> */}
            {/* <Autocomplete2 /> */}
            <TwoColumns />
            {/* <CollectionVirtualized /> */}
            {/* <Masonry /> */}
            {/* <ImageExperiment /> */}
        </div>
    );
}

export default App;
