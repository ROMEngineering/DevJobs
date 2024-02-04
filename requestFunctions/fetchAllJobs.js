import axios from "axios";

export const fetchAllJobs = async () => {
    try {
        const finalData = await axios.get("http://localhost:3000/data.json");
        return finalData?.data;
    } catch (error) {
        console.log(error);
    }
};
