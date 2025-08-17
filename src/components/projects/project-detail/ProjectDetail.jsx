import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProjectDetail.css';
import DoTogetherMainFunctions from './main-function/DoTogetherMainFunctions';
import DoTogetherTroubleshooting from './trouble-shooting/DoTogetherTroubleshooting';
import Accordion from './components/Accordion';
import CarlpionMainFunctions from './main-function/CarlpionMainFunctions';
import CarlpionTroubleshooting from './trouble-shooting/CarlpionTroubleshooting';



// 프로젝트별 주요 기능/트러블슈팅 컴포넌트 매핑
const mainFunctionComponents = {
    'DoTogether(팀 프로젝트)': DoTogetherMainFunctions,
    'Carlpion(팀 프로젝트)': CarlpionMainFunctions,
    // 다른 프로젝트 추가
};
const troubleshootingComponents = {
    'DoTogether(팀 프로젝트)': DoTogetherTroubleshooting,
    'Carlpion(팀 프로젝트)': CarlpionTroubleshooting,
    // 다른 프로젝트 추가
};

const learnedContents = {
    'DoTogether(팀 프로젝트)': (
        <>
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
        </>
    ),
    'Carlpion(팀 프로젝트)': (
        <>
            <h2>주요 배운점</h2>
            <p>
                이번 프로젝트에서는 차량 렌트 서비스 파트를 맡아 <strong>Restful API 기반으로 주요 기능들을 설계 및 구현</strong>하였습니다. 차량 모델 관리, 운용 차량 위치 관리, 예약 가능 차량 및 위치 조회, 차량 렌트(결제), 사용자 예약 정보 관리 등 다양한 기능을 개발하며, <strong>웹 서버에서의 요청 처리 흐름과 데이터 전달 구조</strong>에 대한 이해를 높일 수 있었습니다.
                <br /><br />
                특히 외부 API를 활용하는 과정에서 실무적인 감각을 익혔습니다. 공공데이터인 공영주차장 API를 연동하여 <strong>JSON 데이터를 받아 DTO로 파싱</strong>하며 실제 데이터를 다루는 실습 경험을 쌓았고, <strong>PortOne 결제 API 연동을 통해 결제 사전 검증 및 사후 검증</strong> 흐름을 직접 구현해보며 외부 시스템과의 상호작용 방식에 대해 깊이 있게 이해할 수 있었습니다.
            </p>

            <h2>개선 계획</h2>
            <p>
                기능 구현에 집중하다 보니 <strong>반복되는 로직이나 유틸성 기능을 공통 모듈로 분리하지 못한 점</strong>이 아쉬웠습니다. 향후에는 개발 초기 단계에서부터 <strong>재사용 가능한 구조를 고려한 설계</strong>를 통해 코드 품질을 높이고 유지보수가 용이한 구조로 개선하고자 합니다.
                <br /><br />
                또한 현재는 단일 서버 기반으로 비교적 단순한 구조로 개발했지만, 실제 서비스 환경에서의 <strong>트래픽 증가와 동시성 문제</strong>를 고려한 아키텍처 설계 및 성능 튜닝 경험도 확장해나갈 계획입니다.
            </p>
        </>
    ),
    // 다른 프로젝트 추가
};

