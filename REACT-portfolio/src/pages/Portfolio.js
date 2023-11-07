import React from "react";
//import GithubLogoLink from "../components/GithubLogoLink";

function Portfolio() {
  return (
    <section className="portfolio row" id="workSection">

      <div className="left col">
        <a href = "https://aaronh-o.github.io/tier-ranker/">
          <section className = "card" id = "firstCard">
            <h1 className = "cardTag">Tier Ranker</h1>
            
          </section>
        </a>
        <a href = "https://powerful-stream-45360-1940a41a4b54.herokuapp.com/login">
          <section className = "card">
            <h1 className = "cardTag">Cro-X</h1>
          </section>
        </a>
        <a href = "https://evan-pieper.github.io/Code-Quiz/">
          <section className = "card">
            <h1 className = "cardTag">Placeholder</h1>
          </section>
        </a>
      </div>
      <div className="right col">
        <a href = "https://spellcast-d41ffbdf0b5f.herokuapp.com/">
          <section className = "card">
            <h1 className = "cardTag">Spell/Craft</h1>
          </section>
        </a>
        <a href = "https://github.com/evan-pieper">
          <section className = "card">
            <h1 className = "cardTag">Placeholder</h1>
          </section>
        </a>
        <a href = "https://github.com/evan-pieper">
          <section className = "card">
            <h1 className = "cardTag">Placeholder</h1>
          </section>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;