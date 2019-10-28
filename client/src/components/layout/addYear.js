import React, { useState } from "react";
import { addNewYear } from "../../actions/year";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import useReactRouter from "use-react-router";

const AddYear = ({ addNewYear }) => {
    const [year, setYear] = useState("");
    const { history } = useReactRouter();

    const onSubmitForm = e => {
        e.preventDefault();
        if (year !== "") {
            const data = {
                year
            };
            addNewYear(data, history);
            setYear("");
        }
    };

    return (
        <div className="form-container">
            <h1 className="text-center mb-4">Add Year</h1>
            <form onSubmit={e => onSubmitForm(e)}>
                <div className="form-group">
                    <label htmlFor="exampleSelect1">Choose year</label>
                    <select
                        className="form-control"
                        id="exampleSelect1"
                        onChange={e => setYear(e.target.value)}
                    >
                        <option value="" disabled selected>
                            Select your option
            </option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                    </select>
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        className="btn btn-primary btn-lg btn-block"
                        value="Add"
                    />
                    <Link className="btn btn-primary btn-lg btn-block " to="/dashboard">
                        Back
          </Link>
                </div>
            </form>
        </div>
    );
};

export default connect(
    null,
    {
        addNewYear
    }
)(withRouter(AddYear));
