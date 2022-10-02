import publicIp from "public-ip";
import colors from "chalk";

async function getPublicIpV4() {
  // Console.log(await publicIp.v4());
  //=> '46.5.21.123'
  const ip = await publicIp.v4();
  console.log(colors.cyan.bold(ip));
  return colors.cyan.bold(ip);
}

async function getPublicIpV6() {
  // console.log(await publicIp.v6());
  //=> 'fe80::200:f8ff:fe21:67cf'
  const ip6 = await publicIp.v6();
  // return colors.cyan.bold(publicIp.v6());
  console.log(colors.cyan.bold(ip6));
  return colors.cyan.bold(ip6);
}

export { getPublicIpV4, getPublicIpV6 };
