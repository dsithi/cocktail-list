import React, {useState} from 'react'
// import ReactLoading from 'react-loading';

export const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];
    //const [loading, isLoading] = useState(true);

    for(let i = 1; i <= Math.ceil(totalItems/itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPages = () => {
        return (
            <ul className="pagination">
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <a href ="#/" onClick={() => paginate(number)} className="page-link">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
        )
    }

    return (

        <div>
            {renderPages()}
        </div>
    )
}

export default Pagination;