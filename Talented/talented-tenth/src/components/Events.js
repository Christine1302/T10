import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Use relative paths

const Events = () => {
  return (
    <div className="events-page">
      <div className="events container" style={{ display: 'flex' }}>
        <div className="events" id="events">
          <h2 style={{ textAlign: 'center' }}>Upcoming Trips</h2>
          <div className="content w3-padding-large w3-margin-top">
            <div className="cards">
              <div className="card w3-card-4 w3-round-large">
                <header className="w3-container w3-black">
                  <h3>WASHINGTON, DC</h3>
                </header>
                <div className="content w3-container">
                  <div className="card-text" style={{ paddingBottom: '20px' }}>
                    <h4>Dates</h4>
                    <ul style={{ listStyleType: 'none' }}>
                      <li>October # - #, 2024</li>
                    </ul>
                    <h4>Itinerary</h4>
                    <ul style={{ listStyleType: 'none' }}>
                      <li>National Museum of African American History and Culture</li>
                      <li>item 2</li>
                      <li>item 3</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card w3-card-4 w3-round-large">
                <header className="w3-container w3-black">
                  <h3>GHANA</h3>
                </header>
                <div className="content w3-container">
                  <div className="card-text" style={{ paddingBottom: '20px' }}>
                    <h4>Dates</h4>
                    <ul style={{ listStyleType: 'none' }}>
                      <li>November # - #, 2024</li>
                    </ul>
                    <h4>Itinerary</h4>
                    <ul style={{ listStyleType: 'none' }}>
                      <li>item 1</li>
                      <li>item 2</li>
                      <li>item 3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="support-button-container" style={{ textAlign: 'center', marginTop: '20px' }}>
            <Link to="/support" className="w3-button w3-round-large w3-black w3-hover-yellow" style={{ fontSize: '20px', padding: '10px 20px'}}>
            SUPPORT US
            </Link>
            </div>
          </div>
        </div>
        <div className="previous-events" id="previous-events">
          <h2 className="text-center">Previous Events</h2>
          <div className="content w3-padding-large w3-margin-top">
            <div className="cards">
              <div className="card w3-card-4 w3-round-large">
                <div className="content w3-container">
                  <div className="card-text">
                    <h4>Visit from Mayor Malik Evans</h4>
                    <ul style={{ listStyleType: 'none'}}>
                    <li><img src="/images/TTMayor1.jpg" alt="Event 1" className="event-image" /></li>
                    <li><img src="/images/TTMayor2.jpg" alt="Event 2" className="event-image" /></li>
                    <li><img src="/images/TTMayor3.jpg" alt="Event 3" className="event-image" /></li>
                    </ul>
                    <h4>Trip to New Orleans, LA</h4>
                    <ul style={{ listStyleType: 'none'}}>
                    <li><img src="/images/NOLA1.jpg" alt="Event 4" className="event-image" /></li>
                    <li><img src="/images/NOLA2.jpg" alt="Event 5" className="event-image" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
