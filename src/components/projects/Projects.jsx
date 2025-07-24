import React, { useState } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
    {
        title: 'DoTogether(팀 프로젝트)',
        summary: '간단한 요약 설명',
        image: '/img/메인화면.PNG'
    },
    {
        title: '프로젝트 2',
        summary: '간단한 요약 설명',
        image: '/img/project2.png'
    },
    {
        title: '프로젝트 3',
        summary: '간단한 요약 설명',
        image: '/img/project3.png'
    }
];

// 커스텀 Arrow 컴포넌트
const Arrow = (props) => {
    const { className, style, onClick } = props;
    const isNext = className && className.includes('next');
    return (
        <button
            className={className + ' carousel-arrow'}
            style={{ ...style }}
            onClick={onClick}
            aria-label={isNext ? '다음' : '이전'}
        >
            {isNext ? <img src='/img/next-arrow.svg'/> : <img src='/img/next-arrow.svg' style={{"transform" : "rotate(180deg)"}}/>}
        </button>
    );
};

const Projects = () => {
    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
    };

    const handleCardClick = idx => {
        navigate(`/projects/${idx}`);
    };

    return (
        <section id="projects" className="projects-full">
            <h1 className="title">Projects</h1>
            <div className="carousel-slick-full">
                <Slider {...settings}>
                    {projects.map((project, idx) => (
                        <div key={project.title}>
                            <div className="project-card-large" onClick={() => handleCardClick(idx)}>
                                <img src={project.image} alt={project.title} className="project-thumb-large" />
                                <h2>{project.title}</h2>
                                <p>{project.summary}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Projects;