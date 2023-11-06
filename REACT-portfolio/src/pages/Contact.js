function Contact() {
  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form action="your-server-side-handler" method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required></input>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required></input>

        <label htmlFor="phone">Callback Number</label>
        <input type="tel" id="phone" name="phone" required></input>

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;