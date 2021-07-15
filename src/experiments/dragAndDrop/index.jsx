import React, { useState } from "react";
import { INIT_DATA } from "./utils";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { StyledWrapper, StyledColumnList, StyledItemCard } from "./styles";

const Wrapper = () => {
    const [pathway, setPathway] = useState({ ...INIT_DATA });

    const handleOnDragEnd = (result) => {
        const { destination, source, draggableId, type } = result;

        //1. Dragging a full section
        if (type === "section") {
            const clonedSections = JSON.parse(JSON.stringify(pathway.sections));
            //remove dragged section
            const remainingSections = clonedSections.splice(source.index, 1);
            //add dragged section in new position
            clonedSections.splice(destination.index, 0, ...remainingSections);
            setPathway((prevState) => {
                return {
                    ...pathway,
                    sections: clonedSections
                };
            });
        }

        //2. Dragging an item in a section within the same section

        //3. Dragging an item in a section to another section
    };

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable type="section" droppableId="sections">
                {(provided) => {
                    return (
                        <StyledWrapper>
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {pathway.sections.map((section, i) => {
                                    return (
                                        <div>
                                            <ColumnList items={section} position={i} />
                                        </div>
                                    );
                                })}

                                {provided.placeholder}
                            </div>
                        </StyledWrapper>
                    );
                }}
            </Droppable>
        </DragDropContext>
    );
};

export default Wrapper;

function ColumnList({ items, position }) {
    return (
        <Draggable draggableId={items.sectionId} index={position}>
            {(provided) => {
                return (
                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <StyledColumnList>
                            <Droppable droppableId={items.sectionId} type="item">
                                {(provided) => {
                                    return (
                                        <div {...provided.droppableProps} ref={provided.innerRef}>
                                            {items.contents.map((item, i) => {
                                                return (
                                                    <div style={{ marginBottom: "15px" }} key={i}>
                                                        <ItemCard text={item.text} id={item.id} position={i} />
                                                    </div>
                                                );
                                            })}

                                            {provided.placeholder}
                                        </div>
                                    );
                                }}
                            </Droppable>
                        </StyledColumnList>
                    </div>
                );
            }}
        </Draggable>
    );
}

function ItemCard({ text, id, position }) {
    return (
        <Draggable draggableId={id} index={position}>
            {(provided) => {
                return (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <StyledItemCard>{text}</StyledItemCard>
                    </div>
                );
            }}
        </Draggable>
    );
}
