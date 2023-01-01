import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import LoginUi from "./Pages/Login";

const routes = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="login" />} />
			<Route path="/login" element={<LoginUi />} />
			<Route path="/home" element={<Home />} />
		</Routes>
	);
};

export default routes;
