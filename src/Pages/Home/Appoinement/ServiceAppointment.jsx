/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import moment from "moment";
import { useLoaderData } from "react-router-dom";

const ServiceAppointment = () => {
  const { user } = useContext(AuthContext);
  const services = useLoaderData();
  //   const today = new Date().toISOString().split("T")[0];
  const [today, setToday] = useState(moment().format("YYYY-MM-DD"));
  const axiosPublic = useAxiosPublic();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userData = {
      name: user?.displayName,
      email: user?.email,
      userPhoto: user?.photoURL,
      phone: data.phone,
      age: data.age,
      address: data.address,
      applyDate: data.applyDate,
      service: data.service,
      serviceDate: data.serviceDate,
      description: data.description,
      confirmationStatus: "Pending",
      appointmentForm: "Service",
      price: `${services.price}`,
      image: `${services.image}`
    };
    // console.log(userData);
    const userRes = await axiosPublic.post("/bookings", userData);
    if (userRes.data.insertedId) {
      reset();
      Swal.fire({
        position: "top",
        icon: "success",
        title: `${data.name}'s data is added to the users list`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center">
          <div className="max-w-5xl w-full bg-gray-200 p-8 rounded shadow-lg md:grid grid-cols-2 gap-3">
            <h1 className=" text-lg md:text-2xl font-semibold mb-6 text-center text-[#ff3811] col-span-2">
              Appointment form
            </h1>

            {/* Name field */}
            <div>
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                className="w-full bg-white p-2 rounded-md mt-1 focus:border-none focus:outline-none"
                {...register("name")}
                defaultValue={user?.displayName}
                readOnly
              />
            </div>

            {/* Email field */}
            <div>
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                className="w-full bg-white p-2 rounded-md mt-1 focus:border-none focus:outline-none"
                {...register("email")}
                defaultValue={user?.email}
                readOnly
              />
            </div>

            {/* Age field */}
            <div>
              <label className="block text-gray-700">Age:</label>
              <input
                type="number"
                className="w-full bg-white p-2 rounded-md mt-1 focus:border-none focus:outline-none"
                {...register("age", {
                  required: "please enter your age",
                })}
              />
              {errors.age && (
                <p className="text-red-500">{errors.age.message}</p>
              )}
            </div>

            {/* phone field */}
            <div>
              <label className="block text-gray-700">Number</label>
              <input
                type="number"
                className="w-full bg-white p-2 rounded-md mt-1 focus:border-none focus:outline-none"
                {...register("phone", {
                  required: "please enter a phone number",
                })}
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>

            {/* address */}
            <div>
              <label className="block text-gray-700">Address:</label>
              <input
                type="text"
                className="w-full bg-white p-2 rounded-md mt-1 focus:border-none focus:outline-none"
                {...register("address", {
                  required: "please enter your address",
                })}
              />
              {errors.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}
            </div>

            {/* service name */}
            <div>
              <label className="block text-gray-700">Services</label>
              <input
                className="w-full bg-white p-2 rounded-md mt-1 focus:border-none focus:outline-none"
                {...register("service")}
                defaultValue={services.serviceName}
                readOnly
              />
            </div>

            {/* service date */}
            <div>
              <label className="block text-gray-700">Service date:</label>
              <input
                type="date"
                className="w-full bg-white p-2 rounded-md mt-1 focus:border-none focus:outline-none"
                {...register("serviceDate", {
                  required: "please select a service date",
                })}
              />
              {errors.serviceDate && (
                <p className="text-red-500">{errors.serviceDate.message}</p>
              )}
            </div>

            {/* to day date */}
            <div>
              <label className="block text-gray-700">ToDay date:</label>
              <input
                type="date"
                className="w-full bg-white p-2 rounded-md mt-1 focus:border-none focus:outline-none"
                {...register("applyDate", {})}
                defaultValue={today}
                readOnly
              />
            </div>

            {/* message */}
            <div className="col-span-2">
              <label className="block text-gray-700">Description</label>
              <textarea
                type="text"
                className="w-full bg-white p-2 rounded-md mt-1 focus:border-none focus:outline-none"
                {...register("description")}
              />
            </div>

            {/* submit button */}
            <div className="flex justify-center my-2 col-span-2">
              <input
                type="submit"
                className="btn btn-ghost hover:bg-[#ff3811] p-2 bg-[#ff3811] text-white font-semibold w-[200px] rounded-md"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceAppointment;
