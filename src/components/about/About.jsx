import './About.css';

const About = () =>{
    return(
        <section id='about'>
            <h1 className="title">About Me</h1>
            <div className="container">
                <div className="profile"></div>

                <div className="self-introduce">
                    <h2 className="name">백엔드 개발자 최윤서입니다.</h2>
                    <h4 className="introduce">
                        함께 일 하고 싶은 개발자,<br/>
                        뭐시기 저시기 요롷고롬 저렇고롬
                    </h4>
                    <div className="sub-intoroduce">
                        <li>aaaaaaaaaaaaaaaaaaaaa</li>
                        <li>bbbbbbbbbbbbbbbbbbbb</li>
                        <li>ccccccccccccccccccccccccc</li>
                        <li>dddddddddddddddddddddddddd</li>
                    </div>
                </div>

                <div className="right">
                    <div className="contact">
                        <div className="birth">
                            <p></p>
                        </div>
                    </div>
                    <div className="info-box">

                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;