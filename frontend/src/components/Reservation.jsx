import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import image from "../images/reserved.jpg";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        toast.success(response.data.message);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setTime("");
        setDate("");
        navigate("/Success");
      }
    } catch (error) {
      console.error("Error occurred during reservation:", error);
      toast.error("An error occurred during reservation.");
    }
  };

  return (
    <section id="reservation">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <img
              src={image}
              className="img-fluid rounded-5"
              alt="Reserved Table"
              style={{ width: "100%", maxWidth: "400px", height: "auto" }}
            />
          </div>
          <div className="col-md-7">
            <h2 className="mb-4">Make a Reservation</h2>
            <form onSubmit={handleReservation}>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control mt-3"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="date"
                  placeholder="Date"
                  className="form-control"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <input
                  type="time"
                  placeholder="Time"
                  className="form-control mt-3"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control mt-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                RESERVE NOW
              </button>
            </form>
          </div>
        </div>
        <br />
        <br />
      </div>
    </section>
  );
};

export default Reservation;
