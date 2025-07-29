import Accordion from "../components/Accordion";

const CarlpionMainFunctions = () => {
    return (
        <ul>
            <Accordion title={'차량 모델 관리 ★★'}>
                <img src="/img/carlpion/차량모델관리.gif" alt="" />
                <h2>1. 차량 모델 추가</h2>
                <ol type='a'>
                    <li>Axios Post(/admin/model) 요청</li>
                    <img src="/img/carlpion/model/차량모델추가1.PNG" alt="" style={{width : "400px"}}/>
                    <p>-&gt; 이미지 파일과 차량 관련 필드들을 <b>multipart/form-data 형식</b>으로 포함하여 요청</p>

                    <li>서버에서 차량 모델 추가 처리</li>
                    <img src="/img/carlpion/model/차량모델추가2.PNG" alt="" style={{width : "750px"}}/>
                    <img src="/img/carlpion/model/차량모델추가3.PNG" alt="" style={{width : "400px"}}/>
                    <p>-&gt; 차량 정보는 <code>@ModelAttribute</code>로 바인딩되며, 파일은 <code>@RequestParam</code>으로 따로 추출</p>
                    <p>-&gt; <code>@Valid</code>와 DTO에 정의된 <code>@NotBlank</code>, <code>@Positive</code> 등의 제약 조건을 통해 <b>자동 유효성 검증</b> 수행</p>

                    <li>서비스 계층에서 차량 모델 저장 처리</li>
                    <img src="/img/carlpion/model/차량모델추가4.PNG" alt="" style={{width : "550px"}}/>
                    <img src="/img/carlpion/model/차량모델추가5.PNG" alt="" style={{width : "650px"}}/>
                    <p>-&gt; 이미지 파일 존재 여부 및 차량 모델 중복 여부 검증</p>
                    <p>-&gt; 검증 통과 시 Firebase Storage에 파일을 저장하고 저장된 파일명을 반환</p>
                    <p>-&gt; 차량 모델 정보를 DB에 저장</p>
                </ol>

                <h2>2. 차량 모델 삭제</h2>
                <ol type='a'>
                    <li>Axios Delete(/admin/model) 요청</li>

                    <li>서버에서 차량 모델 삭제 처리 및 관련 이미지 파일 삭제</li>
                    <img src="/img/carlpion/model/차량모델추가1.PNG" alt="" style={{width : "400px"}}/>
                    <img src="/img/carlpion/model/차량모델추가2.PNG" alt="" style={{width : "650px"}}/>
                    <p>-&gt; 요청받은 차량 모델이 존재하는지, 해당 차량 모델로 등록된 운영 중인 렌트 차량이 있는지 검증</p>
                    <p>-&gt; 운영 중인 차량이 없으면 DB에서 차량 모델 삭제</p>
                    <p>-&gt; 차량 모델 삭제 시, Firebase Storage에서 해당 이미지 파일 삭제 로직 실행</p>
                </ol>
            </Accordion>
            <Accordion title={'운용 차량 관리 ★★'}>
                <img src="/img/carlpion/운용차량관리.gif" alt="" />
                <h2>1. 운용 차량 추가</h2>
                <ol type='a'>
                    <li>운용 차량의 위치(주차장ID)를 조회</li>
                    <img src="/img/carlpion/car/운용차량추가.PNG" alt="" style={{width : "700px"}}/>
                    <p>-&gt; Axios Get(/admin/parking/&#123;search&#125;) 요청</p>
                    <img src="/img/carlpion/car/운용차량추가2.PNG" alt="" style={{width : "450px"}}/>
                    <img src="/img/carlpion/car/운용차량추가3.PNG" alt="" style={{width : "450px"}}/>
                    <p>-&gt; 입력된 주소 문자열로 주차장 정보를 조회하여 주차장 ID, 이름, 주소, 위도·경도 데이터를 반환</p>

                    <li>Axios Get(/admin/car) 요청</li>
                    <img src="/img/carlpion/car/운용차량추가4.PNG" alt="" style={{width : "400px"}}/>
                    <p>-&gt; 차량 모델 ID, 차량 번호, 주차장 ID 정보를 포함한 저장 요청 전송</p>

                    <li>운용 차량 정보 저장 처리</li>
                    <img src="/img/carlpion/car/운용차량추가5.PNG" alt="" style={{width : "500px"}}/>
                    <p>-&gt; 차량 모델 존재 여부 및 차량 번호 중복 여부 검증</p>
                    <p>-&gt; 검증 통과 시 운용 차량 정보를 DB에 저장</p>
                </ol>
            </Accordion>
            <Accordion title={'렌트 차량 조회 ★'}>
                <img src="/img/carlpion/차량조회.gif" alt="" />
                <Accordion title={'렌트 차량 검색'}>
                    <img src="/img/carlpion/렌트차량검색.gif" alt="" />
                    <ol type='a'>
                        <li>렌트 가능한 대여일 옵션 초기화</li>
                        <img src="/img/carlpion/search/대여일1.PNG" alt="" style={{width : "400px"}}/>
                        <img src="/img/carlpion/search/대여일2.PNG" alt="" style={{width : "600px"}}/>
                        <p>-&gt; `useEffect`를 통해 컴포넌트 마운트 시 `getNextTenDays()` 함수 실행<br />
                        - 오늘 날짜부터 10일 간의 날짜를 value/label 형식으로 생성해 `rentalDates`에 저장</p>

                        <li>선택된 대여일 기준으로 시간 옵션 설정</li>
                        <img src="/img/carlpion/search/대여일3.PNG" alt="" style={{width : "500px"}}/>
                        <img src="/img/carlpion/search/대여일4.PNG" alt="" style={{width : "550px"}}/>
                        <p>-&gt; 현재 시간 기준 이후 시간들만 추출하여 `getRentalHour()` 함수로 렌트 가능 시간 옵션 생성<br />
                        - 예: 현재 13시라면, 14시부터 23시까지가 선택지</p>

                        <li>선택된 대여일 기준으로 반납일 옵션 설정</li>
                        <img src="/img/carlpion/search/반납일1.PNG" alt="" style={{width : "500px"}}/>
                        <p>-&gt; `rentalDate`와 `rentalHour`가 모두 선택되면 `getNextTenDays()` 함수로 반납일 목록 설정<br />
                        - 대여일 이후 최대 10일까지 선택 가능하도록 구성</p>

                        <li>선택된 반납일 기준으로 반납 시간 옵션 설정</li>
                        <img src="/img/carlpion/search/반납일2.PNG" alt="" style={{width : "500px"}}/>
                        <img src="/img/carlpion/search/반납일3.PNG" alt="" style={{width : "500px"}}/>
                        <p>-&gt; 반납일이 대여일과 같다면 대여 시간 이후만 선택 가능<br />
                        - 다르면 00시부터 23시까지 전체 시간 선택 가능<br />
                        - 이를 위해 `getReturnHour()` 함수에서 조건 분기 처리</p>
                    </ol>
                </Accordion>
                <h2>1. 렌트 차량 조회</h2>
                <ol type='a'>
                    <li>Axios Post(/rents) 요청</li>
                    <img src="/img/carlpion/search/렌트차량조회1.PNG" alt="" style={{width : "500px"}} />
                    <p>-&gt; 사용자가 날짜, 시간, 위치를 입력하였는지 검증</p>
                    <p>-&gt; 검증 성공 시 Axios로 백엔드에 요청</p>

                    <li>렌트 차량 조회 서비스 (백엔드)</li>
                    <img src="/img/carlpion/search/렌트차량조회3.PNG" alt="" style={{width : "750px"}} />
                    <p>-&gt; 대여일과 반납일이 존재하는지 검증</p>
                    <p>-&gt; 검증 후 `getRentCarListByAddr` 메서드로 차량 목록 조회</p>
                    <p>-&gt; Firebase Storage에 저장된 이미지를 조회 하기 위해 `fileService`로 서명된 URL로 변환하여 제공</p>

                    <p>
                        <p>-&gt; ERD 기반으로 차량, 모델, 주차장, 예약 정보가 하나의 객체로 구성</p>
                        <p>-&gt; DTO는 중첩된 구조로 연관 데이터를 통합</p>
                    </p>

                    <li>렌트 차량 SQL 조회 쿼리</li>
                    <img src="/img/carlpion/search/렌트차량조회6.PNG" alt="" />
                    <img src="/img/carlpion/search/렌트차량조회4.PNG" alt="" style={{width : "700px"}} />
                    <p>-&gt; ERD 구조에 맞춰 DTO가 중첩된 객체 형태로 설계</p>
                    <p>-&gt; 이를 위해 myBatis의 `resultMap`에서 `association`을 활용해 각 관련 DTO를 효과적으로 매핑</p>
                    <p>-&gt; 한 번의 쿼리로 차량 관련 모든 정보 조회 가능</p>
                    <img src="/img/carlpion/search/렌트차량조회5.PNG" alt="" style={{width : "500px"}} />
                    <p>-&gt; 차량, 모델, 주차장 정보를 조인하여 조회</p>
                    <p>-&gt; 예약된 차량은 제외해 가용 차량만 반환</p>
                    <p>-&gt; 예약은 서브쿼리로 처리하며 차량 상태는 'Y'인 것(= 운용 중인 차량)만 조회</p>

                </ol>
            </Accordion>
            <Accordion title={'차량 렌트(결제) ★★★'}>
                <img src="/img/carlpion/차량렌트.gif" alt="" />
                <h2>1. 차량 렌트(결제)</h2>
                <ol type='a'>
                    <li>PortOne API 결제 흐름도</li>
                    <img src="/img/carlpion/rent/결제 흐름도.webp" alt="" />
                    <p>-&gt; PortOne API를 사용한 결제는 보안을 위해 <b>사전 검증</b>과 <b>사후 검증</b>이 핵심</p>
                    <p>-&gt; 사전 검증 단계에서는 차량 예약 가능 여부, 중복 예약 여부, 결제 금액의 정확성 등을 서버에서 먼저 확인하고, PortOne의 <b>prepare API</b>로 사전 등록</p>
                    <p>-&gt; 사후 검증 단계에서는 결제 완료 후 전달받은 <b>imp_uid</b>로 결제 금액, 결제 상태를 서버에서 다시 확인하여 <b>위변조를 방지</b></p>

                    <li>사전 검증</li>
                    <img src="/img/carlpion/rent/사전검증1.PNG" alt="" style={{width : "450px"}} />
                    <p>-&gt; 클라이언트에서는 차량 번호, 대여/반납 시간, merchantUid(주문번호)를 포함해 결제 준비 요청을 서버로 전송</p>
                    <img src="/img/carlpion/rent/사전검증2.PNG" alt="" style={{width : "700px", marginTop : "20px"}} />
                    <img src="/img/carlpion/rent/사전검증3.PNG" alt="" style={{width : "700px"}} />
                    <p>-&gt; 서버에서는 차량의 기본요금(rentPrice), 시간당 요금(hourPrice)을 DB에서 조회한 후, 요청받은 대여/반납 시간을 기준으로 총 금액을 계산</p>
                    <img src="/img/carlpion/rent/사전검증4.PNG" alt="" style={{width : "700px", marginTop : "20px"}} />
                    <p>-&gt; 계산된 금액과 merchantUid를 매개변수로 결제 사전 등록 메서드 호출</p>
                    <img src="/img/carlpion/rent/사전검증5.PNG" alt="" style={{width : "700px", marginTop : "20px"}} />
                    <img src="/img/carlpion/rent/사전검증6.PNG" alt="" style={{width : "700px"}} />
                    <p>-&gt; 이때 필요한 PortOne 인증 토큰은 restAPIKey와 secretKey로 <b>/users/getToken</b> API를 호출하여 발급</p>
                    <p>-&gt; 이를 Authorization 헤더에 포함시켜 PortOne의 prepare API에 결제 사전 등록 요청</p>

                    <li>사후 검증</li>
                    <img src="/img/carlpion/rent/사후검증1.PNG" alt="" style={{width : "700px"}} />
                    <p>-&gt; 클라이언트에서는 결제 완료 후 impUID, merchantUid, 대여/반납 시간 등과 함께 결제 완료 요청을 서버로 전송</p>

                    <img src="/img/carlpion/rent/사후검증2.PNG" alt="" style={{width : "700px", marginTop : "20px"}} />
                    <img src="/img/carlpion/rent/사후검증3.PNG" alt="" style={{width : "700px"}} />
                    <p>-&gt; 서버에서는 impUID를 매개변수로 PortOne의 <code>/payments/&#123;imp_uid&#125;</code> API를 호출하여 결제 금액(paidAmount)과 결제 상태(status)를 조회</p>

                    <img src="/img/carlpion/rent/사후검증4.PNG" alt="" style={{width : "700px", marginTop : "20px"}} />
                    <p>-&gt; DB에서 차량의 rentPrice, hourPrice를 조회하고, 요청받은 대여/반납 시간을 기준으로 총 금액(expectedPrice) 계산</p>
                    <p>-&gt; paidAmount와 expectedPrice를 비교하고, 결제 상태(status)가 "paid"인지 검증</p>
                    <img src="/img/carlpion/rent/사후검증5.PNG" alt="" style={{width : "700px", marginTop : "20px"}} />
                    <p>-&gt; 검증이 완료되면 예약 정보를 DB에 저장하고, 실패 시 예외 발생 또는 결제 취소 처리</p>
                </ol>


                
            </Accordion>
        </ul>
    );
}

export default CarlpionMainFunctions;