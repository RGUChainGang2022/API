import axios from "axios";
import dhive from "@hiveio/dhive";
import "dotenv/config"

const privateKey = dhive.PrivateKey.fromString(process.env.BlockKey);

export default async function SendLoad(dataPacket) {

  let timestamp = new Date();
  console.log(dataPacket);

  axios({
    method: "post",
    url: `https://oxygen-2.cchain.me/add_block`,
    headers: { "content-type": "application/json" },
    data: {
      'data': dataPacket,
      'signature': privateKey.sign(dhive.cryptoUtils.sha256(JSON.stringify(dataPacket))).toString(),
      timestamp,
    },
  })
    .then((res) => {
        console.log(res.data)
      console.info("Datapacket Sent");
    })
    .catch((err) => {
      console.error(err);
    });
}
