import React from "react";
import "./imageExperiment.scss";

const imageExperiment = () => {
    return (
        <div className="img-wrapper">
            <div className="class-box">
                <section className="class-box__left-section">
                    <div className="cropping-div">
                        <img src="https://i.ytimg.com/vi/nLnp0tpZ0ok/hqdefault.jpg" alt="" />
                    </div>
                </section>
                <section className="class-box__right-section">
                    <h2>Hello this is the top of the class</h2>

                    <div>Just some paragraph to fill the bottom</div>
                </section>
            </div>
        </div>
    );
};

export default imageExperiment;
