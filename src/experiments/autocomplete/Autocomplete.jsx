import React, { useState, useRef, useEffect } from "react";

import "./Autocomplete.scss";

const Autocomplete = () => {
    const [autocomplete, setAutocomplete] = useState({
        active: false,
        x: 0,
        y: 0,
        options: ["{{first_name}}", "{{last_name}}"],
        sign: "{{"
    });

    const [activeAlignmentControl, setActiveAlignmentControl] = useState(false);
    const [value, setValue] = useState("");

    const input = useRef();
    const acPopup = useRef();
    const inputArea = useRef();
    let $input;

    useEffect(() => {
        $input = input;
    }, [input]);

    const recalculateAutocompletePosition = () => {
        // let caretWinPos = $input.caret("offset");
        // if (caretWinPos) {
        //     setAutocomplete({
        //         ...autocomplete,
        //         y: caretWinPos.height + caretWinPos.top - document.documentElement.scrollTop,
        //         x:
        //             caretWinPos.left > window.innerWidth / 2
        //                 ? caretWinPos.left - this.acPopup.offsetWidth
        //                 : caretWinPos.left
        //     });
        // }
    };

    const checkAutocomplete = (e, onlyHide) => {
        let countOfNewlines = 0;
        let nv = value.replace(/\n(\r)?/g, (e) => {
            countOfNewlines++;
            return " ";
        });
        // let caretPos = $input.caret("pos");

        // //Using functional component syntax
        // if (
        //     caretPos > 1 &&
        nv.substr(caretPos - 2 + (countOfNewlines > 0 ? countOfNewlines - 1 : 0), 2) == this.state.autocomplete.sign;
        // ) {

        console.log(onlyHide, "THE ONLY HIDE");
        if (onlyHide) {
            setAutocomplete((prevstate) => {
                return {
                    ...autocomplete,
                    active: true
                };
            });
        } else {
            setAutocomplete((prevstate) => {
                return {
                    ...autocomplete,
                    active: false
                };
            });
        }
        // }
    };

    console.log(autocomplete.active);

    useEffect(() => {
        if (autocomplete.active === true) {
            recalculateAutocompletePosition();
        }
    }, [autocomplete.active]);

    const showAlignmentControl = () => {
        // clearTimeout(this.timer);

        setActiveAlignmentControl(true);
    };

    const pasteAutocomplete = (text) => {
        text = text.replace(new RegExp(`^${this.state.autocomplete.sign}`), "");
        let cCursor = $input.caret("pos");
        let sel = window.getSelection && window.getSelection(),
            range;
        if (sel) {
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();
                range.insertNode(document.createTextNode(text));
            }
        } else if (document.selection && document.selection.createRange) {
            document.selection.createRange().text = text;
        }
        $input.focus();
        $input.caret("pos", cCursor + text.length);
        this.checkFontSize();
        this.checkAutocomplete();
    };

    const onInput = () => {
        setValue(input.current.innerText);
    };

    return (
        <>
            <div
                style={{
                    left: autocomplete.x,
                    top: autocomplete.y,
                    visibility: autocomplete.active ? "visible" : "hidden"
                }}
                className="autocomplete-popup"
            >
                <Popup
                    autocomplete={autocomplete}
                    acPopup={acPopup}
                    activeAlignmentControl={activeAlignmentControl}
                    pasteAutocomplete={pasteAutocomplete}
                />
            </div>

            <div className="text-area" ref={inputArea}>
                {/* <div className="text-area"> */}
                <div
                    onKeyPress={checkAutocomplete}
                    onKeyUp={(e) => checkAutocomplete(null, true)}
                    onFocus={showAlignmentControl}
                    className="input"
                    ref={input}
                    onInput={onInput}
                    placeholder="Add your text here"
                    contentEditable
                />
            </div>
        </>
    );
};

export default Autocomplete;

function Popup({ autocomplete, acPopup, activeAlignmentControl, pasteAutocomplete }) {
    return (
        <div
            ref={acPopup}
            className={`autocomplete-popup ${autocomplete.active && activeAlignmentControl ? "active" : ""}`}
            style={{
                left: autocomplete.x,
                top: autocomplete.y
            }}
        >
            <ul>
                {autocomplete.options.map((opt, i) => (
                    <li
                        onMouseDown={(e) => {
                            e.preventDefault();
                            pasteAutocomplete(opt);
                        }}
                        key={i}
                    >
                        {opt}
                    </li>
                ))}
            </ul>
        </div>
    );
}

//Using class component syntax
// if (
//     caretPos > 1 &&
//     nv.substr(caretPos - 2 + (countOfNewlines > 0 ? countOfNewlines - 1 : 0), 2) == this.state.autocomplete.sign
// ) {
//     if (!onlyHide) {
//         this.setState(
//             {
//                 autocomplete: {
//                     ...this.state.autocomplete
//                 }
//             },
//             () => {
//                 this.setState(
//                     {
//                         autocomplete: {
//                             ...this.state.autocomplete,
//                             active: true
//                         }
//                     },
//                     this.recalculateAutocompletePosition
//                 );
//             }
//         );
//     }
// } else if (this.state.autocomplete.active) {
//     this.setState({
//         autocomplete: {
//             ...this.state.autocomplete,
//             active: false
//         }
//     });
// }

// if (caretWinPos) {
//     this.setState({
//         autocomplete: {
//             ...this.state.autocomplete,
//             y: caretWinPos.height + caretWinPos.top - document.documentElement.scrollTop,
//             x:
//                 caretWinPos.left > window.innerWidth / 2
//                     ? caretWinPos.left - this.acPopup.offsetWidth
//                     : caretWinPos.left
//         }
//     });
// }

// this.setState(
//     {
//         value: this.input.innerText,
//         lastSizeUpdatedBy: "input"
//     },
//     () => {
//         if (!this.checkFontSize()) {
//             this.checkAutocomplete();
//         }
//     }
// );
