import React from "react";
import PropTypes from "prop-types";

export const ContactCard = (props) => {
  return (
    <li className="list-group-item">
      <div className="row w-100">
        <div className="col-12 col-sm-6 col-md-3 px-0">
          <img
            src="https://www.mmaweekly.com/.image/t_share/MTk4NTIzNjA5MTE5Nzk0NjI3/hasbulla-magomedov.png"
            className="mx-auto d-block img-fluid"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-9 d-flex flex-column justify-content-center text-right">
          <div className="float-right">
            <button className="btn" onClick={() => props.onUpdate()}>
              <i className="fas fa-pencil-alt mr-3" />
            </button>
            <button className="btn" onClick={() => props.onDelete()}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
          <div>
            <label className="name lead">{props.name}</label>
            <br />
            <i className="fas fa-map-marker-alt text-muted icon-spacing" />
            <span className="text-muted">{props.address}</span>
            <br />
            <i className="fa fa-phone fa-fw text-muted icon-spacing" />
            <span className="text-muted small">{props.phone}</span>
            <br />
            <i className="fa fa-envelope fa-fw text-muted icon-spacing" />
            <span className="text-muted small text-truncate">{props.email}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

ContactCard.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};
