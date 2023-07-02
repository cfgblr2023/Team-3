import React from 'react';
import './Achievement.css';

const Achievements = () => {
  return (
    <div className="achievements">
      <header>
        <h1>NGO Achievements</h1>
      </header>

      <main>
        <section>
          <h2>Year 2023</h2>
          <ul>
            <li>Provided clean drinking water to over 10,000 people in rural communities</li>
            <li>Delivered educational supplies to 50 schools in underprivileged areas</li>
            <li>Implemented healthcare programs benefiting 5,000 children</li>
          </ul>
        </section>

        <section>
          <h2>Year 2022</h2>
          <ul>
            <li>Organized vocational training workshops for 200 unemployed youth</li>
            <li>Established a community center for 500 families affected by natural disasters</li>
            <li>Supported 1,000 women in starting their own businesses</li>
          </ul>
        </section>
        <section>
          <h2>Year 2021</h2>
          <ul>
            <li>Provided clean drinking water to over 10,000 people in rural communities</li>
            <li>Delivered educational supplies to 50 schools in underprivileged areas</li>
            <li>Implemented healthcare programs benefiting 5,000 children</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Achievements;
