import React from 'react';
import './Jobs.css';

const jobsData = [
 
  {
    id: 3,
    title: 'Niti Aayog',
    description: 'This is a job from Niti Aayog',
    portalUrl: 'https://niti.gov.in/',
  },
  {
    id: 4,
    title: 'Udayan care',
    description: 'This is a job from Udayan Care',
    portalUrl: 'https://udayancare.org/get-involved-volunteer?gclid=Cj0KCQjwnf-kBhCnARIsAFlg492AXrDcBvCPPGjZKMS8XBdrmDf9rpORdBJ3RONQdBIbl24ZO95SWbcaAoy6EALw_wcB',
  },
  // Add more job data from LinkedIn, Internshala, and other sources
  {
    id: 5,
    title: 'LinkedIn Job',
    description: 'This is a job from LinkedIn',
    portalUrl: 'https://www.linkedin.com/jobs',
  },
  {
    id: 6,
    title: 'Internshala Job',
    description: 'This is a job from Internshala',
    portalUrl: 'https://www.internshala.com/internships',
  },
  {
    id: 7,
    title: 'Government Job',
    description: 'This is a government job',
    portalUrl: 'https://www.govtjobsite.com',
  },
];

const Jobs = () => {
  return (
    <div className="jobs-page">
      <h1 className="page-heading">Jobs</h1>

      <div className="jobs-list">
        {jobsData.map(job => (
          <div className="job-card" key={job.id}>
            <h2 className="job-title">{job.title}</h2>
            <p className="job-description">{job.description}</p>
            <a className="job-link" href={job.portalUrl} target="_blank" rel="noopener noreferrer">
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;