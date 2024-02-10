/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Order = ({ order, handleDelete, handleUpdateBookings, admin }) => {
  const {
    _id,
    name,
    email,
    phone,
    image,
    applyDate,
    appointmentForm,
    service,
    price,
    confirmationStatus,
  } = order;
  return (
    <tr className="w-full">
      <th>
        {confirmationStatus === "Confirmed" ? (
          <span className="text-4xl flex justify-center items-center">
            <MdDelete />
          </span>
        ) : (
          <span
            onClick={() => handleDelete(_id)}
            className="text-4xl flex justify-center items-center text-[#ff3811]"
          >
            <MdDelete />
          </span>
        )}
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-14 h-14">
            {image && <img src={image} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </td>
      <td>
        <h1>{name}</h1>
        <h1>{email}</h1>
      </td>
      <td>{service}</td>
      <td>{phone}</td>
      <td>{appointmentForm}</td>
      <td>{applyDate}</td>
      <td>${price}</td>
      <th>
        {confirmationStatus === "Pending" && admin ? (
          <button
            onClick={() => handleUpdateBookings(_id)}
            className="btn btn-ghost btn-sm"
          >
            {confirmationStatus}
          </button>
        ) : (
          <span className="font-bold text-primary">{confirmationStatus}</span>
        )}
      </th>
      {!admin && (
        <th className="">
          {confirmationStatus === "Confirmed" ? (
            <Link className="btn btn-sm p-1 rounded px-2 bg-[#ff3811] text-white hover:text-black transform duration-1000">
              pay
            </Link>
          ) : (
            <button disabled className="btn btn-ghost btn-sm">
              Pay
            </button>
          )}
        </th>
      )}
    </tr>
  );
};

export default Order;
