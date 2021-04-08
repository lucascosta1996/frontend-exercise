import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataOverviewWrapper from './styledComponents';
import Results from '../../components/Results';
import Terms from '../../components/Terms';
import Table from '../../components/Table';
import Insertions from '../../components/Insertions';
import { patch } from '../../mockAPI/patchRequest';
import { post } from '../../mockAPI/postRequest';
import { addSupportRequest, updateSupportRequest } from '../../store/actions/supportRequestsActions';

function DataOverview() {
  const supportRequests = useSelector(state => state.data.supportRequests);
  const dispatch = useDispatch();
  const tableHeader = ['NAME', 'EMAIL', 'TIME', 'PHONE', 'CITY', 'STATUS'];

  async function handleStatusChange(item) {
    item.status = item.status === 'send' ? 'unsend' : 'send';
    patch('/api/requests', item)
      .then(() => updateSupportRequest(item, dispatch));
  }

  async function handleAddClick() {
    const randomData = {
      name: Math.random().toString(36).substring(7),
      email: Math.random().toString(36).substring(2, 15) + '@' + Math.random().toString(36).substring(2, 15),
      timestamp:"2012-04-23T01:06:43.511Z",
      phoneNumber:"215-293-5846",
      city:"Southe Mariane",
      status:"send",
    };

    await post('/api/requests', randomData)
      .then(res => addSupportRequest(res.requests, dispatch))
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
            header={tableHeader}
            data={supportRequests || []}
            handleAddClick={handleAddClick}
            handleButtonClick={handleStatusChange}
            tableTitle="Support Requests"
          />
        </section>
      </div>
      <footer>
        <p>
          Showing <span>1</span> to <span>{supportRequests?.length}</span> of {supportRequests?.length} elements
        </p>
      </footer>
    </DataOverviewWrapper>
  );
}

export default DataOverview;

