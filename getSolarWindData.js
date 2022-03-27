import axios from "axios";
import { GetSettlementDate, GetSettlementPeriod } from "./GetCurrentDate.js";
const ResourceID = "db6c038f-98af-4570-ab60-24d71ebd0ae5";

/**
 * @async
 * @returns {JSON} National Grid Carbon Intensity Forecast
 */
export default function GetCarbonData() {
  // Gets Carbon Data And Returns without Axios Fetch Data

  return axios({
    method: "get",
    url: `https://data.nationalgrideso.com/api/3/action/datastore_search_sql?sql=SELECT%20*%20from%20%22${ResourceID}%22%20WHERE%20%22SETTLEMENT_DATE%22%20=%20%272022-03-27T00:00:00%27%20AND%20%20%22SETTLEMENT_PERIOD%22%20=%20%2716%27`, // Entire Api Route 2022-03-27T00:00:00
    headers: { Accept: "application/json" },
    responseType: "json", // Expected Response Format
  })
    .then((Res) => {
      console.info("Solar And Wind Data Collected");
      return Res.data.result.records[0]; // Returns All Data From API without Axios Data
    })
    .catch((err) => {
      console.error(err);
    });
}
