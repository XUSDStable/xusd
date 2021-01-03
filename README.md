```
 __    __  __    __   ______   _______      __       __                                         
/  |  /  |/  |  /  | /      \ /       \    /  \     /  |                                        
$$ |  $$ |$$ |  $$ |/$$$$$$  |$$$$$$$  |   $$  \   /$$ |  ______   _______    ______   __    __ 
$$  \/$$/ $$ |  $$ |$$ \__$$/ $$ |  $$ |   $$$  \ /$$$ | /      \ /       \  /      \ /  |  /  |
 $$  $$<  $$ |  $$ |$$      \ $$ |  $$ |   $$$$  /$$$$ |/$$$$$$  |$$$$$$$  |/$$$$$$  |$$ |  $$ |
  $$$$  \ $$ |  $$ | $$$$$$  |$$ |  $$ |   $$ $$ $$/$$ |$$ |  $$ |$$ |  $$ |$$    $$ |$$ |  $$ |
 $$ /$$  |$$ \__$$ |/  \__$$ |$$ |__$$ |__ $$ |$$$/ $$ |$$ \__$$ |$$ |  $$ |$$$$$$$$/ $$ \__$$ |
$$ |  $$ |$$    $$/ $$    $$/ $$    $$//  |$$ | $/  $$ |$$    $$/ $$ |  $$ |$$       |$$    $$ |
$$/   $$/  $$$$$$/   $$$$$$/  $$$$$$$/ $$/ $$/      $$/  $$$$$$/  $$/   $$/  $$$$$$$/  $$$$$$$ |
                                                                                      /  \__$$ |
                                                                                      $$    $$/ 
                                                                                       $$$$$$/  
```





# XUSD Stablecoin

<p align="center">
🖥 Website – https://xusd.money
</p>


## What is XUSD?
<b> XUSD is a partial-collateralized and partial-algorithmic stablecoin protocol: </b>

  * <b>Partial-Collateralized</b> – Parts of XUSD supply is backed by collateral and parts of the supply algorithmic. The ratio of collateralized and algorithmic depends on the market's pricing of the XUSD stablecoin. If XUSD is trading at above $1, the protocol decreases the collateral ratio. If XUSD is trading at under $1, the protocol increases the collateral ratio. 
  * <b>Two Tokens</b> – XUSD is the stablecoin targeting a tight band around $1/coin. XUSD Shares (XUS) is the governance token which accrues seigniorage revenue and excess collateral value.
  * <b>Swap-based Monetary Policy</b> – XUSD uses principles from automated market makers like Uniswap to create swap-based price discovery and real-time stabilization incentives through arbitrage.
  * <b>Community Governance</b> – We will set the `owner_address` to a burn address and transfer the timelock admin to a multi-sig address when the protocol is stable, after that, all decisions must be made by community voting, and executed through the timelock contract. But before that, we would like to maintain some control over the protocol so that we can react fast to emergencies or new opportunities.
  * <b>Fair Distribution</b> 
      * No private sale & No premine
      * All XUS is minted as reward of liquidity farming
      * 4% staking rewards to dev address for development and marketing
      * Only 500 XUS & 500 XUSD minted at genesis to bootstrap liquidity
  * <b>Mint/Redeem Fees</b> 
      * 0.7% minting & 0.3% redemption fee at launch, decrease to zero gradually
      * Gathered to contract `XUSDFeePool`
      * Fees will be used to buyback XUS or distributed to XUS holders
  * <b>XUS Staking Rewards</b> 
      * 10 million total supply
      * Reward rate half every month, first month reward: min. 2 million, max. 6 million
      * Collateral ratio(CR) boost
          * No boost when global CR is 100%
          * 3x boost when global CR is 0%
          * 3*(1-CR) boost when global CR is between 0% and 100%

## Contracts

* XUSDStablecoin: 0x8E3E1409aE4f554092139E4932165B127Fe4E6Ca
* XUSDShares: 0xA1266323cbef54Cb18B8FC425945B2d8f1311D26
* XUSDFeePool: 0x376597E8C6182De942E87E00Db09b7fa754b8Dc3
* Timelock: 0x8c18e770B49A5879D8998eC26f2bb5A4Cb3Ec2e7
* Collateral pools:
  * Pool_WETH: 0x6394E727768b8E0696272600Baf749752e292D44
  * Pool_DAI: 0xD35D53Ab915761D8920e6d407632a09913A14a60
* Staking pools:
  * Staking_XUSD(1x): 0x6D3B558877d2Dc3cd998A02389e12DF1Af8A0F40
  * Staking_BAC_XUSD(2x): 0x3F7985fCFFdb52a429cB15c28B0756e560Dd0cfA
  * Staking_ETH_XUSD(2x): 0xe32Ce9ea3559d668cA42B7878Ca7df990738384b
  * Staking_XUS_XUSD(5x): 0xEF0622bFa2F474a067e763ACFd96355aA372bEB9