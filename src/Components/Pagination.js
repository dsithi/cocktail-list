import React from 'react'

export const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalItems/itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a href ="#" onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination;