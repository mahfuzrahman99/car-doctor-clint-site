import axios from "axios";
const axiosPublic = axios.create({
//   baseURL: "https://ph-house-hunter-job-task-server-side.vercel.app",
  baseURL: "http://localhost:3000",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
