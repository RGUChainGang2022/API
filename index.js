import GetCarbonData from "./getCarbonData.js";
import getFutureEnergyData from "./getSolarWindData.js";


const PackageData = async () => {
  let CarbonData = await GetCarbonData();
  let SolarWindData = await getFutureEnergyData();
  
  let dataPacket = {
    TimeStamp: new Date(),
    data: {
      CarbonIntensityData: {
        TimeStamp: CarbonData["datetime"],
        "East Midlands": CarbonData["East Midlands"],
        "East England": CarbonData["East England"],
        "West Midlands": CarbonData["West Midlands"],
        "North Scotland": CarbonData["North Scotland"],
        "South Scotland": CarbonData["South Scotland"],
        "South West England": CarbonData["South West England"],
        "North Wales and Merseyside": CarbonData["North Wales and Merseyside"],
        "North East England": CarbonData["North East England"],
        "South East England": CarbonData["South East England"],
        "South Wales": CarbonData["South Wales"],
        "North West England": CarbonData["North West England"],
        Yorkshire: CarbonData["Yorkshire"],
        London: CarbonData["London"],
        "South England": CarbonData["South England"],
      },
      Solar: {
        TimeStamp: SolarWindData["TIME_GMT"],
        Solar_Forecast: SolarWindData["EMBEDDED_WIND_FORECAST"],
        Solar_Capacity: SolarWindData["EMBEDDED_WIND_CAPACITY"],
      },
      Wind: {
        TimeStamp: SolarWindData["TIME_GMT"],
        Wind_Forecast: SolarWindData["EMBEDDED_WIND_FORECAST"],
        Wind_Capacity: SolarWindData["EMBEDDED_WIND_CAPACITY"],
      },
    },
  };
};

PackageData();
setInterval(() => {PackageData();}, 1800000);
