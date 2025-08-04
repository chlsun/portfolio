import React from 'react';
import './Projects.css';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    title: 'DoTogether(팀 프로젝트)',
    summary:
      '개인정보 암호화 저장, 개인 일정 관리, 팀 일정 공유, 웹소켓 기반 팀 채팅, 접근 로그 관리 기능을 구현한 협업 일정 관리 플랫폼',
    image: '/img/dotogether/업무관리수정.gif',
  },
  {
    title: 'Carlpion(팀 프로젝트)',
    summary:
      '전기차 예약, 결제, 커뮤니티 게시판, JWT 기반 로그인 등 사용자 편의성과 보안을 고려한 웹 플랫폼',
    image: '/img/carlpion/차량렌트.gif',
  }
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="section projects-section">
      <div className="inner">
        <h1 className="section-title">Projects</h1>
        <div className="projects-container">
          {projects.map(({ title, summary, image }, index) => (
            <div
              className="project-card"
              key={title}
              onClick={() => navigate(`/projects/${index}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-image">
                <img src={image} alt={title} />
              </div>
              <div className="project-info">
                <h3>{title}</h3>
                <p>{summary}</p>
                <span className="view-detail">자세히 보기 →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
