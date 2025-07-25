import React, { useState } from 'react';
import './MainFunctions.css';

const Accordion = ({ title, children }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="accordion-section">
            <button className="accordion-toggle" onClick={() => setOpen(!open)}>
                <span>{title}</span>
                <span className={`arrow ${open ? 'open' : ''}`}>▼</span>
            </button>
            {open && <div className="accordion-content">{children}</div>}
        </div>
    );
};

const DoTogetherMainFunctions = () => (
    <ul>
        <Accordion title={'팀 관리'}>
            <img src="/img/dotogether/팀관리.gif" alt="" />
            
            <h3>1. 팀 생성</h3>
            <ol type='a'>
                <li>Axios Post(/api/teams) 요청</li>
                <li>웹서버에서 응답 받은 로직 수행</li>
                <img src="/img/dotogether/team/팀생성1.PNG" alt="" style={{width : "500px"}}/>
                <img src="/img/dotogether/team/팀생성2.PNG" alt="" style={{width : "500px"}}/>
                <p>-&gt; 요청 사용자의 속한 팀이 5팀 이상인지 검증</p>
                <p>-&gt; 검증 성공 시 팀 생성 + 팀원으로 저장</p>
            </ol>

            <h3>2. 팀 조회</h3>
            <ol type='a'>
                
                <li>무한 스크롤 조회 방식을 사용하기 위해 마지막 조회 데이터의 생성일을 넘김</li>
                <img src="/img/dotogether/team/팀조회1.PNG" alt="" style={{width : "700px"}}/>
                
                <li>스크롤을 끝까지 내렸을 경우 데이터 로딩</li>
                <img src="/img/dotogether/team/팀조회2.PNG" alt="" style={{width : "400px"}}/>

                <li>모든 팀 조회 로직 수행</li>
                <img src="/img/dotogether/team/팀조회3.PNG" alt="" style={{width : "500px"}}/>
                <img src="/img/dotogether/team/팀조회4.PNG" alt="" style={{width : "700px"}}/>
                <p>-&gt; 중첩된 객체 형태를 조회하기 위해 MyBatis의 resultMap을 사용</p>
                <img src="/img/dotogether/team/팀조회5.PNG" alt="" style={{width : "500px"}}/>
                <p>-&gt; 요청 사용자가 팀 가입 신청을 넣을 수 있는지 판단 하는 데이터 조회</p>
                <p>-&gt; lastTimeStamp 값이 없을 시(= 무한스크롤 요청이 아닐 경우) 조건없이 조회</p>
                <p>-&gt; 생성일 기준 정렬 후 20개 데이터 조회를 위해 FROM절 서브쿼리 사용</p>
            </ol>
        </Accordion>
        <Accordion title={'팀 신청 승인 관리'}></Accordion>
        <Accordion title={'팀 채팅'}></Accordion>
        <Accordion title={'팀 업무 관리'}></Accordion>
    </ul>
);

export default DoTogetherMainFunctions;