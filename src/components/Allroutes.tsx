import React from "react";
import { useRoutes } from "react-router-dom";
import DetailedPost from "./DetailedPost";
import PostData from "./PostData";

const AllRoute = () => {
	let element = useRoutes([
		{
			path: "/",
			element: <PostData />,
		},
		{
			path: "/detail/:id",
			element: <DetailedPost />,
		},
	]);
	return element;
};

export default AllRoute;