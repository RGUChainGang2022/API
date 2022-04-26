import axios from "axios";
import dhive from "@hiveio/dhive";
import "dotenv/config";

const privateKey = dhive.PrivateKey.fromString(process.env.BlockKey);

export default async function SendLoad(dataPacket) {
  let timestamp = new Date();

  axios({
    method: "post",
    url: `https://oxygen-2.cchain.me/add_block`,
    headers: { "content-type": "application/json" },
    data: {
      data: dataPacket,
      signature: privateKey
        .sign(dhive.cryptoUtils.sha256(JSON.stringify(dataPacket)))
        .toString(),
      timestamp,
    },
  })
    .then((Res) => {
      console.info(`Datapacket Sent: Response (${Res.data})`);
      console.info(`--------------------------------\n`);
    })
    .catch((err) => {
      console.error(err);
    });
}
