import axios from "axios";
import {GetCurrentDate} from "./GetCurrentDate.js";
const ResourceID = "c16b0e19-c02a-44a8-ba05-4db2c0545a2a";

/**
 * @async
 * @returns {JSON} National Grid Carbon Intensity Forecast
 */
export default function GetCarbonData() {
  // Gets Carbon Data And Returns without Axios Fetch Data

  let DateTime = GetCurrentDate();

  return axios({
    method: "get",
    url: `https://data.nationalgrideso.com/api/3/action/datastore_search_sql?sql=SELECT%20*%20FROM%20%22${ResourceID}%22%20WHERE%20%22datetime%22%20=%20%27${DateTime}:00%27`, // Entire Api Route 2022-03-27T00:00:00
    headers: { Accept: "application/json" },
    responseType: "json", // Expected Response Format
  })
    .then((Res) => {
      console.info("Carbon Intensity Data Collected");
      return Res.data.result.records[0]; // Returns All Data From API without Axios Data
    })
    .catch((err) => {
      console.error(err);
    });
}
