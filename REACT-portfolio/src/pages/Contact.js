function Contact() {
    return (
      <section className="contact col" id="contactSection">
        <form>
          <div className="form-group">
            <label htmlFor="nameInput">Name</label>
            <input type="text" className="form-control" id="nameInput" placeholder="Name"></input>
          </div>
          <div className="form-group">
            <label htmlFor="emailInput">Email address</label>
            <input type="email" className="form-control" id="emailInput" placeholder="example@email.com"></input>
          </div>
        </form>
      </section>
    );
}

export default Contact;