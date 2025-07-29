import Accordion from "../components/Accordion";

const CarlpionTroubleshooting = () => {
    return (
        <ul>
            <Accordion title={'PortOne 인증 오류 (401 Unauthorized)'}>
                <img src="/img/carlpion/trouble/문제.PNG" alt="" />
                <img src="/img/carlpion/trouble/문제0.PNG" alt="" style={{width : "800px"}}/>
                <h2>상황</h2>
                <p>
                    -&gt; PortOne의 토큰 발급 API(`/users/getToken`) 호출 시 401 Unauthorized 오류 발생<br />
                    -&gt; 오류 메시지에 body가 없다고 표시되며 인증 실패
                </p>

                <h2>원인 분석</h2>
                <img src="/img/carlpion/trouble/문제111.PNG" alt="" style={{width : "800px"}}/>
                <img src="/img/carlpion/trouble/문제101.PNG" alt="" />
                <img src="/img/carlpion/trouble/문제1.png" alt="" style={{width : "700px"}}/>
                <p>
                    -&gt; 요청 본문과 헤더를 담은 HttpEntity가 정상적으로 구성된 것처럼 보였으나<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;실제 요청 로그를 찍어보니 imp_key 값이 의도한 값과 다르게 설정되어 있음
                </p>

                <img src="/img/carlpion/trouble/문제4-0.PNG" alt="" style={{width : "400px"}}/>
                <img src="/img/carlpion/trouble/문제3.png" alt="" />
                <p>
                    -&gt; application.yml에 등록된 imp_key가 숫자 형태로 저장되어 다른 값으로 인식됨<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Spring이 key 값을 숫자로 파싱하면서 원래 의도한 문자열이 아닌 잘못된 값으로 바인딩된 것
                </p>

                <h2>문제 해결</h2>
                <img src="/img/carlpion/trouble/문제4.png" alt="" />
                <p>
                    -&gt; application.yml에서 portone.key 값을 반드시 따옴표로 감싸 문자열로 지정<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;예: <code>key: "05362***********"</code>
                </p>
            </Accordion>
            {/* <Accordion title={'공영주차장 API 주차장 조회'}></Accordion> */}
        </ul>
    );
}

export default CarlpionTroubleshooting;