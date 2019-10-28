import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAll, deleteYear, addProject } from "../../actions/year";
import TableRow from "./TableRow";
import useReactRouter from "use-react-router";
import Calculations from "./Calculations";
import CSV from "../../utils/CSV";

const Table = ({
    fetchAll,
    allocation: { allocations, loading },
    deleteYear,
    addProject
}) => {
    useEffect(() => {
        fetchAll();
    }, [fetchAll]);
    const { history } = useReactRouter();
    const onDeleteClick = id => {
        deleteYear(id);
    };

    const addNewProject = (id, history) => {
        addProject(id, history);
    };

    if (!loading && allocations.length === 0) {
        return <h4>You have no allo</h4>;
    }

    return (
        <>
            {!loading && allocations ? (
                allocations.map(item => (

                    <div
                        className="card border-default mb-3 mt-4 animation"
                        key={item._id}
                    >
                        <div className="card-header d-flex justify-content-between align-items-center font-year">
                            {item.year}
                            <div>
                                <CSV allocations={item.allocations} year={item.year}></CSV>
                                <button
                                    className="btn btn-primary mr-4"
                                    onClick={addNewProject.bind(this, item._id, history)}
                                >
                                    New Project
                </button>

                                <button
                                    className="btn btn-danger"
                                    onClick={onDeleteClick.bind(this, item._id)}
                                >
                                    Delete Year
                </button>
                            </div>
                        </div>

                        <div className="table-responsive">
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
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableRow
                                        year_id={item._id}
                                        allocations={item.allocations}
                                    ></TableRow>
                                </tbody>
                                <tbody>
                                    <Calculations allocations={item.allocations}></Calculations>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))
            ) : (
                    <h4>loading</h4>
                )}
        </>
    );
};
const mapStateToProps = state => ({
    allocation: state.year
});

export default connect(
    mapStateToProps,
    { fetchAll, deleteYear, addProject }
)(Table);
