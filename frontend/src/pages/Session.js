import React from 'react';
import './Session.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


export const Session = () => {
  const [showVideo, setShowVideo] = useState(false);

  const insertVideo = () => {
    setShowVideo(true)
  }
  return (
    <div className="outer">
      <div>
        <Card className="card1">
          <Card.Header className="title">Name of the Session</Card.Header>
          <Card.Body>
            <Card.Title className="mentor">Name of the mentor</Card.Title>
            <Card.Text className="slot">
              slot
            </Card.Text>
            <Card.Text className="mentor">
              tag
            </Card.Text>
            <Button variant="primary" onClick={insertVideo} style={{ marginLeft: "40%" }}>Go</Button>
          </Card.Body>
        </Card>
      </div>
      {showVideo && (
        <div style={{ marginLeft: "15%" }}>
          <iframe width="560" height="290" src="https://www.youtube.com/embed/ohZ4SmmGvnw" title="YouTube video player" frameborder="0" display="block" marginTop="0%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      )}

      <br/>
      <br/>
    </div>
  );
}