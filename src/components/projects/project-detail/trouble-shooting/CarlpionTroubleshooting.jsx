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
            <Accordion title={'공영주차장 API 주차장 조회 오류'}>
                <img src="/img/carlpion/trouble/주차장문제2.png" alt="" />
                <h2>상황</h2>
                <p>
                    -&gt; 공영주차장 정보를 OpenAPI에서 조회하는 과정에서 총 9,000건의 데이터를 한 번에 요청<br />
                    -&gt; 애플리케이션 실행 시 <code>JsonParseException</code>이 발생하며 데이터 파싱에 실패
                </p>

                <h2>원인 분석</h2>
                <img src="/img/carlpion/trouble/주차장문제1.png" alt="" style={{width : "700px"}}/>
                <p>
                    -&gt; 해당 API는 한 번에 최대 1,000건까지만 조회할 수 있도록 제한되어 있었음<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;그러나 start/end 인덱스를 1~9000으로 지정하여 과도한 데이터 요청<br />
                    -&gt; 정상적인 JSON 응답 대신 오류 페이지(HTML)가 반환되었고<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jackson ObjectMapper가 JSON으로 파싱을 시도하며 'Unexpected character ('&lt;' (code 60))' 예외 발생
                </p>

                <h2>문제 해결</h2>
                <img src="/img/carlpion/trouble/주차장문제3.png" alt="" style={{width : "400px"}}/>
                <img src="/img/carlpion/trouble/주차장문제4.png" alt="" style={{width : "600px"}}/>
                <p>
                    -&gt; API의 최대 조회 건수(1,000건)를 고려하여 start/end 인덱스를 계산하는 로직으로 수정<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;데이터를 1,000건 단위로 여러 번 나누어 요청하고, 각 응답을 합쳐 전체 데이터를 처리하도록 개선
                </p>
            </Accordion>
        </ul>
    );
}

export default CarlpionTroubleshooting;