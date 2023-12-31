import aboutMePic from "../styles/images/aboutMePic.jpg";
function AboutMe() {
    return (
      <section className="col" id="aboutMeSection">
        {/* placeholder for about me*/}
        <h2>About Me</h2>
        <img src={aboutMePic} alt="Evan Pieper's Headshot" className="picture" id = "aboutMePic"/>
        <p>I'm a Full-stack web developer with a background in Environmental Science and Construction. From 2016-2021 I attended the University of California, Santa Barbara (UCSB) where I received a Bachelor of Science in Environmental Studies. While attending UCSB, I also studied Computer Science and Microbiology. After graduating, I continued to pursue my passion for coding. To this end, I joined a Full-stack web development coding bootcamp through the University of California, Berkely. </p>

        <p>After being certified as a Full-stack developer, I continued to hone my skills through personal projects, and freelance web development. You can see examples of my work on the portfolio section of this website.</p>

        <p>In addition to Full-stack development, I'm also passionate about both electronic and analog game development. I'm currently working on my first full-scale indie game tentatively titled “Nexus Clash”. Nexus Clash is a single player jrpg inspired card game. More info about the future of Nexus-Clash to come!</p>
      </section>
    );
}

export default AboutMe;