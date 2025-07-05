import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6794ad9744b7480685e75068c6e95018",
  },
});
