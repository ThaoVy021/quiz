import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Users from "./components/Users";
import Home from "./components/Home";
import ManageUsers from "./components/Admin/Content/ManageUsers";
import DashBoard from "./components/Admin/Content/DashBoard";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    {/* <React.StrictMode>*/}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />

          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="manage-users" element={<ManageUsers />} />
          <Route index element={<DashBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>

    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
