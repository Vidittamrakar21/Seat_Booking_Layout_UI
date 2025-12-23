import React from "react";

const Seat = ({ seat, status, onClick }) => {
  if (seat.type === "GAP") return <div className="gap" />;
  if (seat.type === "AISLE") return <div className="aisle" />;
  if (seat.type === "STAIRS") return <div className="stairs"></div>;

  return (
    <div
      className={`seat ${status}`}
      onClick={status === "available" || status === "selected" ? onClick : null}
    >
      {seat.id}
    </div>
  );
};

export default Seat;
