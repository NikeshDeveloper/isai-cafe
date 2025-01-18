import React from 'react';
import './LandingPage.css'; // Import the CSS file

// The landing page component
const LandingPage = () => {
  const handleGetLocation = () => {
    window.open('https://maps.app.goo.gl/RSu57dTdWzMgSAf3A', '_blank');
  };

  const handlePlaceOrder = () => {
    window.open('https://wa.me/c/919489210861', '_blank');
  };

  return (
    <div className="landing-page">
      <header id="landing-header">
        {/* Logo image */}
        <img src="shop-logo.png" alt="Isai Cafe Logo" />
        <h1>Welcome to Our  Cafe!</h1>
      </header>

      <section id="main-content">
        <h2 id="main-subheading" className="typewriter">Delicious Coffee and Pastries Await You</h2>
        <p id="main-description">Come and relax in our cozy ambiance while enjoying freshly brewed coffee.</p>
      </section>

      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"The taste of the ordered items were too good.We really enjoyed the place as well.Thanks a lot."</p>
          <p className="testimonial-author">- Gouri biswas</p>
        </div>
        <div className="testimonial">
          <p>"Amazing food. We had a veg burger, veg Maggie & mushroom momos. All served quickly and tasty. The decor is also good. What a great find!"</p>
          <p className="testimonial-author">- Sarah Lee</p>
        </div>
        <div className="testimonial">
          <p>"Serves the best burgers, rolls, shakes. Every food and drink on their menu tastes yumm 😋😋. The prices are extremely reasonable. Most importantly, great place to hangout with friends.🍔🌯🍹🍸 …"</p>
          <p className="testimonial-author">- Bijin Kurup</p>
        </div>
        <div className="testimonial">
          <p>"Amazing tasty food, Best ever. ❤️❤️ It's really awesome, the vibe was so nice."</p>
          <p className="testimonial-author">- Subham Panda</p>
        </div>
      </section>

      <div className="cta-button-container">
        {/* 'Order Now' button with icon */}
        {/* <button className="cta-button order-now" onClick={handlePlaceOrder} disabled>
          <i className="material-icons">shopping_cart</i>
          Order Now
        </button> */}

        {/* 'Connect us on whatsapp' button with icon */}
        <button className="cta-button-order order-now" onClick={handlePlaceOrder}>
        <i className="material-icons">chat</i>
          Connect and Order Now on Whatsapp
        </button>

        {/* 'Get Location' button with icon */}
        <button className="cta-button get-location" onClick={handleGetLocation}>
          <i className="material-icons">location_on</i>
          Get Location
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
