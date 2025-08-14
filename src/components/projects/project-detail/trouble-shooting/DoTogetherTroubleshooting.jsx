import React from 'react';
import Accordion from '../components/Accordion';

const DoTogetherTroubleshooting = () => (
    <ul>
        <Accordion title={'웹 소켓 통신 동시성 문제'}>
            <img src="/img/dotogether/trouble/웹소켓_동시성문제.gif" alt="" />
            <h2>상황</h2>
            <p>
                -&gt; 웹 소켓 통신에서의 상황 <br />
                -&gt; 여러 사용자가 <b>동시에</b> 같은 업무를 드래그하여 위치를 변경(상태를 변경) 요청<br />
                -&gt; 이때 하나의 요청만 반영됨 + 같은 업무가 중복해서 나타나는 문제 발생
            </p>

            <h2>원인 분석</h2>
           <p>
                -&gt; 웹 소켓 통신은 서버에서 요청을 <b>병렬적으로</b> 처리하기 때문에, <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;동일한 업무에 대한 상태 변경 로직이 <b>거의 동시에 실행될 수 있음</b><br />
                -&gt; 기존에는 업무 상태를 단순히 update하는 방식으로 처리했기 때문에, <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>요청 순서에 따라 마지막 요청만 반영됨</b><br />
                -&gt; 하지만 클라이언트는 웹 소켓 응답을 받아 그대로 UI에 반영하므로, <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>중간에 반영 실패한 요청도 UI에는 적용되어 보이는 현상 발생</b>
            </p>

            <h2>문제 해결</h2>
            <div className='trouble'>
                <img src="/img/dotogether/trouble/문제코드.PNG" alt="" style={{width : "300px"}}/>
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#111111"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                <img src="/img/dotogether/work/업무상태수정5.PNG" alt="" style={{width: "280px"}}/>
            </div>
            <p>
                -&gt; <b>낙관적 잠금(Optimistic Locking)</b> 방식을 도입하여 해결<br />
                -&gt; 상태 변경 시, 해당 업무의 현재 버전 번호를 함께 전달하고 <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>DB에서 상태 업데이트 시점에도 버전을 비교</b>하여 <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>동일할 경우에만 업데이트가 되도록 처리</b><br />
                -&gt; 이렇게 하면 <b>최초 요청 하나만 성공하고</b>, 나머지는 실패하여 예외 처리됨<br />
                -&gt; 실패한 요청은 <b>예외 메시지를 응답</b>
            </p>
            <h2>배운 점</h2>
            <p>
                - 실시간 웹소켓 환경에서는 <b>동시성 문제</b>가 언제든지 발생할 수 있으며, <br />
                &nbsp;&nbsp;&nbsp;&nbsp;단순한 update 로직만으로는 <b>데이터 무결성</b>을 보장할 수 없다는 것을 깨달음<br /><br />

                - <b>낙관적 잠금(Optimistic Locking)</b>을 통해 <b>충돌 제어를 DB 차원에서 처리</b>할 수 있었고, <br />
                &nbsp;&nbsp;&nbsp;&nbsp;비즈니스 로직을 더 안정적으로 설계하는 방법을 익힘<br /><br />

                - 또한, <b>UI는 서버 응답에 기반하여 신뢰성 있게 동작해야 함</b>을 인지했고, <br />
                &nbsp;&nbsp;&nbsp;&nbsp;성공한 응답만 클라이언트에 반영하도록 처리하는 중요성을 배움
            </p>
        </Accordion>
        <Accordion title={'웹 소켓 통신 연결 문제'}>
            <img src="/img/dotogether/trouble/에러코드1.PNG" alt="" />
            <h2>상황</h2>
            <p>
                -&gt; ws://localhost:80/ws/chat/roomId?token=accessToken 주소로 <b>웹 소켓 연결 시도</b><br />
                -&gt; WebSocket connection to 'ws://...' 오류 발생<br />
                -&gt; 서버 console에는 아무런 에러도 나타나지 않음
            </p>

            <h2>원인 분석</h2>
            <img src="/img/dotogether/trouble/에러코드2.PNG" alt="" style={{width : "500px"}}/>
            <img src="/img/dotogether/trouble/에러코드3.PNG" alt="" style={{width : "600px"}}/>
            <img src="/img/dotogether/trouble/에러코드4.PNG" alt="" style={{width : "500px"}}/>
            <p>
                -&gt; <b>onClose 이벤트로 에러 코드 1006</b> 확인됨 (비정상 종료)
            </p>


            <h2>문제 해결</h2>
            <p>
                -&gt; 일반 HTTP 요청이 아니라서 별도 보안 설정이 필요 없을 거라고 생각했지만,<br />
                &nbsp;&nbsp;&nbsp;Spring Security는 WebSocket handshake 과정도 보호 대상에 포함<br /><br />
                
                -&gt; 다음과 같이 보안 설정에 WebSocket 경로를 예외 처리하여 문제 해결<br />
                &nbsp;&nbsp;&nbsp;<code>.requestMatchers("/ws/**").permitAll()</code>
            </p>
            <img src="/img/dotogether/trouble/에러코드5.PNG" alt="" style={{width : "600px"}}/>
        </Accordion>

        <Accordion title={'@Transactional로 인한 트랜잭션 롤백 문제'}>
            <img src="/img/dotogether/trouble/트랜잭션문제.gif" alt="" />

            <h2>상황</h2>
            <img src="/img/dotogether/trouble/트랜잭션문제2.png" alt="" style={{width : "600px"}}/>
            <p>
                -&gt; 팀원이 꽉 찼거나, 신청자가 이미 가입된 팀 수를 초과한 경우<br />
                -&gt; 검증에 걸리면 <code>deleteTeamApplication</code>로 신청 기록을 삭제한 뒤 예외를 발생시킴<br />
                -&gt; 하지만 실제로는 <b>신청 기록이 삭제되지 않고 계속 남아 있는 문제</b> 발생
            </p>

            <h2>원인 분석</h2>
            <img src="/img/dotogether/trouble/트랜잭션문제1.png" alt="" style={{width : "600px"}}/>
            <p>
                -&gt; 신청 검증을 통과하면 <code>팀원 추가</code>와 <code>신청 기록 삭제</code> 두 개의 쿼리가 실행됨<br />
                -&gt; 이 두 작업은 데이터의 정합성과 원자성을 보장하기 위해 <code>@Transactional</code>로 묶어야 함<br />
                -&gt; 그러나 <b>@Transactional의 특성상 예외 발생 시 전체 작업이 롤백</b>되어<br />
                &nbsp;&nbsp;&nbsp;<code>deleteTeamApplication</code> 역시 함께 롤백됨 → 신청 기록이 남게 됨
            </p>

            <h2>문제 해결</h2>
            <p>
                -&gt; 이 문제를 해결하기 위한 방법은 크게 두 가지가 있음:
            </p>

            <p>
                <b>① 특정 예외 발생 시 롤백되지 않도록 설정</b><br />
                &nbsp;&nbsp;&nbsp;- <code>@Transactional(noRollbackFor = DeleteExclusiveException.class)</code>와 같은 방식 사용<br />
                &nbsp;&nbsp;&nbsp;- <code>deleteTeamApplication()</code> 호출 전용 예외를 따로 정의하고, 그 예외는 롤백 대상에서 제외<br />
                &nbsp;&nbsp;&nbsp;- 단점: <b>비즈니스 로직에서 일부 예외만 롤백 제외 처리하기 위한 예외 설계가 필요</b>
            </p>

            <p>
                <b>② 트랜잭션을 분리하여 처리 (선택한 방식)</b><br />
                &nbsp;&nbsp;&nbsp;- <code>deleteTeamApplication()</code> 메서드를 별도의 클래스로 분리<br />
                &nbsp;&nbsp;&nbsp;- <code>@Transactional(propagation = Propagation.REQUIRES_NEW)</code>로 <b>독립적인 트랜잭션</b>으로 동작하도록 설정<br />
                &nbsp;&nbsp;&nbsp;- 상위 트랜잭션에서 예외가 발생해도, <b>신청 기록 삭제는 롤백되지 않고 그대로 커밋됨</b>
            </p>

            <img src="/img/dotogether/trouble/트랜잭션문제3.png" alt="" style={{width : "600px"}}/>
            <img src="/img/dotogether/trouble/트랜잭션문제4.png" alt="" style={{width : "600px"}}/>
            <p>
                -&gt; 위 두 가지 방법을 비교한 결과, <b>두 번째 방식인 트랜잭션 분리 방식</b>을 선택함<br />
                -&gt; 트랜잭션의 전파 속성을 분리함으로써, <b>예외 발생 여부와 관계없이 신청 기록 삭제 쿼리는 항상 커밋</b>되도록 처리할 수 있었음<br />
                -&gt; 또한 불필요한 커스텀 예외 클래스를 정의하지 않아도 되어 <b>도메인 설계를 단순하고 명확하게 유지</b>할 수 있었음
            </p>
        </Accordion>

        <Accordion title={'무한 스크롤 조회 시 정렬 문제'}>
            <img src="/img/dotogether/trouble/무한스크롤 조회 문제.gif" alt="" />
            <h2>상황</h2>
             <p>
                무한 스크롤 방식으로 팀 목록을 10개씩 조회하도록 구현했으나, <br />
                첫 번째 10개만 정상적으로 불러오고 이후 스크롤을 내렸을 때 추가 데이터가 로딩되지 않는 문제가 발생<br />
                또한, 생성일 기준 정렬은 되어 있었지만 중간에 일부 데이터가 누락되어 조회 순서에 구멍이 생기는 현상도 발견
            </p>

            <h2>원인 분석</h2>
            <img src="/img/dotogether/trouble/조회1.PNG" alt="" style={{width : "600px"}}/>
            <p>
                Oracle의 <code>ROWNUM &lt;= 10</code> 조건이 정렬 이전에 먼저 적용되어, 정렬이 되지 않은 상태에서 상위 10개만 반환되고 있었습니다.<br />
                이로 인해 <strong>정렬된 결과의 다음 페이지</strong>를 정상적으로 조회하지 못하게 되고, 일부 데이터가 누락되는 현상이 발생했습니다.
            </p>


            <h2>문제 해결</h2>
            <img src="/img/dotogether/trouble/조회2.PNG" alt="" style={{width : "600px"}}/>
            <p>
                <code>ROWNUM</code>을 정렬 이후 적용하기 위해 <code>서브쿼리</code>를 사용하여 먼저 정렬된 결과를 감싼 뒤 그 결과에 대해 <code>ROWNUM &lt;= 10</code>을 적용하도록 쿼리를 수정했습니다. <br />
                또한, <code>lastTimeStamp</code>를 기준으로 정렬된 데이터에서 이전 데이터만 조회하도록 처리해 무한 스크롤이 정상 동작하도록 수정했습니다.
            </p>
        </Accordion>
    </ul>
);

export default DoTogetherTroubleshooting;