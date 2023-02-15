import axios from "axios";

interface IData {
	myTitle: string;
	description: string;
}

export const FetchPost = async () => {
	return axios.get("http://localhost:2001/api/getpost").then((res) => res.data);
};
export const FetchSinglePost = async (id: any) => {
	return axios
		.get(`http://localhost:2001/api/getpost${id}`)
		.then((res) => res.data);
};
export const CreatingPostData = async ({ myTitle, description }: IData) => {
	return await axios
		.post("http://localhost:2001/api/createpost", {
			myTitle,
			description,
		})
		.then((res) => res.data);
};