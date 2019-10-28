import React from "react";
import ProjectRow from "./projectRow";

const TableRow = ({ allocations, year_id }) => {
    return (
        <>
            {allocations ? (
                allocations.map(item => (
                    <ProjectRow year_id={year_id} item={item} key={item._id}></ProjectRow>
                ))
            ) : (
                    <tr>
                        <td>Loading</td>
                    </tr>
                )}
        </>
    );
};

export default TableRow;
