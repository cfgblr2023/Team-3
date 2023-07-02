import React from 'react';
import './StudentRecord.css'; // Import your custom CSS file

const students = [
  {
    id: 1,
    name: 'John Doe',
    progress: 80,
    coursesCompleted: ['Introduction to Programming', 'Web Development'],
  },
  {
    id: 2,
    name: 'Jane Smith',
    progress: 50,
    coursesCompleted: ['Database Management', 'Data Analysis'],
  },
  // Add more student objects as needed
];

const StudentRecord = () => {
  return (
    <div className="student-details-container">
      <h1>Student Details</h1>
      <table className="student-details-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Progress</th>
            <th>Courses Completed</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${student.progress}%` }}
                  />
                </div>
              </td>
              <td>
                <ul className="completed-courses-list">
                  {student.coursesCompleted.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentRecord;


