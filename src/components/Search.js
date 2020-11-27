import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);

  // Will attempt to run every time the component is rendered
  useEffect(() => {
    const search = async () => {
      if (term) {
        const {data, error} = await axios.get('https://en.wikipedia.org/w/api.php', {
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: term,
          }
        });

        if (!error) {
          setResult(data.query.search);
        }
      }
    };

    const timerId = setTimeout(() => {
        search();
      }, 500,);

    // Runs when the component is detached, ie: on a re-render
    return () => {
      clearTimeout(timerId)
    }
  },[term]);

  const renderResults = result.map((wikiItem) => {
    return (
      <div key={wikiItem.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?courid=${wikiItem.pageid}`}
            target=""
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {wikiItem.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: wikiItem.snippet }}></span>
        </div>
      </div>
    );
  })

  return (
    <div>
      <div className="ui form" >
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list" >
        {renderResults}
      </div>
    </div>
  );
}

export default Search;
