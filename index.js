import { FP } from "@fp-pro/client";

FP.load({ client: "token", region: "us" }).then(function (fp) {
  fp.send({ callbackData: true }).then(function (response) {
    console.log(response);
  }).catch(function (err) {
    alert("Error: " + err);
  });
});