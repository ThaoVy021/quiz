import axios from "../utils/axiosCustomize";

const postCreateNewUser = async (email, password, userName, role, image) => {
  const form = new FormData();
  form.append("email", email);
  form.append("password", password);
  form.append("username", userName);
  form.append("role", role);
  form.append("userImage", image);
  return axios.post("api/v1/participant", form);
};

const getAllUsers = async () => {
  return axios.get("api/v1/participant/all");
};

export { postCreateNewUser, getAllUsers };
