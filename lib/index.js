/* eslint-disable spaced-comment,capitalized-comments */
"use strict";

//——————————————————————————————————————————————————————————————————————————————
// Imports and Required Dependencies
//——————————————————————————————————————————————————————————————————————————————

import colors from "chalk";
import * as getMyIpAddress from "../lib/getMyIpAddress.js";
import * as commander from "commander";

//——————————————————————————————————————————————————————————————————————————————
// Variables and Constant Declarations
//——————————————————————————————————————————————————————————————————————————————

const program = new commander.Command();

//——————————————————————————————————————————————————————————————————————————————
// CLI Parsing
//——————————————————————————————————————————————————————————————————————————————
program
  .command("public")
  .description("Public (v4) IP Address")
  .action(() => {
    // getMyIpAddress.getPublicIpV4().then(r => console.log(r));

    let labelText = colors.gray("Public IP Address (v4) : ");
    console.log(`${labelText}${getMyIpAddress.getPublicIpV4()}`);
  });

program
  .command("public6")
  .description("Public (v6) IP Address")
  .action(() => {
    let labelText = colors.gray("Public IP Address (v6) : ");
    console.log(`${labelText}${getMyIpAddress.getPublicIpV6()}`);
  });

program
  .command("private")
  .description("Private (v4) IP Address")
  .action(() => {
    // getMyIpAddress.getPublicIpV4().then(r => console.log(r));
    const coloredIpAdressV4 = () => {
      return getMyIpAddress.getPublicIpV4();
    };

    const labelTxt = colors.gray("Private IP Address (v4) : ");
    console.log(`${labelTxt}${coloredIpAdressV4}`);
  });

program.parse(process.argv);
