import { Grid } from "react-virtualized";

const height = 220;
const listWidth = window.innerWidth;

const list = [...new Array(1000)].map((_, idx) => idx);

const cellRenderer = ({ columnIndex, style, key }) => {
    const item = list[columnIndex];
    return (
        <div key={key} style={style}>
            <div style={{ width: "200px", height: "200px", backgroundColor: "red" }}></div>
            <div style={{ paddingRight: "20px" }}></div>
        </div>
    );
};

function App() {
    const handleGoBack = () => {};

    const handleGoForward = () => {};
    return (
        <div style={{ border: "2px solid #000", margin: "50px", overflow: "hidden" }}>
            <button onClick={handleGoBack}>Back</button>
            <button onClick={handleGoForward}>Forward</button>
            <Grid height={height} columnCount={list.length} columnWidth={220} rowCount={1} rowHeight={height} cellRenderer={cellRenderer} width={listWidth} />;
        </div>
    );
}

export default App;
