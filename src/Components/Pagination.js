import React from 'react'

export const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalItems/itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPages = () => {
        return (
            <ul className="pagination">
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <p onClick={() => paginate(number)} className="page-link">
                        {number}
                    </p>
                </li>
            ))
            }
        </ul>
        );
    }


    return (
        <div>
            {renderPages()}
        </div>
    )

}

export default Pagination;