import React, { useState, useEffect } from "react";
import wiki from "../api/wiki";

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    // const [toId, setToId] = useState(null); 1. way to delay request

    useEffect(() => {
        const search = async () => {
            const r = await wiki.get('', {
                params: {
                    srsearch: term
                }
            })
            setResults(r.data.query.search)
        }
        // if (toId) clearTimeout(toId);
        // setToId(setTimeout(() => {        1. way to delay request
        //     if (term) search();
        // }, 500));
        if (term && results.length === 0) {
            search();
        } else {
            const toId = setTimeout(() => {
                if (term) search();
            }, 500)

            return () => clearTimeout(toId);
        }


    }, [term])

    const renderResults = results.map(result => {
        return <div key={result.pageid} className="item">
            <div className="right floated content">
                <a target='_blank' href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
            </div>
            <div className="content">
                <div className="header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>

            </div>
        </div >
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        type="text"
                        value={term}
                        onChange={event => setTerm(event.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderResults}
            </div>
        </div>
    )
}

export default Search;