import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        
        <div className="top">

          <div className="item">
            <h2>Categories</h2>
            {[
              "Graphics & Design",
              "Digital Marketing",
              "Writing & Translation",
              "Video & Animation",
              "Music & Audio",
              "Programming & Tech",
              "Data",
              "Business",
              "Lifestyle",
              "Photography",
              "Sitemap",
            ].map((category, index) => (
              <span key={index}>{category}</span>
            ))}
          </div>


          <div className="item">
            <h2>About</h2>
            {[
              "Press & News",
              "Partnerships",
              "Privacy Policy",
              "Terms of Service",
              "Intellectual Property Claims",
              "Investor Relations",
              "Contact Sales",
            ].map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>

          {/* Support */}
          <div className="item">
            <h2>Support</h2>
            {["Help & Support", "Trust & Safety", "Selling on Fiverr", "Buying on Fiverr"].map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>


          <div className="item">
            <h2>Community</h2>
            {[
              "Customer Success Stories",
              "Community hub",
              "Forum",
              "Events",
              "Blog",
              "Influencers",
              "Affiliates",
              "Podcast",
              "Invite a Friend",
              "Become a Seller",
              "Community Standards",
            ].map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>

          {/* More From Fiverr */}
          <div className="item">
            <h2>More From Fiverr</h2>
            {[
              "Fiverr Business",
              "Fiverr Pro",
              "Fiverr Logo Maker",
              "Fiverr Guides",
              "Get Inspired",
              "Fiverr Select",
              "ClearVoice",
              "Fiverr Workspace",
              "Learn",
              "Working Not Working",
            ].map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
        
        
        
        {/* Bottom Section */}
        <div className="bottom">
          
          <div className="left">
            <h2>Fiverr</h2>
            <span>© Fiverr International Ltd. 2023</span>
          </div>

          
          <div className="right">
            
            <div className="social">
              {["twitter", "facebook", "linkedin", "pinterest", "instagram"].map((icon, index) => (
                <img key={index} src={`/img/${icon}.png`} alt={`${icon} icon`} />
              ))}
            </div>

        
            {["English", "Spanish", "French"].map((language, index) => (
              <div key={index} className="link">
                <img src="/img/language.png" alt="Language Icon" />
                <span>{language}</span>
              </div>
            ))}

          
            {["USD", "EUR", "GBP"].map((currency, index) => (
              <div key={index} className="link">
                <img src="/img/coin.png" alt="Currency Icon" />
                <span>{currency}</span>
              </div>
            ))}
            
           
            <img src="/img/accessibility.png" alt="Accessibility Icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
