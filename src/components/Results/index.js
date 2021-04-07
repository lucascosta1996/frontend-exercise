import React from 'react';
import useGetRequests from '../../hooks/useGetRequests';
import blueChart from './assets/graph-blue.svg';
import pinkChart from './assets/group-pink.svg';
import pinkPieChart from './assets/pie-chart-pink.svg';
import bluePieChart from './assets/pie-chart-blue.svg';
import ResultsWrapper from './styledComponents';
import { string } from 'prop-types';

function Results({
  chartColor,
  type,
  title
}) {
  const { data, loading } = useGetRequests('/api/charts');

  if (loading) {
    return (
      <span>Loading...</span>
    )
  }

  return (
    <ResultsWrapper>
      <div
        className="result-charts"
      >
        <section>
          <header>
          <h1
            className="result-charts-title"
          >
            {title}
          </h1>
            <div
              className="followers-count-wrapper"
            >
              <span className="followers-quantity">
                {data && data.charts[0][type].followersCount}
              </span>
              <span className="followers-label">
                Followers
              </span>
            </div>
          </header>
          <img
            alt="Bar chart"
            className="bar-chart"
            src={chartColor === 'blue' ? blueChart : pinkChart}
          />
        </section>
        <img
          alt="Pie chart"
          className="pie-chart"
          src={chartColor === 'blue' ? bluePieChart : pinkPieChart}
        />
      </div>
    </ResultsWrapper>
  );
}

Results.propTypes = {
  title: string.isRequired,
  type: string.isRequired,
};

export default Results;
