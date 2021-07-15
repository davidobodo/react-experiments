import React, { useState } from "react";
import styled from "styled-components";
import { INIT_DATA } from "./utils";

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 100px;
`;

const Wrapper = () => {
    const [pathway, setPathway] = useState({ ...INIT_DATA });

    return (
        <StyledWrapper>
            {pathway.sections.map((section) => {
                return (
                    <div>
                        <ColumnList items={section} />
                    </div>
                );
            })}
        </StyledWrapper>
    );
};

export default Wrapper;

const StyledColumnList = styled.div`
    border: 2px solid #000;
    padding: 15px;
    width: 250px;
    margin-right: 20px;
`;
function ColumnList({ items }) {
    return (
        <StyledColumnList>
            {items.contents.map((item, i) => {
                return (
                    <div style={{ marginBottom: "15px" }} key={i}>
                        <ItemCard text={item.text} />
                    </div>
                );
            })}
        </StyledColumnList>
    );
}

const StyledItemCard = styled.div`
    width: 100%;
    height: 60px;
    background-color: green;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
`;
function ItemCard({ text }) {
    return <StyledItemCard>{text}</StyledItemCard>;
}
