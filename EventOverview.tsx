import React, { useState } from 'react';
import { Card, Button, Tab, Tabs } from 'react-bootstrap';
import { FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import './EventOverview.css';

const EventOverview = () => {
  const [key, setKey] = useState<string>('first');

  const image =
    'https://tengrinews.kz/userdata/news/2020/news_422927/resize/photo_345247.png';
  const description =
    'Elit magna duis aute elit. Consectetur aute eiusmod sint ut et ea proident voluptate occaecat magna. Sint exercitation culpa nisi duis. Velit ipsum et eu aliqua dolor commodo minim nisi quis labore deserunt consequat quis. Consectetur sit excepteur nulla sit ea commodo proident enim dolor.';
  const distance = '1400';

  return (
    <Card style={{ width: '100%', margin: 0, padding: 0 }}>
      <div style={{ position: 'relative' }}>
        <Card.Img variant="top" src={image} />
        <FaHeart
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            fontSize: '1.5em',
            color: 'white',
          }}
        />
      </div>
      <Card.Body>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k as string)}
        >
          <Tab eventKey="first" title="Сипаттама">
            <Card.Text style={{ textAlign: 'left' }}>
              {description}
            </Card.Text>
          </Tab>
          <Tab eventKey="second" title="Жету">
            <Card.Text style={{ textAlign: 'left' }}>
              {description}
            </Card.Text>
          </Tab>
        </Tabs>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaMapMarkerAlt style={{ marginRight: '5px' }} />
            <span>{distance}</span>
          </div>
          <Button variant="primary">Картаған Керу</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventOverview;
