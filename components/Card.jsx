import React from "react";

const Card = ({ handleChange, index, values, checked }) => {
  return (
    <div className="card" style={cardStyles}>
      {index > 0 && (
        <input
          style={{
            position: "absolute",
            margin: "35px",
            transform: "scale(1.5)"
          }}
          onChange={e => handleChange(e, "largestRoom", index, !checked)}
          type="checkbox"
          name="largestRoom"
          value={index}
          checked={checked}
        />
      )}
      <h1 style={{ justifyContent: "center", display: "flex" }}>
        Room {index + 1}
      </h1>
      <div style={checked ? activeStyle : disabledStyle}>
        <div style={childrenStyle}>
          <form>
            <p>Adults (18+)</p>
            <select
              onChange={e => handleChange(e, "adults", index)}
              name="adults"
              value={values.adults}
            >
              <option value={1} disabled={!checked && index > 0}>
                1
              </option>
              <option value={2} disabled={!checked && index > 0}>
                2
              </option>
            </select>
          </form>
        </div>
        <div style={childrenStyle}>
          <form>
            <p>Children (0-17)</p>
            <select
              onChange={e => handleChange(e, "children", index)}
              name="chidren"
              value={values.children}
            >
              <option value={0} disabled={!checked && index > 0}>
                0
              </option>
              <option value={1} disabled={!checked && index > 0}>
                1
              </option>
              <option value={2} disabled={!checked && index > 0}>
                2
              </option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

const cardStyles = {
  backgroundColor: "lightGrey",
  border: "1px solid #979797",
  borderRadius: "0.5rem",
  boxShadow: "1px 1px 1px 1px #cbc",
  height: "300px",
  width: "300px",
  padding: "10px"
};

const activeStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  backgroundColor: "white",
  height: "200px"
};

const disabledStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  backgroundColor: "lightGrey"
};

const childrenStyle = {
  display: "flex",
  padding: "5px"
};

export default Card;
