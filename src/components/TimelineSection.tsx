import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { timelineEvents } from '../data/timelineData';
import './TimelineSection.css';

const TimelineSection: React.FC = () => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);

  // Show 5 years at a time
  const yearsVisible = 5;
  const maxOffset = Math.max(0, timelineEvents.length - yearsVisible);

  const startIndex = scrollOffset;
  const endIndex = startIndex + yearsVisible;
  const visibleEvents = timelineEvents.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setScrollOffset(prev => (prev > 0 ? prev - 3 : 0));
  };

  const handleNextPage = () => {
    setScrollOffset(prev => Math.min(prev + 3, maxOffset));
  };

  const handleYearClick = (index: number) => {
    const clickedIndex = startIndex + index;
    setSelectedIndex(clickedIndex);

    // If clicking the first year, show 3 previous years
    if (index === 0 && startIndex > 0) {
      setScrollOffset(prev => Math.max(0, prev - 3));
    }
    // If clicking the last year, show 3 next years
    else if (index === visibleEvents.length - 1 && startIndex + yearsVisible < timelineEvents.length) {
      setScrollOffset(prev => Math.min(prev + 3, maxOffset));
    }
  };

  const selectedEvent = timelineEvents[selectedIndex];
  const progressPercentage = ((scrollOffset + yearsVisible) / timelineEvents.length) * 100;

  return (
    <section className="timeline-section-home">
      <div className="timeline-container">
        {/* Header */}
        <div className="timeline-header">
          <h2 className="timeline-title">{t('timeline.title')}</h2>
          <div className="header-underline"></div>
        </div>

        {/* Progress Bar */}
        <div className="timeline-progress-bar">
          <div
            className="timeline-progress-fill"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* Timeline Track with Years - Paginated */}
        <div className="timeline-track-wrapper">
          <button
            className="timeline-nav-btn timeline-nav-prev"
            onClick={handlePrevPage}
            aria-label="Previous timeline page"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="timeline-track">
            {visibleEvents.map((event, index) => {
              const isFirstYear = index === 0 && scrollOffset > 0;
              const isLastYear = index === visibleEvents.length - 1 && scrollOffset + yearsVisible < timelineEvents.length;
              const isEdgeYear = isFirstYear || isLastYear;

              return (
                <div
                  key={index}
                  className={`timeline-year-item ${
                    startIndex + index === selectedIndex ? 'active' : ''
                  } ${isEdgeYear ? 'edge-year' : ''}`}
                  onClick={() => handleYearClick(index)}
                  title={isFirstYear ? 'Click to go to previous years' : isLastYear ? 'Click to go to next years' : ''}
                >
                  <div className="year-dot"></div>
                  <span className="year-text">{event.year}</span>
                </div>
              );
            })}
          </div>

          <button
            className="timeline-nav-btn timeline-nav-next"
            onClick={handleNextPage}
            aria-label="Next timeline page"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Scroll Position Indicators */}
        <div className="timeline-page-indicators">
          {Array.from({ length: maxOffset + 1 }).map((_, index) => (
            <button
              key={index}
              className={`page-indicator ${index === scrollOffset ? 'active' : ''}`}
              onClick={() => setScrollOffset(index)}
              aria-label={`Go to position ${index + 1}`}
            />
          ))}
        </div>

        {/* Event Details Card */}
        <div className="timeline-event-card">
          <div className="event-card-grid">
            {/* Image */}
            <div className="event-image-wrapper">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="event-image"
              />
            </div>

            {/* Content */}
            <div className="event-content-wrapper">
              <div className="event-year-badge">{selectedEvent.year}</div>

              <h3 className="event-title">{selectedEvent.title}</h3>

              <p className="event-description">{selectedEvent.description}</p>

              <button className="read-more-link">
                Read More
                <ChevronRight size={16} className="icon-inline" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
