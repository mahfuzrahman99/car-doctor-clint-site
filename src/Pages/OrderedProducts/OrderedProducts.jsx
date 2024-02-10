/* eslint-disable no-unused-vars */
import DetailsNav from "../Shared/Navbar/DetailsNav";
import checkout from "../../assets/images/checkout/Rectangle 1548.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import Order from "./Order";
import swal from "sweetalert";
import axios from "axios";
import Swal from "sweetalert2";

const OrderedProducts = () => {
  const { user } = useContext(AuthContext);
  const admin = user?.email === "mahfuzurrahmanshabbir@gmail.com";
  const [bookings, setBookings] = useState([]);
  // console.log(bookings);

  useEffect(() => {
    let url;
    if (user?.email === "mahfuzurrahmanshabbir@gmail.com") {
      url = `https://car-doctor-server-site-khaki.vercel.app/bookingsAll`;
    } else {
      url = `https://car-doctor-server-site-khaki.vercel.app/bookings?email=${user?.email}`;
    }

    axios.get(url, { withCredentials: true }).then((res) => {
      setBookings(res.data);
    });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      iconColor: "#ff3811",
      showCancelButton: true,
      confirmButtonColor: "#570df8",
      cancelButtonColor: "#ff3811",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
      }
    });
  };

  const handleUpdateBookings = (id) => {
    fetch(`http://localhost:3000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ confirmationStatus: "Confirmed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal("Success", "Booking Successfully", "success");
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.confirmationStatus = "Confirmed";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  return (
    <div className=" ">
      <DetailsNav />
      <div>
        <div className="my-12">
          <div className="relative rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full">
            <img
              src={checkout}
              alt=""
              style={{ opacity: 0.8 }} // Set opacity here
            />
            <h1 className="text-4xl font-bold text-white absolute top-1/2 left-10">
              Cart Details
              <br />
              <span className="text-base font-medium text-[#FF3811]">
                Home - Product Details
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold">
          Your booking Carts: {bookings.length}
        </h2>
        <div className="overflow-x-auto w-full ">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Delete Service</th>
                <th>Service Image</th>
                <th>Customer Name & Email</th>
                <th>Name</th>
                <th>Phone number</th>
                <th>Booking for</th>
                <th>Booking Date</th>
                <th>Price</th>
                <th>Booking Status</th>
                {!admin && <th>Payment</th>}
              </tr>
            </thead>
            <tbody>
              {bookings?.map((order) => (
                <Order
                  key={order._id}
                  handleDelete={handleDelete}
                  handleUpdateBookings={handleUpdateBookings}
                  order={order}
                  admin={admin}
                ></Order>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderedProducts;
