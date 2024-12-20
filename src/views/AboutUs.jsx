export default function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-container">
        <h2>About Us</h2>
        <div className="intro">
          {/* Section for the history and mission of the organization */}
          <h3>Our History</h3>
          <p>
            Welcome to <span className="highlight">Purrfect Adoption</span>! We are dedicated to finding loving homes for our furry friends. Our mission is to connect adorable cats with their forever families while creating a better world for animals.
          </p>
        </div>

        <div className="team-section">
          {/* Section introducing the team members */}
          <h3>Our Team</h3>
          <div className="team-members">
            <div className="team-member">
              <img
                src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/469221949_553786720893532_179943540424191887_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=o5kj_2IM9NsQ7kNvgEwDOQb&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=AoszRz_k1A_VZsXd2H7sOcw&oh=00_AYBrri16yk6oGRTcXVWNekWuDXo6QvdOd4vbUKSlrzDQzQ&oe=676AC973"
                alt="Rownok Jahan Mowmita"
                className="team-photo"
              />
              <p><strong>Name:</strong> Rownok Jahan</p>
              <p><strong></strong> Founder</p>
            </div>
            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=200"
                alt="Volunteer 1"
                className="team-photo"
              />
              <p><strong>Name:</strong> Alex Johnson</p>
              <p><strong></strong> Volunteer</p>
            </div>
            <div className="team-member">
              <img
                src="https://i.pinimg.com/736x/f6/11/9c/f6119c0cf327c7ac876eb3de61a94dcd.jpg"
                alt="Volunteer 2"
                className="team-photo"
              />
              <p><strong>Name:</strong> Jamie Lee</p>
              <p><strong></strong> Coordinator</p>
            </div>
          </div>
        </div>

        <div className="closing">
          {/* Section for the mission statement */}
          <h3>Our Mission</h3>
          <p>
            Thank you for visiting our website! Together, let’s make a difference and provide every cat with the care and love they deserve.
          </p>
        </div>
      </div>
    </section>
  );
}
