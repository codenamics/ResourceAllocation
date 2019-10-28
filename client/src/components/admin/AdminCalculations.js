import React from 'react'
import PropTypes from 'prop-types'


const AdminCalculations = ({ allocations }) => {

    if (allocations !== undefined) {
        let newall = allocations.map(element => {
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
                dec: Number(element.dec),
            };
        });


        let obj = {
            january: 0,
            february: 0,
            march: 0,
            april: 0,
            may: 0,
            june: 0,
            july: 0,
            august: 0,
            september: 0,
            october: 0,
            november: 0,
            december: 0,
        }


        newall.forEach(element => {

            obj.january += element.jan
            obj.february += element.feb
            obj.march += element.mar
            obj.april += element.apr
            obj.may += element.may
            obj.june += element.jun
            obj.july += element.jul
            obj.august += element.aug
            obj.september += element.sep
            obj.october += element.oct
            obj.november += element.nov
            obj.december += element.dec


        });
        return (
            <tr>
                <th scope="col">TOTAL</th>
                <th scope="col">{obj.january.toPrecision(2)}</th>
                <th scope="col">{obj.february.toPrecision(2)}</th>
                <th scope="col">{obj.march.toPrecision(2)}</th>
                <th scope="col">{obj.april.toPrecision(2)}</th>
                <th scope="col">{obj.may.toPrecision(2)}</th>
                <th scope="col">{obj.june.toPrecision(2)}</th>
                <th scope="col">{obj.july.toPrecision(2)}</th>
                <th scope="col">{obj.august.toPrecision(2)}</th>
                <th scope="col">{obj.september.toPrecision(2)}</th>
                <th scope="col">{obj.october.toPrecision(2)}</th>
                <th scope="col">{obj.november.toPrecision(2)}</th>
                <th scope="col">{obj.december.toPrecision(2)}</th>
            </tr>
        )
    } else {
        return null
    }
}

AdminCalculations.propTypes = {
    allocations: PropTypes.array.isRequired
  };

export default AdminCalculations
