import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { GiCheckMark } from 'react-icons/gi';
import "./About.css";
const About = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "-100px",
    });
    return (
        <section id="about" className='about' ref={ref}>
            <div className="about_wrapper p50">
                <h3 className="section-title">About</h3>
                <div className="about_content">
                    <ul className="about_content_list">
                        <li className="about_content_list_item">
                            <GiCheckMark /> Four years of experience
                        </li>
                        <li className="about_content_list_item">
                            <GiCheckMark /> Modern, stunning and functional web designs
                        </li>
                        <li className="about_content_list_item">
                            <GiCheckMark /> Fast and on time delivery of work
                        </li>
                        <li className="about_content_list_item">
                            <GiCheckMark /> Affordable and reliable
                        </li>
                    </ul>
                </div>
                <div className="widget-block">
                    <div className="progress">
                        <div
                            className={inView ? "progress-bar full_up_1" : "progress-bar"}
                        ></div>
                        <span className="skill-value">
                            JavaScript{" "}
                            <span>
                                <CountUp redraw={inView} end={80} />%
                            </span>
                        </span>
                    </div>

                    <div className="progress">
                        <div
                            className={inView ? "progress-bar full_up_3" : "progress-bar"}
                        ></div>
                        <span className="skill-value">
                            HTML5{" "}
                            <span>
                                <CountUp redraw={inView} end={100} />%
                            </span>
                        </span>
                    </div>

                    <div className="progress">
                        <div
                            className={inView ? "progress-bar full_up_3" : "progress-bar"}
                        ></div>
                        <span className="skill-value">
                            CSS3{" "}
                            <span>
                                <CountUp redraw={inView} end={100} />%
                            </span>
                        </span>
                    </div>

                    <div className="progress">
                        <div
                            className={inView ? "progress-bar full_up_2" : "progress-bar"}
                        ></div>
                        <span className="skill-value">
                            React{" "}
                            <span>
                                <CountUp redraw={inView} end={95} />%
                            </span>
                        </span>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default About;
