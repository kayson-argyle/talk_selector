import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { resources } from './data';
import './index.css';

export const ResourceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const currentId = parseInt(id || '1', 10);
  const resource = resources.find((r) => r.id === currentId);

  if (!resource) {
    return (
      <div className="detail-container error-state">
        <h2>Resource not found</h2>
        <button className="nav-button" onClick={() => navigate('/')}>
          Return Home
        </button>
      </div>
    );
  }

  const handlePrev = () => {
    const prevId = currentId > 1 ? currentId - 1 : resources.length;
    navigate(`/resource/${prevId}`);
  };

  const handleNext = () => {
    const nextId = currentId < resources.length ? currentId + 1 : 1;
    navigate(`/resource/${nextId}`);
  };

  return (
    <div className="detail-container">
      <nav className="top-nav">
        <button className="back-home-button" onClick={() => navigate('/')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Directory
        </button>
        <div className="resource-id-badge">Resource {resource.id}</div>
      </nav>

      <main className="detail-content">
        <div className="card">
          <h1 className="resource-title">{resource.title}</h1>

          <div className="metadata">
            <div className="meta-item">
              <span className="meta-label">Speaker/Author</span>
              <span className="meta-value">{resource.speaker}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Source</span>
              <span className="meta-value">{resource.source}</span>
            </div>
          </div>

          <div className="summary-section">
            <h3 className="summary-label">Summary</h3>
            <p className="summary-text">{resource.summary}</p>
          </div>

          {resource.link ? (
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-action-button"
            >
              Read Resource
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          ) : (
            <div className="missing-link-alert">Link URL not provided yet.</div>
          )}
        </div>
      </main>

      <footer className="bottom-nav">
        <button className="nav-button prev-button" onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <div className="nav-text">
            <span className="nav-label">Previous</span>
            <span className="nav-id">Resource {currentId > 1 ? currentId - 1 : resources.length}</span>
          </div>
        </button>

        <button className="nav-button next-button" onClick={handleNext}>
          <div className="nav-text" style={{ textAlign: 'right' }}>
            <span className="nav-label">Next</span>
            <span className="nav-id">Resource {currentId < resources.length ? currentId + 1 : 1}</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </footer>
    </div>
  );
};
