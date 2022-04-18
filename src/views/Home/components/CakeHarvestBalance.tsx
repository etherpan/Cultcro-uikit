import React from 'react'
import { Text } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import useAllEarnings from 'hooks/useAllEarnings'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { usePriceCakeBusd } from 'state/farms/hooks'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const Block = styled.div`
  display: flex;
  align-items: center;
`

const LockBlock = styled.div`
  margin-left: 5px;
  background: #fbdddd;
  display: inline-block;
  margin-top: 4px;
  padding: 1px 10px;
  border-radius: 30px;
`

const CakeHarvestBalance = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const allEarnings = useAllEarnings()
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(9)).toNumber()
  }, 0)
  const cakePriceBusd = usePriceCakeBusd()
  const earningsBusd = cakePriceBusd.isNaN() ? 0 : new BigNumber(earningsSum).multipliedBy(cakePriceBusd).toNumber()

  if (!account) {
    return (
      <Block>
        {!cakePriceBusd.eq(0) && <CardBusdValue value={earningsBusd}/>}
        <LockBlock>
          <Text color="#FF1327" fontSize="14px" style={{ lineHeight: '24px' }}>
            {t('Locked')}
          </Text>
        </LockBlock>
      </Block>
    )
  }

  return (
    <Block>
      <CardValue value={earningsSum} decimals={1} fontSize="24px" lineHeight="36px" />
      {!cakePriceBusd.eq(0) && <CardBusdValue value={earningsBusd}/>}
    </Block>
  )
}

export default CakeHarvestBalance
