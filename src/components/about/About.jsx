import React from 'react';
import './About.css';

const About = () => (
  <section id="about" className="section about-section">
    <div className="inner wide-padding">
      <h1 className="section-title">About Me</h1>

      <div className="about-container">
        <div className="about-left">
          <div className="profile-image large">
            <img src="/img/증명사진.jpg" alt="profile" />
          </div>
        </div>

        <div className="about-center">
          <h2 className="name">웹 개발자 <b>최윤서</b>입니다.</h2>
          <h4 className="introduce">
            책임감을 바탕으로 문제를 해결하고 빠르게 배우며,<br />
            협업에 적극적으로 임하는 신입 개발자입니다.
          </h4>
          <ul className="bullet-list">
            <li>빠르게 적응하고, 꾸준히 성장하는 웹 개발자입니다.</li>
            <li>사용자 경험을 고민하는 개발자입니다.</li>
            <li>협업과 커뮤니케이션을 중요하게 생각합니다.</li>
            <li>문제를 끝까지 파고드는 끈기가 저의 강점입니다.</li>
            <li>효율적인 개발과 유지보수를 고민하는 웹 개발자입니다.</li>
          </ul>
        </div>
      </div>

      <div className="about-info-grid row-layout">
        <div className="about-block">
          <h3>Contact</h3>
          <p>Birth: 2000년 3월 17일</p>
          <p>Email: cus5054317@naver.com</p>
          <p>
            GitHub: <a href="https://github.com/chlsun" target="_blank" rel="noreferrer">github.com/chlsun</a>
          </p>
          <p>Address: 경기도 파주시 가온로67</p>
        </div>
        <div className="about-block">
          <h3>Education</h3>
          <p>연성대학교 컴퓨터소프트웨어학과 <br />(졸업)</p>
          <p>KDT 프로젝트 기반 AWS 풀스택 <br />웹 개발자 과정 이수</p>
        </div>
        <div className="about-block">
          <h3>Awards</h3>
          <p>연성대학교 - AI 활용 우수 사례 경진대회 창의융합상(2024)</p>
          <p>KH정보교육원 - 성적 우수상 (2025)</p>
        </div>
        <div className="about-block">
          <h3>Certificates</h3>
          <p>2종 보통 운전면허증 (2018)</p>
          <p>정보처리산업기사 (가채점 합격)</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;