const projects = [
    {
        title: 'DoTogether(팀 프로젝트)',
        front: 'https://github.com/haruki975-gif/Orange_FRONT',
        back: 'https://github.com/haruki975-gif/Orange_BACK',
        deploy: 'https://dotogether.shop',
        id: 'user1234',
        password: '!user1234',
        period: '2025.06.12 ~ 2025.07.09',
        overview: '본 프로젝트는 개인 일정 관리와 팀 단위 협업 기능을 통합 제공하여, 사용자 간 효율적인 정보 공유와 업무 조율을 지원하는 협업 플랫폼입니다.<br/>AES 암호화 방식을 활용한 개인정보 암호화, 권한 분리, 접근 로그 관리 등 보안 요소를 설계 초기부터 반영하였고, Spring Security와 JWT 기반 인증/인가 체계를 구축하였습니다. <br/>또한 GitHub Actions를 통한 CI/CD 자동화와 AWS 인프라 환경에의 안정적인 배포를 통해 실사용 환경을 고려한 구조를 구현하였습니다.',
        features: [
            '회원가입, 로그인, 아이디/비밀번호 찾기',
            '프로필 및 내 정보 수정, 회원 탈퇴',
            'AES 암호화 방식을 활용한 개인정보 암호화 저장',
            '팀 생성, 조회, 삭제, 탈퇴, 팀원 추방',
            '팀 가입 신청, 신청 조회, 수락/거절',
            '웹소켓 기반 팀 채팅 (채팅 조회/전송/수정/삭제)',
            '웹소켓 기반 팀 업무 관리 (업무 생성/조회/상태 수정/삭제)',
            'Drag and Drop 기반 업무/일정 관리',
            '개인 일정 등록 및 수정',
            '관리자 기능 (회원 제재, 챌린지방 관리, 접근 로그 관리)',
            'Spring Security + JWT 기반 인증/인가',
            'AWS 배포, S3 정적 리소스 호스팅',
            'GitHub Actions를 이용한 CI/CD 자동화'
        ],
        tech: {
            ProgrammingLanguages: ['Java', 'JavaScript'],
            Frontend: ['React', 'HTML', 'CSS', 'Axios', 'react-dnd'],
            BackendFrameworks: ['Spring Boot', 'Spring Security'],
            Database: ['Oracle', 'MyBatis', 'JDBC'],
            Communication: ['WebSocket (spring-websocket)'],
            "Deployment & DevOps": ['AWS', 'S3', 'Docker'],
            VersionControl: ['Git', 'GitHub'],
            Tools: ['STS4', 'VS Code', 'Postman', 'DBeaver'],
            Collaboration: ['Notion', 'Figma', 'Slack']
        },
        architecture: '/img/dotogether/아키텍쳐.png',
        flow: '/img/dotogether/DoTogether_UseCase.png',
    },
    {
        title: 'Carlpion(팀 프로젝트)',
        front: 'https://github.com/chlsun/Carlpion_client.git',
        back: 'https://github.com/chlsun/Carlpion.git',
        deploy: 'https://www.carlpion.store/',
        id: 'user1234',
        password: '!user1234',
        adminId: 'cpadmin8184',
        adminPwd: 'kM{2sq$q@g%9g`-',
        period: '2025.04.09 ~ 2025.05.12',
        overview: '본 프로젝트는 전기차 공유 예약 서비스와 커뮤니티 기능을 통합한 웹 플랫폼을 구축하는 것을 목표로 합니다. </br>사용자 간의 정보 교류와 차량 예약을 하나의 시스템에서 지원함으로써사용자의 편의성과 접근성을 높이고자 합니다. </br>React를 기반으로 직관적이고 반응성 높은 UI/UX를 설계하였으며, Spring Boot와 JWT 기반 인증 방식을 도입하여 보안성과 유지보수성을 강화하였습니다.</br> 또한, 전기차 중심의 공유 시스템을 통해 친환경적 이동 수단의 접근성을 높이고, 지속 가능한 모빌리티 생태계 조성에 기여하는 것을 목표로 합니다.',
        features: [
            '회원가입, 로그인(Spring Security + JWT), 구글 소셜 로그인, 아이디/비밀번호 찾기',
            '회원탈퇴, 비밀번호/프로필/닉네임/이름 수정, 게시글/포인트 내역 조회',
            '차량 모델/운용차량(위치) 관리, 예약 가능 차량 및 위치 조회',
            '차량 렌트(결제), 사용자 예약 정보 관리',
            '게시판 조회/작성/수정/삭제, 게시판 댓글'
        ],
        tech: {
            ProgrammingLanguages: ['Java', 'JavaScript'],
            Frontend: ['React', 'HTML', 'CSS', 'Axios'],
            BackendFrameworks: ['Spring Boot', 'Spring Security'],
            Database: ['Oracle', 'MyBatis', 'JDBC'],
            "Deployment & DevOps": ['GCP', 'Docker', 'Firebase Hosting', 'Firebase Storage'],
            VersionControl: ['Git', 'GitHub'],
            Tools: ['STS4', 'VS Code', 'Postman', 'DBeaver'],
            Collaboration: ['Notion', 'Figma', 'Slack'],
            ExternalAPI: [
            'PortOne API (결제)',
            'Kakao Maps API (지도)',
            'Google OAuth (로그인)',
            '서울시 공공데이터 포털 (공영주차장 정보)'
            ]
        },
        architecture: '/img/carlpion/아키텍쳐.png',
        flow: '/img/carlpion/Carlpion_UseCase.png',
    },
    
];

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                    <a href={project.front} target="_blank" rel="noopener noreferrer" className="project-link">Front GitHub</a>
                    <a href={project.back} target="_blank" rel="noopener noreferrer" className="project-link">Back GitHub</a>
                </div>
                <div className='project-deploy'>
                    <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="project-link">배포 주소</a>
                    <div className="id-pwd">
                        <p>(사용자) 아이디: <b>{project.id}</b> / 비밀번호: <b>{project.password}</b></p>
                        {project.adminId && <p>(관리자) 아이디: <b>{project.adminId}</b> / 비밀번호: <b>{project.adminPwd}</b></p>}
                    </div>
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
                {learnedContents[project.title]}
            </Accordion>
        </section>
    );
};

export default ProjectDetail;