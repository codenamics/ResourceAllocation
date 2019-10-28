import React, {useState, useEffect} from "react";
import AdminProjectRow from "./AdminProjectRow";
import PropTypes from "prop-types";

const AdminTableRow = ({ allocations, year_id, user_id }) => {
    const [allo, setAllo] = useState(null)

    useEffect(() => {
       setAllo(allocations)
    }, [])

    
 const dupa = (id) =>{

    return setAllo(allo.filter(allos => allos._id !== id))
    
 }
  return (
    <>
      {allo ? (
        allo.map(item => (
          <AdminProjectRow
            year_id={year_id}
            item={item}
            key={item._id}
            user_id={user_id}
            dupa={dupa}
          ></AdminProjectRow>
        ))
      ) : (
        <tr>
          <td>Loading</td>
        </tr>
      )}
    </>
  );
};
AdminTableRow.propTypes = {
  allocations: PropTypes.array.isRequired,
  year_id: PropTypes.string.isRequired
};
export default AdminTableRow;
