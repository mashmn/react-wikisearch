import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState('warcraft 3');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return() => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {
        const searchWiki = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                }
            }); // o=====3

            setResults(data.query.search);
        };
        searchWiki();
    }, [debouncedTerm]);

    // useEffect(() => {
    //     const searchWiki = async () => {
    //         const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
    //             params: {
    //                 action: 'query',
    //                 list: 'search',
    //                 origin: '*',
    //                 format: 'json',
    //                 srsearch: term,
    //             }
    //         }); // o=====3

    //         setResults(data.query.search);
    //     };

    //     if(term && !results.length) {
    //         searchWiki();
    //     } else {
    //         const timeoutId = setTimeout(() => {
    //             if(term) {
    //                 searchWiki();
    //             }  
    //         }, 500);
         
    //         return () => {
    //             clearTimeout(timeoutId); // only lets the last setTimeout to execute
    //         };
    //     }
    // }, [term, results.length]);

    const renderedResults = results.map((result) => {
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Seach Term</label>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input" />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;

        /**
         * 1.
         * const searchWiki = async () => {
         *      await axios.get('asd', {
         *          param: {
         *      }
         *  }) 
         * };
         * searchWiki();
         * 
         * 2.
         * (async () => {
         *  await axios.get('asad');
         * })();
         * 
         * 3.
         * axios.get('asdvbv')
         *      .then((response) => {
         *          console.log(response.data);
         *      });
         */
