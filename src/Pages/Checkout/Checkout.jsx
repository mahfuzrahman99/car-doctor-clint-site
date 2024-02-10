/* eslint-disable no-unused-vars */
import Navbar from "../Shared/Navbar/Navbar";
import checkout from "../../assets/images/checkout/checkout.png";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useState } from "react";
import swal from "sweetalert";
import moment from "moment";

const Checkout = () => {
  const services = useLoaderData();
  const { user } = useContext(AuthContext);
  const { title, _id, price, service_id, img } = services;
  const [booked, setBooked] = useState(false); 
  const [today, setToday] = useState(moment().format('YYYY-MM-DD')); 

  const handleCheckout = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: price,
    };

    // Check if the booking is already in the 'booked' state
    if (!booked) {
      fetch('https://car-doctor-server-site-khaki.vercel.app/bookings', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(booking),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setBooked(true);
            swal("Success", 'Service booked successfully', "success");
          }
        });
    } else {
      swal("Error", 'This service is already booked', "error");
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="relative my-12  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <img src={checkout} alt="" />
          <div className="absolute bottom-0 left-[420px]">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="296"
                height="50"
                viewBox="0 0 296 50"
                fill="none"
              >
                <path d="M296 49.3H0L27.8 0H268.3L296 49.3Z" fill="#FF3811" />
              </svg>
              <p className="p-2 absolute bottom-2 left-20 text-white font-semibold">
                Home/Checkout
              </p>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white absolute top-1/2 left-10">
            Check Out
          </h1>
        </div>
      </div>
      <div>
        <div>
          <form onSubmit={handleCheckout} className="px-28 py-12 rounded-lg mb-12 bg-[#F3F3F3]">
            <h1 className="text-center text-3xl font-semibold">{title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  defaultValue={today}
                  readOnly
                  name="date"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due amount</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={"$" + price}
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                type="text"
                name="message"
                className="h-[160px] w-full textarea input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <input
                className="btn bg-[#FF3811] text-white btn-block"
                type="submit"
                value="Order Confirm"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
