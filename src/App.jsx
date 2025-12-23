import React, { useState } from "react";
import seatLayout from "./seatLayout";
import Seat from "./components/Seat";
import "./App.css";

export default function App() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  

  const bookedSeats = ["B2", "C3","C4","C5","C6","C7","C8","E3","E8","E9" ,"D15","D16","A8"]; // Mock booked seats

  const toggleSeat = (id) => {
    setSelectedSeats((prev) =>
      prev.includes(id)
        ? prev.filter((s) => s !== id)
        : [...prev, id]
    );
  };

  const getSeatStatus = (id) => {
    if (bookedSeats.includes(id)) return "booked";
    if (selectedSeats.includes(id)) return "selected";
    return "available";
  };

  const totalPrice = () =>{
    return selectedSeats.reduce((total, seatId) => {
      for (let row of seatLayout.rows) {
        if (row.seats.find(seat => seat.id === seatId)) {
          return total + row.price;
        }
      }
       total;
    }, 0);
  }

  return (
  <div className="container">
    <h2 className="text-[19px] font-bold">{seatLayout.screenName}</h2>

     
  <div className="seat-container">
  {Object.entries(
    seatLayout.rows.reduce((acc, row) => {
      acc[row.price] = acc[row.price] || [];
      acc[row.price].push(row);
      return acc;
    }, {})
  )
  .sort((a, b) => Number(b[0]) - Number(a[0])) 
  .map(([price, rows]) => (
    <div key={price} className="price-section">
      
      {/* Price Label */}
      <div className="price-label">₹ {price}</div>

      {/* Rows under this price */}
      {rows.map((row) => (
        <div className="seat-row" key={row.rowLabel}>
          <div className="row-label">{row.rowLabel}</div>

          <div
            className="seat-grid"
            style={{
              gridTemplateColumns: `repeat(${seatLayout.columns}, 40px)`
            }}
          >
            {row.seats.map((seat, index) => (
              <Seat
                key={seat.id || index}
                seat={seat}
                status={seat.id ? getSeatStatus(seat.id) : ""}
                onClick={() => toggleSeat(seat.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  ))}
</div>


      <img src="screen.png" className="h-[40px] w-[420px] mt-[50px]" alt="" />
      <button onClick={()=> {console.log(totalPrice())}} className="h-[40px] w-[50%] bg-[#8871f7] rounded-md absolute bottom-3 cursor-pointer text-white font-bold">Book Tickets</button>
</div>
  );
}
