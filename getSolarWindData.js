import axios from "axios";
import { GetSettlementDate, GetSettlementPeriod } from "./GetCurrentDate.js";
const ResourceID = "db6c038f-98af-4570-ab60-24d71ebd0ae5";

/**
 * @async
 * @returns {JSON} National Grid Carbon Intensity Forecast
 * @description Gets Solar and Wind Data And Returns without Axios Fetch Data
 */
export default function GetSolarWindData() {
  let SettlementDate = `${GetSettlementDate()}T00:00:00`;
  let SettlementPeriod = GetSettlementPeriod();
  console.log(`Settlement Period: `,SettlementPeriod);

  return axios({
    method: "get",
    url: `https://data.nationalgrideso.com/api/3/action/datastore_search_sql?sql=SELECT%20*%20from%20%22${ResourceID}%22%20WHERE%20%22SETTLEMENT_DATE%22%20=%20%27${SettlementDate}%27%20AND%20%20%22SETTLEMENT_PERIOD%22%20=%20%27${SettlementPeriod}%27`, // Entire Api Route 2022-03-27T00:00:00
    headers: { Accept: "application/json" },
    responseType: "json", // Expected Response Format
  })
    .then((Res) => {
      if (Res.data.result.records[0] == []) {
        setTimeout(GetSolarWindData, 120000); // Waits 2 Minutes if data not found (This is to allow API to update for the current Settlement period)
      } else {
        console.info("Solar And Wind Data Collected");
        return Res.data.result.records[0]; // Returns All Data From API without Axios Data
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
