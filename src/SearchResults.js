import React from 'react'

function SearchResults({data,query}) {
    return (
        <div className="search__results">
        <p className="searchpage__resulstCounter">
            About {data.searchInformation.formattedTotalResults} results ({data.searchInformation.formattedSearchTime} seconds) for {query}
        </p>

        <div className="allresults">
            {data.items.map((doc)=>(
                <div className="search__result">
                    <a href={doc.link}>
                        {doc.displayLink}

                    </a>
                    <a href={doc.link}><h2>{doc.title}</h2></a>
                    <p className="searchPage__resultSnippet">{doc.snippet}</p>
                </div>
            ))}
        </div>
    </div>
    )
}

export default SearchResults
