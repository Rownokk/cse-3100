export default function ContactUs() {
    return (
      <section className="contact-us">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
  
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Write your message here..."
            required
          ></textarea>
  
          <button type="submit">Send Message</button>
        </form>
      </section>
    );
  }
  