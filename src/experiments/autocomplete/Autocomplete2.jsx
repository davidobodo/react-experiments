import React, { useState, useEffect, useRef } from "react";

import "./Autocomplete2.scss";
const Autocomplete2 = () => {
    const [inputValue, setInputValue] = useState("");
    const [showVariables, setShowVariables] = useState(false);

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        //Check for last two digits of inputvalue
        console.log(inputValue, inputValue.length);

        console.log("=====LAST TWO DIGITS", inputValue.substring(inputValue.length - 2));

        if (inputValue.substring(inputValue.length - 2) === "{{") {
            setShowVariables(true);
        } else {
            setShowVariables(false);
        }
    }, [inputValue]);

    // const pos = {
    //     y: caretWinPos.height + caretWinPos.top - document.documentElement.scrollTop,
    //     x: caretWinPos.left > window.innerWidth / 2 ? caretWinPos.left - this.acPopup.offsetWidth : caretWinPos.left
    // };

    const inputRef = useRef();

    const handleSelectVariable = (e) => {
        const { value } = e.target.dataset;
        console.log(value, "the value");
        setInputValue(inputValue + value + "}}");

        setShowVariables(false);
        inputRef.current.focus();
    };
    return (
        <>
            <div className="wrapper">
                <input
                    type="text"
                    placeholder="Typw here"
                    value={inputValue}
                    onChange={handleOnChange}
                    ref={inputRef}
                />
            </div>

            {showVariables && (
                <ul className="popup" onClick={handleSelectVariable}>
                    <li data-value="one">One</li>
                    <li data-value="two">two</li>
                    <li data-value="three">three</li>
                </ul>
            )}
        </>
    );
};

export default Autocomplete2;
