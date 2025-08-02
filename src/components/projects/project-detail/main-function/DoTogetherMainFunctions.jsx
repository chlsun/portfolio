import React, { useState } from 'react';
import './MainFunctions.css';
import Accordion from '../components/Accordion';


const DoTogetherMainFunctions = () => (
    <ul>
        <Accordion title={'팀 관리 ★'}>
            <img src="/img/dotogether/팀관리.gif" alt="" />
            
            <h2>1. 팀 생성</h2>
            <ol type='a'>
                <li>Axios Post(/api/teams) 요청</li>
                <li>웹서버에서 응답 받은 로직 수행</li>
                <img src="/img/dotogether/team/팀생성1.PNG" alt="" style={{width : "500px"}}/>
                <img src="/img/dotogether/team/팀생성2.PNG" alt="" style={{width : "500px"}}/>
                <p>-&gt; 요청 사용자의 속한 팀이 5팀 이상인지 검증</p>
                <p>-&gt; 검증 성공 시 팀 생성 + 팀원으로 저장</p>
            </ol>

            <h2>2. 팀 조회</h2>
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

        <Accordion title={'팀 신청 승인 관리 ★'}>
            <img src="/img/dotogether/팀승인관리.gif" alt="" />
            <h2>1. 팀 신청</h2>
            <ol type='a'>
                <li>Axios Post(/api/teams/join) 요청</li>
                <li>웹서버에서 응답 받은 로직 수행</li>
                <img src="/img/dotogether/team/팀신청1.PNG" alt="" style={{width : "550px"}}/>
                <img src="/img/dotogether/team/팀신청2.PNG" alt="" style={{width : "450px"}}/>
                <p>-&gt; 팀 존재 여부, 인원 초과 여부, 중복 참가 여부, 중복 신청 여부 확인 후 팀 신청 등록</p>
                <li>검증</li>
                <div>
                    <img src="/img/dotogether/team/팀신청4.PNG" alt="" style={{width : "300px"}}/>
                    <img src="/img/dotogether/team/팀신청3.PNG" alt="" style={{width : "300px"}}/>
                </div>
                <p>-&gt; 검증에 사용되는 쿼리문은 조건 표현식을 이용해 "true" or "false"로 반환</p>
            </ol>
            <h2>2. 팀 가입 승인</h2>
            <ol type='a'>
                <li>Axios Post(/api/teams/join-accept) 요청</li>
                <li>웹서버에서 응답 받은 로직 수행</li>
                <img src="/img/dotogether/team/팀가입승인1.PNG" alt="" style={{width : "650px"}}/>
                <img src="/img/dotogether/team/팀가입승인2.PNG" alt="" style={{width : "500px"}}/>
                <p>-&gt; 팀장 권한 확인 후, 인원 제한 및 참가자 조건 확인</p>
                <p>-&gt; 조건 충족 시 팀원으로 등록하고 참가 신청 삭제</p>
                <p>-&gt; 조건 불충족 시 신청 삭제 후 예외 발생</p>
            </ol>
        </Accordion>

        <Accordion title={'팀 업무 관리 ★★★'}>
            <img src="/img/dotogether/업무관리수정.gif" alt="" />
            <Accordion title={'웹 소켓 통신 연결'}>
                <ol type='a'>
                    <li>useWebSocket 훅을 사용한 웹 소켓 통신 요청</li>
                    <img src="/img/dotogether/chat/팀채팅1.PNG" alt="" style={{width : "600px"}}/>
                    <p>-&gt; accessToken을 포함한 WebSocket 주소로 채팅 서버에 연결 시도</p>
                    <li>WebSocketConfigurer를 구현</li>
                    <img src="/img/dotogether/chat/팀채팅2.PNG" alt="" style={{width : "600px"}}/>
                    <p>-&gt; 요청 경로에 맞는 핸들러 처리</p>
                    <p>-&gt; 모든 WebSocket 요청에 대해 WebSocketAuthInterceptor를 등록하여 JWT 기반 인증</p>
                    <p>-&gt; CORS 정책 설정</p>

                    <li>WebSocket 인증 인터셉터</li>
                    <img src="/img/dotogether/chat/팀채팅3-1.PNG" alt="" style={{width : "800px", marginBottom : "0px"}}/>
                    <img src="/img/dotogether/chat/팀채팅3-2.PNG" alt="" style={{width : "450px"}}/>
                    <p>-&gt; 요청시 넘어온 쿼리 파라미터에서 토큰 추출</p>
                    <p>-&gt; JWT 기반을 통해 사용자 인증</p>

                    <li>채팅 WebSocket 핸들러</li>
                    <img src="/img/dotogether/chat/팀채팅4.PNG" alt="" style={{width : "600px"}}/>
                    <p>-&gt; 클라이언트가 WebSocket 연결을 맺으면 해당 채팅방 ID를 기준으로 세션을 등록</p>
                    <p>-&gt; ConcurrentHashMap을 사용하여 채팅방 별 세션을 멀티 스레드 환경에서 안전하게 관리</p>
                    <p>-&gt; 채팅방 입장 시 roomId가 유효하지 않으면 연결 종료 처리</p>
                </ol>
            </Accordion>
            <h2>1. DnD를 이용한 업무 상태 수정</h2>
            <ol type='a'>
                <li>DnD 구현</li>
                <div style={{gap: "20px"}}>
                    <div style={{display: "flex", flexDirection : "column"}}>
                        <img src="/img/dotogether/work/업무상태수정1-1.PNG" alt="" style={{width : "300px"}}/>
                        <img src="/img/dotogether/work/업무상태수정1-2.PNG" alt="" style={{width : "300px"}}/>
                    </div>
                    <div style={{display: "flex", flexDirection : "column"}}>
                        <img src="/img/dotogether/work/업무상태수정2-1.PNG" alt="" style={{width : "400px"}}/>
                        <img src="/img/dotogether/work/업무상태수정2-2.PNG" alt="" style={{width : "300px"}}/>
                    </div>
                </div>
                <p>-&gt; react-dnd를 활용하여 작업 카드를 마우스로 드래그 가능하도록 구현</p>
                <p>-&gt; 드래그된 카드를 컬럼 영역에 드롭 시, 상태 변경 요청을 WebSocket으로 서버에 전송</p>
                
                <li>WebSocket 메시지 수신 및 브로드캐스트</li>
                <img src="/img/dotogether/work/업무상태수정3.PNG" alt="" style={{width : "600px"}}/>
                <p>-&gt; 서버는 <code>handleTextMessage()</code>를 통해 클라이언트로부터 받은 작업 메시지를 처리</p>
                <p>-&gt; 메시지 타입에 따라 작업 등록/수정/삭제/상태 변경 처리 후 결과 메시지를 생성</p>
                <p>-&gt; 같은 팀(room)의 모든 WebSocket 세션에 브로드캐스트하여 실시간 동기화</p>

                <li>업무 상태 수정 처리</li>
                <img src="/img/dotogether/work/업무상태수정4.PNG" alt="" style={{width : "600px"}}/>
                <p>-&gt; 팀이 존재하는지 검증, 요청 사용자가 팀에 소속된 팀원인지 검증</p>
                <p>-&gt; 유효성 검증에 실패하면 오류 메시지를 포함한 응답을 클라이언트에 전달</p>
                <p>-&gt; 유효성 검증 통과 시 업무 상태를 수정, 수정된 업무를 다시 조회하여 클라이언트에 반환</p>

                <li>업무 상태 수정 쿼리 (Optimistic Lock 적용)</li>
                <img src="/img/dotogether/work/업무상태수정5.PNG" alt="" style={{width: "250px"}}/>
                <p>-&gt; TB_TEAM_WORK 테이블의 STATUS, UPDATED_AT(현재 시간), VERSION(버전 번호)을 업데이트</p>
                <p>-&gt; WHERE 절에 WORK_ID와 VERSION을 함께 사용하여 동시성 문제를 방지 (Optimistic Lock 적용)</p>
                <p>-&gt; 웹소켓 요청이 병렬로 동시에 들어와도 VERSION 체크를 통해 안전하게 상태 변경 처리 가능</p>

                <li>메시지 처리: 상태 업데이트 및 에러 처리</li>
                <img src="/img/dotogether/work/업무상태수정6.PNG" alt="" style={{width: "400px"}}/>
                <img src="/img/dotogether/work/업무상태수정7.PNG" alt="" style={{width: "550px"}}/>
                <p>-&gt; 'statusUpdate' 타입으로 응답 시 이전 상태에 해당하는 작업을 제거하고, 현재 상태에 맞게 작업을 추가하여 리스트를 갱신</p>
                <p>-&gt; 로직 처리 실패 시(= type에 에러메시지 응답 시) 요청 사용자에게 에러 메시지 출력</p>
            </ol>
        </Accordion>
        <Accordion title={'팀 채팅 ★★'}>
            <img src="/img/dotogether/팀채팅.gif" alt="" />
            <Accordion title={'웹 소켓 통신 연결'}>
                <ol type='a'>
                    <li>useWebSocket 훅을 사용한 웹 소켓 통신 요청</li>
                    <img src="/img/dotogether/chat/팀채팅1.PNG" alt="" style={{width : "600px"}}/>
                    <p>-&gt; accessToken을 포함한 WebSocket 주소로 채팅 서버에 연결 시도</p>
                    <li>WebSocketConfigurer를 구현</li>
                    <img src="/img/dotogether/chat/팀채팅2.PNG" alt="" style={{width : "600px"}}/>
                    <p>-&gt; 요청 경로에 맞는 핸들러 처리</p>
                    <p>-&gt; 모든 WebSocket 요청에 대해 WebSocketAuthInterceptor를 등록하여 JWT 기반 인증</p>
                    <p>-&gt; CORS 정책 설정</p>

                    <li>WebSocket 인증 인터셉터</li>
                    <img src="/img/dotogether/chat/팀채팅3-1.PNG" alt="" style={{width : "800px", marginBottom : "0px"}}/>
                    <img src="/img/dotogether/chat/팀채팅3-2.PNG" alt="" style={{width : "450px"}}/>
                    <p>-&gt; 요청시 넘어온 쿼리 파라미터에서 토큰 추출</p>
                    <p>-&gt; JWT 기반을 통해 사용자 인증</p>

                    <li>채팅 WebSocket 핸들러</li>
                    <img src="/img/dotogether/chat/팀채팅4.PNG" alt="" style={{width : "600px"}}/>
                    <p>-&gt; 클라이언트가 WebSocket 연결을 맺으면 해당 채팅방 ID를 기준으로 세션을 등록</p>
                    <p>-&gt; ConcurrentHashMap을 사용하여 채팅방 별 세션을 멀티 스레드 환경에서 안전하게 관리</p>
                    <p>-&gt; 채팅방 입장 시 roomId가 유효하지 않으면 연결 종료 처리</p>
                </ol>
            </Accordion>

            <h2>1. 채팅 전송</h2>
            <ol type='a'>
                <li>채팅 메시지 전송</li>
                <img src="/img/dotogether/chat/채팅1.PNG" alt="" style={{width : "300px"}}/>
                <p>-&gt; 클라이언트가 입력한 내용을 포함한 메시지 객체를 구성</p>
                <p>-&gt; sendJsonMessage()를 통해 WebSocket 서버로 메시지 전송</p>
                <p>-&gt; 전송 후 입력창 초기화 및 본인 메시지 여부 상태값 설정</p>

                <li>WebSocket 메시지 수신 및 브로드캐스트</li>
                <img src="/img/dotogether/chat/채팅2.PNG" alt="" style={{width : "700px"}}/>
                <p>-&gt; 서버는 handleTextMessage()를 통해 클라이언트로부터 받은 메시지를 처리</p>
                <p>-&gt; 메시지 타입이 'send', 'update', 'delete' 중 하나일 경우 ChatService를 통해 처리 후 결과 메시지를 반환</p>
                <p>-&gt; 결과 메시지를 같은 채팅방의 모든 세션에 브로드캐스트</p>

                <li>채팅 메시지 저장 처리</li>
                <img src="/img/dotogether/chat/채팅3-1.PNG" alt="" style={{width : "600px"}}/>
                <img src="/img/dotogether/chat/채팅3-2.PNG" alt="" style={{width : "400px"}}/>
                <img src="/img/dotogether/chat/채팅3-3.PNG" alt="" style={{width : "450px"}}/>
                <p>-&gt; UUID를 생성해 메시지 고유 ID 생성</p>
                <p>-&gt; 빈 메시지인지, 메시지를 보내려는 사용자가 팀에 소속된 팀원인지 검증</p>
                <p>-&gt; 유효성 검증에 실패하면 오류 메시지를 포함한 응답을 클라이언트에 전달</p>
                <p>-&gt; 유효성 검증 통과 시 DB에 메시지를 저장하고, 저장된 메시지를 다시 조회하여 클라이언트에 반환</p>

                <li>채팅 메시지 전송 후 스크롤 자동 이동</li>
                <div>
                    <img src="/img/dotogether/chat/채팅4.PNG" alt="" style={{width : "350px"}}/>
                    <img src="/img/dotogether/chat/채팅5.PNG" alt="" style={{width : "380px"}}/>
                </div>
                <p>-&gt; WebSocket으로 수신한 메시지는 상태 배열 "messages"에 추가</p>
                <p>-&gt; 사용자가 스크롤을 거의 아래까지 내려본 상태라면 새 메시지 수신 시 자동 스크롤 이동</p>
                <p>-&gt; 내가 메시지를 보낸 경우(`isMine === true`)에는 강제로 최하단까지 스크롤 이동</p>
            </ol>
        </Accordion>
        <Accordion title={'Enum 기반 공통 예외 처리 구조 설계 ★'}>
            <ol type='a'>
                <li>예외 코드 관리(ErrorCode 정의)</li>
                <img src="/img/dotogether/enum/예외처리1.PNG" alt="" style={{width : "500px"}}/>
                <p>
                    → 비즈니스 로직에서 발생할 수 있는 예외 상황을 <code>ErrorCode</code> enum으로 정의해 코드와 메시지를 일관되게 관리할 수 있도록 구성
                </p>

                <li>사용자 정의 예외 클래스(CustomException)</li>
                <img src="/img/dotogether/enum/예외처리2.PNG" alt="" style={{width : "400px"}}/>
                <p> 
                    → <code>ErrorCode</code>를 인자로 받아 메시지와 코드를 설정할 수 있는 <code>CustomException</code> 클래스를 구현하여, 
                    예외를 직관적이고 구조적으로 처리
                </p>

                <li>전역 예외 처리기(GlobalExceptionHandler)</li>
                <img src="/img/dotogether/enum/예외처리3.PNG" alt="" style={{width : "550px"}}/>
                <p>
                    → <code>@RestControllerAdvice</code>를 활용해 전역에서 발생하는 <code>CustomException</code>을 통합적으로 처리하고, 
                    웹서버로 통일된 에러 응답
                </p>

                <li>예외 발생 예시</li>
                <img src="/img/dotogether/enum/예외처리4.PNG" alt="" style={{width : "450px"}}/>
                <p>
                    → 검증에 실패한 경우 정의된 에러코드 <code>MAX_USER_TEAMS_EXCEEDED</code>를 전달해 <code>CustomException</code>을 발생
                </p>
            </ol>
        </Accordion>
    </ul>
);

export default DoTogetherMainFunctions;