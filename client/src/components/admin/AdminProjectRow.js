import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteUserAllo, updateUserAllo } from "../../actions/admin";


const AdminProjectRow = ({
  item,
  user_id,
  year_id,
  updateUserAllo,
  deleteUserAllo,
  dupa

}) => {
  const [project, setProject] = useState({
    name: "",
    jan: "",
    feb: "",
    mar: "",
    apr: "",
    may: "",
    jun: "",
    jul: "",
    aug: "",
    sep: "",
    oct: "",
    nov: "",
    dec: ""
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
      dec: item.dec || ""
    });
  }, [item]);
  const {
    name,
    jan,
    feb,
    mar,
    apr,
    may,
    jun,
    jul,
    aug,
    sep,
    oct,
    nov,
    dec
  } = project;
  let JSONdata = JSON.stringify({ name, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec })

  const onChange = e =>
    setProject({ ...project, [e.target.name]: e.target.value });

  const deleteUserAllocation = async (user_id, year_id, item_id) => {
    deleteUserAllo(user_id, year_id, item_id);
    dupa(item_id)

  };

  const updateUserAllocation = async (user_id, year_id, item_id, JSONdata) => {
    updateUserAllo(user_id, year_id, item_id, JSONdata);
  
  };

  return (
    <tr>
      <td>
        <input type="text" onChange={onChange} name="name" value={name} />
      </td>
      <td>
        <input
          className="input-fte"
          type="number"
          onChange={onChange}
          name="jan"
          value={jan}
        />
      </td>
      <td>
        <input
          className="input-fte"
          type="number"
          onChange={onChange}
          name="feb"
          value={feb}
        />
      </td>
      <td>
        <input
          className="input-fte"
          type="number"
          onChange={onChange}
          name="mar"
          value={mar}
        />
      </td>
      <td>
        <input
          className="input-fte"
          type="number"
          onChange={onChange}
          name="apr"
          value={apr}
        />
      </td>
      <td>
        <input
          className="input-fte"
          type="number"
          onChange={onChange}
          name="may"
          value={may}
        />
      </td>
      <td>
        <input
          className="input-fte"
          type="number"
          onChange={onChange}
          name="jun"
          value={jun}
        />
      </td>
      <td>
        <input
          className="input-fte"
          type="number"
          onChange={onChange}
          name="jul"
          value={jul}
        />
      </td>
      <td>
        <input
          className="input-fte"
          type="number"
          onChange={onChange}
          name="aug"
          value={aug}
        />
      </td>
      <td>
        <input
          className="input-fte"
          type="number"
          onChange={onChange}
          name="sep"
          value={sep}
        />
      </td>
      <td>
        <input
          className="input-fte"
          type="number"
          onChange={onChange}
          name="oct"
          value={oct}
        />
      </td>
      <td>
        <input
          className="input-fte"
          type="number"
          onChange={onChange}
          name="nov"
          value={nov}
        />
      </td>
      <td>
        <input
          className="input-fte"
          type="number"
          onChange={onChange}
          name="dec"
          value={dec}
        />
      </td>
      <td>
        <button type="button" className="btn btn-primary" onClick={updateUserAllocation.bind(this, user_id, year_id, item._id, JSONdata)}>
          Update
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={deleteUserAllocation.bind(this, user_id, year_id, item._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

AdminProjectRow.propTypes = {
  item: PropTypes.object.isRequired
};

export default connect(
  null,
  { deleteUserAllo, updateUserAllo }
)(AdminProjectRow);
