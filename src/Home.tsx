import React from 'react';
import { useNavigate } from 'react-router-dom';
import { resources } from './data';
import './index.css';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Sunday School Resources</h1>
        <p>A collection of talks, scriptures, and teachings on overcoming temptation.</p>
      </header>

      <main className="grid-container">
        {resources.map((resource) => (
          <button
            key={resource.id}
            onClick={() => navigate(`/resource/${resource.id}`)}
            className="resource-button"
            aria-label={`Go to resource ${resource.id}: ${resource.title}`}
          >
            <span className="button-number">{resource.id}</span>
            <span className="button-hover-text">View Resource</span>
          </button>
        ))}
      </main>
    </div>
  );
};
