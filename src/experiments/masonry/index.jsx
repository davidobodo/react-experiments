import React, { useState, useRef, useEffect } from "react";
import { generateRandomList } from "./utils";
import { AutoSizer, Masonry, CellMeasurerCache, createMasonryCellPositioner, CellMeasurer } from "react-virtualized";
import "react-virtualized/styles.css";

const list = generateRandomList();
const Index = () => {
    const cache = useRef(
        new CellMeasurerCache({
            defaultHeight: 250,
            defaultWidth: 200,
            fixedWidth: true
        })
    );
    const [height, setHeight] = useState(600);
    const [overscanByPixels, setOverscanByPixels] = useState(0);
    const [columnWidth, setColumnWidth] = useState(200);
    const [gutterSize, setGutterSize] = useState(10);
    const [windowScrollerEnabled, setWindowScrollerEnabled] = useState(false);
    let columnCount = 1;
    const calculateColumnCount = (width) => {
        columnCount = Math.floor(width / (columnWidth + gutterSize));
    };

    const cellPositioner = createMasonryCellPositioner({
        cellMeasurerCache: cache.current,
        columnCount: columnCount,
        columnWidth: columnWidth,
        spacer: gutterSize
    });

    const masonryRef = useRef();

    const handleResize = ({ width }) => {
        calculateColumnCount(width);
        resetCellPositioner();
        masonryRef.current.recomputeCellPositions();
    };

    const resetCellPositioner = () => {
        cellPositioner.reset({
            columnCount: columnCount,
            columnWidth,
            spacer: gutterSize
        });
    };

    const cellRenderer = ({ index, key, parent, style }) => {
        const datum = list[index];

        return (
            <CellMeasurer cache={cache.current} index={index} key={key} parent={parent}>
                <div style={style} style={{ ...style, width: columnWidth }}>
                    <div
                        style={{
                            backgroundColor: datum.color,
                            borderRadius: "0.5rem",
                            height: datum.size * 3,
                            marginBottom: "0.5rem",
                            width: "100%",
                            fontSize: 20,
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        {index}
                    </div>
                </div>
            </CellMeasurer>
        );
    };

    const renderMasonry = (props) => {
        const { width, height } = props;

        return (
            <Masonry
                autoHeight={windowScrollerEnabled}
                cellCount={1000}
                cellMeasurerCache={cache.current}
                cellPositioner={cellPositioner}
                cellRenderer={cellRenderer}
                height={height}
                // overscanByPixels={overscanByPixels}
                ref={masonryRef}
                // scrollTop={scrollTop}
                width={width}
            />
        );
    };

    useEffect(() => {
        calculateColumnCount(window.innerWidth);
    }, []);

    const renderAutoSize = ({ height, scrollTop }) => {
        // console.log(height, "===IN RENDER AUTO SIZER");
        return (
            <AutoSizer
                disableHeight
                height={height}
                onResize={handleResize}
                // overscanByPixels={overscanByPixels}
                // scrollTop={scrollTop}
            >
                {({ width }) => renderMasonry({ width, height })}
            </AutoSizer>
        );
    };

    return <div>{renderAutoSize({ height })}</div>;
};

export default Index;
