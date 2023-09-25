import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0be1e9a2efc3482dac30cbb132c8914e",
  },
});
