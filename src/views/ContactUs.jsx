export default function ContactUs() {
  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      {/* Form to capture user's name, email, and message */}
      <form>
        {/* Input field for the user's name */}
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Enter your name" 
          required // This field is mandatory
        />

        {/* Input field for the user's email */}
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Enter your email" 
          required // This field is mandatory
        />

        {/* Textarea for the user's message */}
        <label htmlFor="message">Message:</label>
        <textarea 
          id="message" 
          name="message" 
          rows="4" 
          placeholder="Write your message here..." 
          required // This field is mandatory
        ></textarea>

        {/* Submit button to send the message */}
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
