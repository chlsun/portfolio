import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProjectDetail.css';
import DoTogetherMainFunctions from './main-function/DoTogetherMainFunctions';
import DoTogetherTroubleshooting from './trouble-shooting/DoTogetherTroubleshooting';
import Accordion from './components/Accordion';



// 프로젝트별 주요 기능/트러블슈팅 컴포넌트 매핑
const mainFunctionComponents = {
    'DoTogether(팀 프로젝트)': DoTogetherMainFunctions,
    // 다른 프로젝트 추가
};
const troubleshootingComponents = {
    'DoTogether(팀 프로젝트)': DoTogetherTroubleshooting,
    // 다른 프로젝트 추가
};

const projects = [
    {
        title: 'DoTogether(팀 프로젝트)',
        front: 'https://github.com/haruki975-gif/Orange_FRONT',
        back: 'https://github.com/haruki975-gif/Orange_BACK',
        deploy: 'https://dotogether.shop',
        period: '2025.06.12 ~ 2025.07.09',
        overview: '본 프로젝트는 전기차 공유 예약 서비스와 커뮤니티 기능을 통합한 웹 플랫폼을 구축하는 것을 목표로 합니다. 사용자 간의 정보 교류와 차량 예약을 하나의 시스템에서 지원함으로써사용자의 편의성과 접근성을 높이고자 합니다. <br/> React를 기반으로 직관적이고 반응성 높은 UI/UX를 설계하였으며, Spring Boot와 JWT 기반 인증 방식을 도입하여 보안성과 유지보수성을 강화하였습니다.<br/>또한, 전기차 중심의 공유 시스템을 통해 친환경적 이동 수단의 접근성을 높이고, 지속 가능한 모빌리티 생태계 조성에 기여하는 것을 목표로 합니다.',
        features: [
            '회원가입, 로그인, 아이디/비밀번호 찾기',
            '프로필 및 내 정보 수정, 회원 탈퇴',
            'DBMS_CRYPTO를 활용한 개인정보 암호화 저장',
            '팀 생성, 조회, 삭제, 탈퇴, 팀원 추방',
            '팀 가입 신청, 신청 조회, 수락/거절',
            '웹소켓 기반 팀 채팅 (채팅 조회/전송/수정/삭제)',
            '웹소켓 기반 팀 업무 관리 (업무 생성/조회/상태 수정/삭제)',
            'Drag and Drop 기반 업무/일정 관리',
            '개인 일정 등록 및 수정',
            '관리자 기능 (회원 제재, 챌린지방 관리, 접근 로그 관리)',
            'Spring Security + JWT 기반 인증/인가',
            'Enum 기반 공통 예외 처리 구조 설계',
            'AWS 배포, S3 정적 리소스 호스팅',
            'GitHub Actions를 이용한 CI/CD 자동화'
        ],
        tech: {
            ProgrammingLanguages: ['Java', 'JavaScript'],
            Markup: ['HTML', 'CSS'],
            Frameworks: ['Spring Boot', 'Spring Security', 'React'],
            Database: ['Oracle', 'MyBatis', 'JDBC', 'DBMS_CRYPTO'],
            Communication: ['spring-websocket', 'AXIOS', 'REST API'],
            Deployment: ['AWS', 'Docker', 'S3'],
            VersionControl: ['Git', 'GitHub'],
            Tools: ['IntelliJ', 'VS Code', 'Postman', 'DBeaver'],
            Collaboration: ['Notion', 'Figma', 'Slack'],
            Library: ['react-dnd']
        },
        architecture: '/img/dotogether/아키텍쳐.png',
        flow: '/img/dotogether/DoTogether_UseCase.png',
        mainFunctions: [
            { title: '일정 관리', detail: '개인/팀 일정 등록, 수정, 삭제, 공유 기능' },
            { title: '팀 채팅', detail: '웹소켓 기반 실시간 채팅' },
            // ...추가 기능
        ],
        troubleshooting: [
            { title: 'JWT 인증 오류', detail: '토큰 만료 시 자동 로그아웃 처리' },
            // ...추가 트러블슈팅
        ],
        learnings: '보안 강화, 협업 경험, CI/CD 자동화 등',
        improvement: 'UI 개선, 성능 최적화, 추가 기능 개발 등'
    },
    // ...다른 프로젝트
];

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects[id];

    if (!project) return <div>존재하지 않는 프로젝트입니다.</div>;

    // 동적으로 컴포넌트 선택
    const MainFunctionsComponent = mainFunctionComponents[project.title];
    const TroubleshootingComponent = troubleshootingComponents[project.title];

    return (
        <section className="project-detail-full">
            <button
                className="back-main-btn"
                onClick={() => navigate('/')}
            >
                <span className="back-arrow" aria-hidden="true">←</span>
                <span>메인으로 돌아가기</span>
            </button>
            <h1 className="title">{project.title}</h1>
            <div className="project-info-section">
                <div className="project-links">
                    <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="project-link">배포 주소</a>
                    <a href={project.front} target="_blank" rel="noopener noreferrer" className="project-link">Front GitHub</a>
                    <a href={project.back} target="_blank" rel="noopener noreferrer" className="project-link">Back GitHub</a>
                </div>
                <div className="project-period">개발 기간: {project.period}</div>
                <div
                    className="project-overview"
                    dangerouslySetInnerHTML={{ __html: project.overview }}
                ></div>
                <div className="project-features">
                    <h3>주요 기능</h3>
                    <ul>
                        {project.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                </div>
            </div>
            <div className="project-tech-section">
                <h2>사용 기술</h2>
                <div className="tech-list-vertical">
                    {Object.entries(project.tech).map(([category, items]) => (
                        <div key={category} className="tech-category-vertical">
                            <strong className="tech-category-title">{category}</strong>
                            <div className="tech-items">
                                {items.map((item, idx) => (
                                    <span key={item + idx} className="tech-item-box">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Accordion title="UseCase">
                <div><img src={project.flow} alt="" /></div>
            </Accordion>
            <Accordion title="아키텍처">
                <div><img src={project.architecture} alt="" /></div>
            </Accordion>

            {/* 주요 기능 컴포넌트 */}
            <Accordion title="주요 기능 상세(담당파트)">
                {MainFunctionsComponent ? <MainFunctionsComponent /> : null}
            </Accordion>

            {/* 트러블 슈팅 컴포넌트 */}
            <Accordion title="트러블 슈팅">
                {TroubleshootingComponent ? <TroubleshootingComponent /> : null}
            </Accordion>

            <Accordion title="주요 배운점 & 개선 계획">
                <h2>주요 배운점</h2>
                <p>
                    이번 프로젝트를 통해 웹 소켓 기반의 실시간 통신 기능을 구현하며 <strong>멀티 스레드 환경에서의 동시성 문제</strong>를 직접 경험하고 처리하는 방법을 배울 수 있었습니다. 특히, 웹 소켓 통신은 일반적인 HTTP 요청과 달리 Spring Security 필터 체인에서도 예외가 아니기 때문에, <code>.requestMatchers("/ws/**").permitAll()</code> 와 같은 명시적인 보안 설정이 필요하다는 점도 알게 되었습니다.
                    <br /><br />
                    또한, CI/CD 파이프라인을 구성하고 실제 배포까지 경험해보면서, 개발된 기능이 운영 환경에서 안정적으로 동작하도록 만드는 전반적인 흐름과 중요성을 체감할 수 있었습니다.
                </p>

                <h2>개선 계획</h2>
                <p>
                    현재는 단순한 웹 소켓 통신 방식으로 구현했지만, 향후에는 <strong>STOMP 기반의 메시징 방식</strong>을 도입하여 구독/발행 모델을 활용한 더 안정적이고 확장 가능한 실시간 기능을 구현해보고 싶습니다.
                    <br /><br />
                    또한, 이번 프로젝트는 비교적 소수의 사용자를 가정하고 코드를 작성했지만, 실제 다수의 사용자가 동시에 접속하는 상황을 고려했을 때 발생할 수 있는 <br /> <strong>성능 문제와 동시성 이슈</strong>들을 보다 깊이 있게 파악하고 해결해보고자 합니다.
                </p>
            </Accordion>
        </section>
    );
};

export default ProjectDetail;