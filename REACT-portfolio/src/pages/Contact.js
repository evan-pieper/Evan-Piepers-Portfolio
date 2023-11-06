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
          <div className="form-group">
            <label htmlFor="phoneInput">Phone Number</label>
            <input type="tel" className="form-control" id="phoneInput" placeholder="123-456-7890"></input>
          </div>
          <div className="form-group">
            <label htmlFor="subjectInput">Subject</label>
            <input type="text" className="form-control" id="subjectInput" placeholder="Subject"></input>
          </div>
          <div className="form-group">
            <label htmlFor="messageInput">Message</label>
            <textarea className="form-control" id="messageInput" rows="3"></textarea>
          </div>
        </form>
      </section>
    );
}

export default Contact;