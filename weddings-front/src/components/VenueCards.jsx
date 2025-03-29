import React from 'react';
import './style/components/VenueCards.css'; // Y
import wed from "../assets/img/wed1.png";

const VenueCards = () => {
  const venues = [
    {
      img: wed,
      type: "Premium",
      title: "The Beach Weddings",
      capacity: "1,000 capacity",
      location: "Kovalam, Thiruvananthapuram"
    },
    {
        img: wed,
        type: "Budget friendly",
      title: "Munnar Hills Resorts",
      capacity: "1,500 capacity",
      location: "Munnar Hills, Munnar"
    },
    {
        img: wed,
        type: "Popular",
      title: "Heritage Moments",
      capacity: "1,000 capacity",
      location: "Fort Kochi, Kochi"
    }
  ];

  return (
    <section className="venue-cards-section">
      <div className="venues-container">
        {venues.map((venue, index) => (
          <div className="venue-card" key={index}>
            <img src={venue.img} alt="" />
            <div className="venue-badge">{venue.type}</div>
            <div className="venue-content">
              <h3 className="venue-title">{venue.title}</h3>
              <div className="venue-details">
                <p className="venue-capacity">{venue.capacity}</p>
                <p className="venue-location">{venue.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VenueCards;