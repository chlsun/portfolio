import React, { useState } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
    {
        title: 'DoTogether(팀 프로젝트)',
        summary: '개인정보 암호화 저장, 개인 일정 관리, 팀 일정 공유, 웹소켓 기반 팀 채팅, 접근 로그 관리 기능을 구현한 협업 일정 관리 플랫폼',
        image: '/img/dotogether/메인화면.PNG'
    },
    {
        title: 'Carlpion(팀 프로젝트)',
        summary: '전기차 예약, 결제, 커뮤니티 게시판, JWT 기반 로그인 등 사용자 편의성과 보안을 고려한 웹 플랫폼',
        image: '/img/Carlpion.PNG'
    },
    {
        title: 'Korplace(팀 프로젝트)',
        summary: 'TourAPI 기반 전국 행사, 축제 정보 제공 + AI 플래너 기능으로 여행 일정 추천 서비스',
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