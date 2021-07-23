import React, { useState } from "react";
import { INIT_DATA } from "./utils";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { StyledWrapper, StyledColumnList, StyledItemCard } from "./styles";

const Wrapper = () => {
    const [pathway, setPathway] = useState({ ...INIT_DATA });

    const handleOnDragEnd = (result) => {
        const { destination, source, draggableId, type } = result;

        console.log(result, "THE RESULT");
        //---------------------------------------------------------------
        //1. Dragging a full section
        //---------------------------------------------------------------
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

            return;
        }
        //---------------------------------------------------------------
        //2. Dragging an item in a section within the same section
        //---------------------------------------------------------------
        if (source.droppableId === destination.droppableId) {
            //Get the active section
            const activeSection = pathway.sections.find((section) => {
                return section.sectionId === source.droppableId;
            });
            //Get the active section Index
            const activeSectionIndex = pathway.sections.findIndex((section) => {
                return section.sectionId === source.droppableId;
            });

            //Get moved item
            const movedItem = activeSection.contents[source.index];

            //Get full list
            const clonedContent = JSON.parse(JSON.stringify(activeSection.contents));

            //Remove moved item from current position in full list
            clonedContent.splice(source.index, 1);
            //Add moved item to new position in full list
            clonedContent.splice(destination.index, 0, movedItem);

            //Create new section to replace active section
            const modifiedMovedSection = {
                sectionId: activeSection.sectionId,
                contents: clonedContent
            };

            const clonedSections = JSON.parse(JSON.stringify(pathway.sections));
            clonedSections.splice(activeSectionIndex, 1);
            clonedSections.splice(activeSectionIndex, 0, modifiedMovedSection);

            setPathway((prevState) => {
                return {
                    ...pathway,
                    sections: clonedSections
                };
            });

            return;
        }
        //---------------------------------------------------------------
        //3. Dragging an item in a section to another section
        //---------------------------------------------------------------
        if (source.droppableId !== destination.droppableId) {
            const clonedSections = JSON.parse(JSON.stringify(pathway.sections));

            //Get source section
            const sourceSection = pathway.sections.find((section) => {
                return section.sectionId === source.droppableId;
            });

            const sourceSectionIndex = pathway.sections.findIndex((section) => {
                return section.sectionId === source.droppableId;
            });

            clonedSections.splice(sourceSectionIndex, 1);

            //Remove moved item from source section
            const clonedSourceSectionContent = JSON.parse(JSON.stringify(sourceSection.contents));
            clonedSourceSectionContent.splice(source.index, 1);

            const modifiedSourceSection = {
                sectionId: sourceSection.sectionId,
                contents: clonedSourceSectionContent
            };

            clonedSections.splice(sourceSectionIndex, 0, modifiedSourceSection);

            //Get moved item
            const movedItem = sourceSection.contents[source.index];

            //Get destination section
            const destinationSection = pathway.sections.find((section) => {
                return section.sectionId === destination.droppableId;
            });

            const destinationSectionIndex = pathway.sections.findIndex((section) => {
                return section.sectionId === destination.droppableId;
            });

            clonedSections.splice(destinationSectionIndex, 1);

            const clonedDestinationSectionContent = JSON.parse(JSON.stringify(destinationSection.contents));
            clonedDestinationSectionContent.splice(destination.index, 0, movedItem);

            const modifiedDestinationSection = {
                sectionId: destinationSection.sectionId,
                contents: clonedDestinationSectionContent
            };

            clonedSections.splice(destinationSectionIndex, 0, modifiedDestinationSection);

            setPathway((prevState) => {
                return {
                    ...pathway,
                    sections: clonedSections
                };
            });

            return;
        }
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
                                        <div key={section.sectionId}>
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
                                                    <div style={{ marginBottom: "15px" }} key={item.id}>
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
                        <StyledItemCard className={position}>{text}</StyledItemCard>
                    </div>
                );
            }}
        </Draggable>
    );
}
