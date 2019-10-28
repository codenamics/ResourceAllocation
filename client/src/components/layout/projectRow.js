import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { update, deleteProject } from '../../actions/year'
const ProjectRow = ({ item, year_id, update, deleteProject }) => {
    const [project, setProject] = useState({
        name: '',
        jan: '',
        feb: '',
        mar: '',
        apr: '',
        may: '',
        jun: '',
        jul: '',
        aug: '',
        sep: '',
        oct: '',
        nov: '',
        dec: ''
    });
    useEffect(() => {



        setProject({
            name: item.name || "",
            jan: item.jan || "",
            feb: item.feb || "",
            mar: item.mar || "",
            apr: item.apr || "",
            may: item.may || "",
            jun: item.jun || "",
            jul: item.jul || "",
            aug: item.aug || "",
            sep: item.sep || "",
            oct: item.oct || "",
            nov: item.nov || "",
            dec: item.dec || "",
        })


    }, [item])
    const { name, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec } = project
    const updateProject = (id, year_id, JSONdata) => {
        update(id, year_id, JSONdata)
    }
    const deleteAllocation = (id, year_id) => {

        deleteProject(id, year_id)

    }
    const onChange = e =>
        setProject({ ...project, [e.target.name]: e.target.value });


    let JSONdata = JSON.stringify({ name, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec })

    return (
        <tr>
            <td><input type="text" onChange={onChange} name="name" value={name} /></td>
            <td><input className='input-fte' type="number" onChange={onChange} name="jan" value={jan} required /></td>
            <td><input className='input-fte' type="number" onChange={onChange} name="feb" value={feb} required /></td>
            <td><input className='input-fte' type="number" onChange={onChange} name="mar" value={mar} required /></td>
            <td><input className='input-fte' type="number" onChange={onChange} name="apr" value={apr} required /></td>
            <td><input className='input-fte' type="number" onChange={onChange} name="may" value={may} required /></td>
            <td><input className='input-fte' type="number" onChange={onChange} name="jun" value={jun} required /></td>
            <td><input className='input-fte' type="number" onChange={onChange} name="jul" value={jul} required /></td>
            <td><input className='input-fte' type="number" onChange={onChange} name="aug" value={aug} required /></td>
            <td><input className='input-fte' type="number" onChange={onChange} name="sep" value={sep} required /></td>
            <td><input className='input-fte' type="number" onChange={onChange} name="oct" value={oct} required /></td>
            <td><input className='input-fte' type="number" onChange={onChange} name="nov" value={nov} required /></td>
            <td><input className='input-fte' type="number" onChange={onChange} name="dec" value={dec} required /></td>
            <td><button type="button" className="btn btn-primary" onClick={updateProject.bind(this, item._id, year_id, JSONdata)}>Update</button></td>
            <td><button type="button" className="btn btn-danger" onClick={deleteAllocation.bind(this, item._id, year_id)}>Delete</button></td>
        </tr>
    )
}

export default connect(
    null,
    { update, deleteProject }
)(ProjectRow);


