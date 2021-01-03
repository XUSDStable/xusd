const fs = require('fs');
const path = require('path');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);

function uniswapPairOracles() {
  return fs.readdirSync(path.resolve(__dirname, '../contracts/oracle/Variants'))
    .filter(filename => filename.endsWith('.sol'))
    .filter(filename => !filename.includes('DAI')) // comment this later
    .map(filename => filename.replace('.sol', ''));
}

// Deployment and ABI will be generated for contracts listed on here.
// The deployment thus can be used on basiscash-frontend.
const exportedContracts = [
  'XUSDStablecoin',
  'XUSDShares',
  'Pool_WETH',
  'Pool_DAI',
  'Stake_XUSD_WETH',
  'Stake_XUS_XUSD',
  'Stake_BAC_XUSD',
  "Stake_XUSD",
  //"FakeCollateral_WETH",
  //"FakeCollateral_DAI",
  //"FakeCollateral_BAC",
  ...uniswapPairOracles(),
];

module.exports = async (deployer, network, accounts) => {
  const deployments = {};

  for (const name of exportedContracts) {
    const contract = artifacts.require(name);
    deployments[name] = {
      address: contract.address,
      abi: contract.abi,
    };
  }
  const deploymentPath = path.resolve(__dirname, `../build/deployments.${network}.json`);
  await writeFile(deploymentPath, JSON.stringify(deployments, null, 2));

  console.log(`Exported deployments into ${deploymentPath}`);
};
