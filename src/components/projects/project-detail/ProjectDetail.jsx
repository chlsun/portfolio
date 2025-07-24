import React from 'react';
import { useParams } from 'react-router-dom';

const projects = [
    // 기존 projects 배열과 동일하게 작성
];

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects[id];

    if (!project) return <div>존재하지 않는 프로젝트입니다.</div>;

    return (
        <section className="project-detail-full">
            <h1 className="title">{project.title}</h1>
            <img src={project.image} alt={project.title} className="project-thumb-large" />
            <p>{project.detail}</p>
            {/* 필요시 기술스택, 링크 등 추가 */}
        </section>
    );
};

export default ProjectDetail;