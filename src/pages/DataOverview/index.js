import React from 'react';
import DataOverviewWrapper from './styledComponents';
import Results from '../../components/Results';
import Terms from '../../components/Terms';
import Table from '../../components/Table';
import Insertions from '../../components/Insertions';
import useGetRequests from '../../hooks/useGetRequests';

function DataOverview() {
  const { fetchData, data } = useGetRequests('/api/requests/quantity');

  function handleDataChange() {
    fetchData();
  }

  return (
    <DataOverviewWrapper>
      <header
        className="overview-header"
      >
        <h1>
          Data overview
        </h1>
        <Insertions />
      </header>
      <div
        className="overview-main-card"
      >
        <section
          className="overview-charts"
        >
          <Results
            chartColor="blue"
            title="General results"
            type="general"
          />
          <div className="separator" />
          <Results
            chartColor="pink"
            title="Ratings by category"
            type="ratingsByCategory"
          />
          <div className="separator" />
          <Terms />
        </section>
        <section
          className="overview-table"
        >
          <Table
            onChange={() => handleDataChange()}
          />
        </section>
      </div>
      <footer>
        <p>
          Showing <span>1</span> to <span>{data}</span> of {data} elements
        </p>
      </footer>
    </DataOverviewWrapper>
  );
}

export default DataOverview;

