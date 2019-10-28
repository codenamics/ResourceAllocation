import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import { connect } from "react-redux";
const CSV = ({ allocations, auth, year, admin_user, admin_year }) => {
    const [state, setstate] = useState([]);
    useEffect(() => {
        setstate({
            allo: allocations
        });
    }, [allocations]);
    let newObj = {};

    if (state.allo !== undefined) {
        let newall = state.allo.map(element => {
            return {
                jan: Number(element.jan),
                feb: Number(element.feb),
                mar: Number(element.mar),
                apr: Number(element.apr),
                may: Number(element.may),
                jun: Number(element.jun),
                jul: Number(element.jul),
                aug: Number(element.aug),
                sep: Number(element.sep),
                oct: Number(element.oct),
                nov: Number(element.nov),
                dec: Number(element.dec)
            };
        });

        let obj = {
            name: "Total",
            jan: 0,
            feb: 0,
            mar: 0,
            apr: 0,
            may: 0,
            jun: 0,
            jul: 0,
            aug: 0,
            sep: 0,
            oct: 0,
            nov: 0,
            dec: 0
        };

        newall.forEach(element => {
            obj.jan += element.jan;
            obj.feb += element.feb;
            obj.mar += element.mar;
            obj.apr += element.apr;
            obj.may += element.may;
            obj.jun += element.jun;
            obj.jul += element.jul;
            obj.aug += element.aug;
            obj.sep += element.sep;
            obj.oct += element.oct;
            obj.nov += element.nov;
            obj.dec += element.dec;
        });
        newObj = obj;
    }
    let newArr = [];
    newArr.push(state.allo);
    newArr.push(newObj);
    let data = Array.from(newArr.flat());

    if (newObj && newArr && state.allo) {

        if (admin_user && admin_year) {

            return (
                <CSVLink
                    data={data}
                    filename={`${admin_user}-${admin_year}.csv`}
                    className="btn btn-primary mr-3"
                    target="_blank"
                >
                    Generate CSV
        </CSVLink>
            );
        } else {
            return (
                <CSVLink
                    data={data}
                    filename={`${auth.user.user.name}-${year}.csv`}
                    className="btn btn-primary mr-3"
                    target="_blank"
                >
                    Generate CSV
        </CSVLink>
            );
        }
    } else {
        return null;
    }
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(CSV);
