function Portfolio() {
  return (
    <section className="work col" id="workSection">

      <div className="left col">
        <a href = "https://aaronh-o.github.io/tier-ranker/">
          <section className = "card" id = "firstCard">
            <h1 className = "cardTag">First Project</h1>
          </section>
        </a>
        <a href = "https://powerful-stream-45360-1940a41a4b54.herokuapp.com/login">
          <section className = "card">
            <h1 className = "cardTag">Second Project</h1>
          </section>
        </a>
      </div>
      <div className="right col">
        <a href = "https://evan-pieper.github.io/Code-Quiz/">
          <section className = "card">
            <h5 className = "cardTag">Third Project (Need to finish)</h5>
          </section>
        </a>
        <a href = "https://github.com/evan-pieper">
          <section className = "card">
            <h5 className = "cardTag">Placeholder</h5>
          </section>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;