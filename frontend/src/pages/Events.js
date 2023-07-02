import React from 'react';
import './Events.css';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'NGO Fundraising Gala',
      date: '2023-08-15',
      location: 'Bangalore, India',
      image: 'img1.png',
    },
    {
      id: 2,
      title: 'Community Clean-up Drive',
      date: '2023-09-10',
      location: 'Mumbai, India',
      image: 'img4.jpg',
    },
  ];

  const pastEvents = [
    {
      id: 3,
      title: 'Education Awareness Seminar',
      date: '2023-06-25',
      location: 'Delhi, India',
      image: 'img3.jpg',
    },
    {
      id: 4,
      title: 'Healthcare Camp',
      date: '2023-05-18',
      location: 'Chennai, India',
      image: 'img2.jpg',
    },
  ];

  return (
    <div className="events-page">
      <h1 className="page-heading">Events</h1>

      <section>
        <h1 className="section-heading">Upcoming Events</h1>
        <div className="events-list">
          {upcomingEvents.map((event) => (
            <div className="event-card" key={event.id}>
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-details">
                <h3>{event.title}</h3>
                <p>Date: {event.date}</p>
                <p>Location: {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h1 className="section-heading">Past Events</h1>
        <div className="events-list">
          {pastEvents.map((event) => (
            <div className="event-card" key={event.id}>
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-details">
                <h3>{event.title}</h3>
                <p>Date: {event.date}</p>
                <p>Location: {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;

