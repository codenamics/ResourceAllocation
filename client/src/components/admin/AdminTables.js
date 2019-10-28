import React, { useEffect } from "react";
import AdminTableRow from "./AdminTableRow";
import AdminCalculations from "./AdminCalculations";
import CSV from "../../utils/CSV";
import { connect } from "react-redux";
import axios from "axios";
import PropTypes from "prop-types";

const AdminTables = ({ year }) => {
  const [user, setUser] = React.useState(null);
  
  useEffect(() => {
    fetchData();
  }, [year]);

  const fetchData = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const body = JSON.stringify({
      year
    });

    try {
      const res = await axios.post("/api/admin/all", body, config);

      setUser(res.data);
     
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between mt-3 mb-3 align-items-center row-b pt-2 pb-2">
        <div className="font-year ml-3">{year}</div>
      </div>

      {user ? (
        user.map(item => (
          <div className="table-responsive" key={item._id}>
            <div className="d-flex justify-content-between mt-1 mb-1 align-items-center  pt-2 pb-2 bg-light">
              <div className=" ml-3">{item.user.name}</div>
              <CSV
                admin_user={item.user.name}
                admin_year={year}
                allocations={item.allocations}
              ></CSV>
            </div>

            <table className="table table-hover ">
              <thead>
                <tr>
                  <th scope="col">PROJECT</th>
                  <th scope="col">January</th>
                  <th scope="col">February</th>
                  <th scope="col">March</th>
                  <th scope="col">April</th>
                  <th scope="col">May</th>
                  <th scope="col">June</th>
                  <th scope="col">July</th>
                  <th scope="col">August</th>
                  <th scope="col">September</th>
                  <th scope="col">October</th>
                  <th scope="col">November</th>
                  <th scope="col">December</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <AdminTableRow
                  year_id={item._id}
                  allocations={item.allocations}
                  user_id={item.user._id}
                  fetch_data={fetchData}
                />
              </tbody>
              <tbody>
                <AdminCalculations
                  allocations={item.allocations}
                ></AdminCalculations>
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <h4>Loading</h4>
      )}
    </>
  );
};

AdminTables.propTypes = {
  year: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  admin: state.admin
});

export default connect(mapStateToProps)(AdminTables);
