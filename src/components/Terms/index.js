import React from 'react';
import TermsWrapper from './styledComponents';
import useGetRequests from '../../hooks/useGetRequests';

function Terms() {
  const { data, loading } = useGetRequests('/api/terms');

  if (loading) {
    return (
      <span>Loading...</span>
    )
  }

  return (
    <TermsWrapper>
      <ul
        className="terms-list"
      >
        {data && data.terms.map((term, index) => (
          <li
            className="terms-list-item"
            key={term.term}
          >
            <span
              className="term-label"
            >
              TERM {term.id}
            </span>
            <span
              className="term-number"
            >
              {term.term}
            </span>
          </li>
        ))}
      </ul>
    </TermsWrapper>
  );
}

export default Terms;
