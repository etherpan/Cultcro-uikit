import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Text, Card, CardBody, Image } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'

const StyledFarmStakingCard = styled(Card)`
  min-height: 235px;
`
const StyledUnlockButton = styled(UnlockButton)`
  width: 100%;
  background: #ffce41;
  color: #f5f800;
`

const Block = styled.div`
  margin-bottom: 15px;
  margin-left: 10px;
  margin-top: 3px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Row = styled.div`
  display: flex;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
  const {t} = useTranslation()
  // const farmsWithBalance = useFarmsWithBalance()
  // const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  // const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  // const harvestAllFarms = useCallback(async () => {
  //   setPendingTx(true)
  //   try {
  //     await onReward()
  //   } catch (error) {
  //     // TODO: find a way to handle when the user rejects transaction or it fails
  //   } finally {
  //     setPendingTx(false)
  //   }
  // }, [onReward])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Text fontSize="22px" mb="24px">
          {t('Farms & Staking')}
        </Text>
        <Row>
          <Image src="/images/home/amounttoharvest.png" alt="harvest icon" width={50} height={50} />
          <Block>
            <Label>{t('NN to Harvest')}</Label>
            <CakeHarvestBalance />
          </Block>
        </Row>
        <Row>
          <Image src="/images/home/amountinwallet.png" alt="chy logo" width={50} height={50} />
          <Block>
            <Label>{t('NN in Wallet')}</Label>
            <CakeWalletBalance />
          </Block>
        </Row>
        {!account && <StyledUnlockButton />}
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
