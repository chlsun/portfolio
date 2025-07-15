import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () =>{

    return(
        <section id='about'>
            <h1 className="title">About Me</h1>
            <div className="container">
                <div className="profile">
                    <img src="/img/a프로필.jpg" alt="" />
                </div>

                <div className="self-introduce">
                    <h2 className="name">웹 개발자 <b>최윤서</b>입니다.</h2>
                    <h4 className="introduce">
                        JVM처럼 어떤 환경에서도 빠르게 적응하여<br />
                        팀에 안정적으로 기여하는 개발자입니다.
                    </h4>
                    <div className="sub-intoroduce">
                        <li>빠르게 적응하고, 꾸준히 성장하는 웹 개발자입니다.</li>
                        <li>사용자 경험을 고민하는 개발자입니다.</li>
                        <li>협업과 커뮤니케이션을 중요하게 생각합니다.</li>
                        <li>문제를 끝까지 파고드는 끈기가 저의 강점입니다.</li>
                        <li>효율적인 개발과 유지보수를 고민하는 웹 개발자입니다.</li>
                    </div>
                </div>

                <div className="right">
                    <div className="contact">
                        <div className="birth">
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333333"><path d="M160-80q-17 0-28.5-11.5T120-120v-200q0-33 23.5-56.5T200-400v-160q0-33 23.5-56.5T280-640h160v-58q-18-12-29-29t-11-41q0-15 6-29.5t18-26.5l56-56 56 56q12 12 18 26.5t6 29.5q0 24-11 41t-29 29v58h160q33 0 56.5 23.5T760-560v160q33 0 56.5 23.5T840-320v200q0 17-11.5 28.5T800-80H160Zm120-320h400v-160H280v160Zm-80 240h560v-160H200v160Zm80-240h400-400Zm-80 240h560-560Zm560-240H200h560Z"/></svg>
                                Birth</p>
                            <span>2000년 3월 17일</span>
                        </div>
                        <div className="email">
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333333"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                                E-Mail</p>
                            <span>cus5054317@naver.com</span>
                        </div>
                        <div className="github">
                            <p><img src="/img/github-mark.svg" alt="" />
                            GitHub</p>
                            <a onClick={() => window.open("https://github.com/chlsun")}>https://github.com/chlsun</a>
                        </div>
                        <div className="addr">
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333333"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                                Address</p>
                            <span>경기도 파주시 가온로67</span>
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="education">
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333333"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg>
                                학력</p>
                            <div>
                                <span>연성대학교 컴퓨터소프트웨어학과(졸업)</span>
                            </div>
                        </div>
                        <div className="education-sub">
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333333"><path d="M160-391h45l23-66h104l24 66h44l-97-258h-46l-97 258Zm81-103 38-107h2l38 107h-78Zm319-70v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454ZM260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-499Z"/></svg>
                                교육이수</p>
                            <div>
                                <span>KDT 프로젝트 기반 AWS 풀스택 웹 개발자 양성 과정 이수</span>
                            </div>
                        </div>
                        <div className="awards">
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333333"><path d="M480-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z"/></svg>
                                수상</p>
                            <div>
                                <span>인공지능 뭐시기 수상</span>
                                <span>성적 우수상 수상</span>
                            </div>
                        </div>
                        <div className="certificates">
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333333"><path d="M560-440h200v-80H560v80Zm0-120h200v-80H560v80ZM200-320h320v-22q0-45-44-71.5T360-440q-72 0-116 26.5T200-342v22Zm160-160q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg>
                                자격증</p>
                            <div>
                                <span>운전면허증</span>
                                <span>정보처리산업기사 (희망)</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;