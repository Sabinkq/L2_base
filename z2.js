function ipv4Parser(ip, subnet) {
  const ipOctets = ip.split('.').map(Number);
  const maskOctets = subnet.split('.').map(Number);

  const networkBlock = [];
  const hostIdentifier = [];

  for (let i = 0; i < 4; i++) {
    const netPart = ipOctets[i] & maskOctets[i];
    const hostPart = ipOctets[i] & ~maskOctets[i];

    networkBlock.push(netPart);
    hostIdentifier.push(hostPart);
  }

  return [networkBlock.join('.'), hostIdentifier.join('.')];
}

console.log(ipv4Parser('192.168.2.1', '255.255.255.0'));