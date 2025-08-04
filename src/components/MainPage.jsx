import About from "./about/About";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

const MainPage = () =>{
    return(
        <main className="main-page">
            <About/>
            <Skills/>
            <Projects/>
        </main>
    )
}
export default MainPage;