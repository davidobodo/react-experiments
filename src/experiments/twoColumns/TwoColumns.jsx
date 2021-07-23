import React from "react";
import "./TwoColumns.scss";
import Sticky from "react-stickynode";

const TwoColumns = () => {
    return (
        <div className="body">
            <h1>Thanks a lot for checking out this sample</h1>
            <h3>
                Expected behaviour: By the time each section surrounded by the red border gets to the top of the window
                the BLUE BOX on the left should become fixed while only the green boxes on the right should scroll,
                until we reach the last green box before the blue box then also scrolls out of the page
            </h3>

            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt,
                delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam
                quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam
                deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut
                sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
                excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores
                repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam
                commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae
                eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque
                nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit,
                fuga. deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis
                ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
                excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores
                repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam
                commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae
                eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. deserunt,
                delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam
                quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam
                deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut
                sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
                excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores
                repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam
                commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. deserunt, delectus atque nesciunt
                recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus
                atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis?
                Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam
                deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut
                sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
                excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores
                repudiandae nobis ut sequi vel nam quis? Sit, fuga.
            </p>

            <section class="section">
                <Sticky bottomBoundary={2180}>
                    <div class="section__left" id="one"></div>
                </Sticky>
                <div class="section__right">
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                </div>
            </section>

            <section class="section">
                <Sticky bottomBoundary={Infinity}>
                    <div class="section__left" id="two"></div>
                </Sticky>
                <div class="section__right">
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                </div>
            </section>

            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt,
                delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam
                quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam
                deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut
                sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
                excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores
                repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam
                commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae
                eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque
                nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit,
                fuga. deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis
                ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
                excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores
                repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam
                commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae
                eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. deserunt,
                delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam
                quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam
                deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut
                sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
                excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores
                repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam
                commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. deserunt, delectus atque nesciunt
                recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus
                atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis?
                Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam
                deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut
                sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
                excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores
                repudiandae nobis ut sequi vel nam quis? Sit, fuga. elit. Laudantium excepturi numquam deserunt,
                delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam
                quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam
                deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut
                sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
                excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores
                repudiandae nobis ut sequi vel nam quis? Sit, fuga. deserunt, delectus atque nesciunt recusandae eum
                doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt
                recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus
                atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis?
                Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam
                deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut
                sequi vel nam quis? Sit, fuga. deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi
                maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum
                doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt
                recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus
                atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis?
                Sit, fuga. deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae
                nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi
                maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum
                doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt
                recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. elit.
                Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi
                maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum
                doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt
                recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga.
                deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut
                sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
                excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores
                repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam
                commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae
                eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. deserunt,
                delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam
                quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam
                deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut
                sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
                excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores
                repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam
                commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. deserunt, delectus atque nesciunt
                recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus
                atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis?
                Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam
                deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut
                sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
                excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores
                repudiandae nobis ut sequi vel nam quis? Sit, fuga. elit. Laudantium excepturi numquam deserunt,
                delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam
                quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam
                deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut
                sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
                excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores
                repudiandae nobis ut sequi vel nam quis? Sit, fuga. deserunt, delectus atque nesciunt recusandae eum
                doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt
                recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus
                atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis?
                Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam
                deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut
                sequi vel nam quis? Sit, fuga. deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi
                maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum
                doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt
                recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus
                atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis?
                Sit, fuga. deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae
                nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi
                maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum
                doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt
                recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga.
                adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum
                doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt
                recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus
                atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis?
                Sit, fuga. deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae
                nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi
                maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum
                doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt
                recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. elit.
                Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi
                maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum
                doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt
                recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga.
                deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut
                sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
                excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores
                repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam
                commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae
                eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. deserunt,
                delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam
                quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam
                deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut
                sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
                excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores
                repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam
                commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. deserunt, delectus atque nesciunt
                recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus
                atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis?
                Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam
                deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut
                sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
                excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores
                repudiandae nobis ut sequi vel nam quis? Sit, fuga. elit. Laudantium excepturi numquam deserunt,
                delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam
                quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam
                deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut
                sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
                excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores
                repudiandae nobis ut sequi vel nam quis? Sit, fuga. deserunt, delectus atque nesciunt recusandae eum
                doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt
                recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus
                atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis?
                Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam
                deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut
                sequi vel nam quis? Sit, fuga. deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi
                maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum
                doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt
                recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus
                atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis?
                Sit, fuga. deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi maiores repudiandae
                nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum doloribus quam commodi
                maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt recusandae eum
                doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga. Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Laudantium excepturi numquam deserunt, delectus atque nesciunt
                recusandae eum doloribus quam commodi maiores repudiandae nobis ut sequi vel nam quis? Sit, fuga.
            </p>
        </div>
    );
};

export default TwoColumns;
