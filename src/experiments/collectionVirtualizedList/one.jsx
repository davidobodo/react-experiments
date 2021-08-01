import React from "react";
import { Collection, AutoSizer } from "react-virtualized";
import "react-virtualized/styles.css"; // only needs to be imported once
import "./styles.scss";

const GUTTER_SIZE = 3;
const CELL_WIDTH = 75;

// Collection data as an array of objects
const list = [
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
    { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 }

    // And so on...
];

function cellRenderer({ index, key, style }) {
    return (
        <div key={key} style={style}>
            <SampleCard name={list[index].name} />
        </div>
    );
}

function cellSizeAndPositionGetter({ index }) {
    // const datum = list[index];

    // return {
    //     height: datum.height,
    //     width: datum.width,
    //     x: datum.x * index,
    //     y: datum.y * index
    // };

    // const { list } = this.context;
    // const { columnCount } = this.state;

    const columnPosition = index % (10 || 1);
    const datum = list.get(index % list.length);

    // Poor man's Masonry layout; columns won't all line up equally with the bottom.
    const height = datum.size;
    const width = CELL_WIDTH;
    const x = columnPosition * (GUTTER_SIZE + width);
    const y = this._columnYMap[columnPosition] || 0;

    this._columnYMap[columnPosition] = y + height + GUTTER_SIZE;

    return {
        height,
        width,
        x,
        y
    };
}

const One = () => {
    return (
        <AutoSizer>
            {({ height, width }) => (
                <Collection
                    cellCount={list.length}
                    cellRenderer={cellRenderer}
                    cellSizeAndPositionGetter={cellSizeAndPositionGetter}
                    height={1000}
                    width={1000}
                />
            )}
        </AutoSizer>
    );
};

export default One;

function SampleCard({ name }) {
    return (
        <div className="card-box">
            {name}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et suscipit impedit natus nihil, itaque vitae. A
            fugit illum nulla praesentium optio culpa. Sint eius vitae assumenda quos. Labore, eaque officiis. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Et suscipit impedit natus nihil, itaque vitae. A fugit
            illum nulla praesentium optio culpa. Sint eius vitae assumenda quos. Labore, eaque officiis.
        </div>
    );
}
