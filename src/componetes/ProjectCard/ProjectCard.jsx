import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({title, description , imgUrl}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <img src={imgUrl} alt='img not found' />
      <div className='proj-txtx'>
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </Col>
  )
};
