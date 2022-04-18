import React from 'react'
import { Text } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import useTokenBalance from 'hooks/useTokenBalance'
import styled from 'styled-components'
import { getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { BigNumber } from 'bignumber.js'
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

const CakeWalletBalance = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const cakeBalance = useTokenBalance(getCakeAddress())
  const cakeUserBalance = cakeBalance.balance ? getBalanceNumber(cakeBalance.balance, 9) : 0
  const cakePriceBusd = usePriceCakeBusd()
  const busdBalance = cakePriceBusd.isNaN() ? 0 : cakePriceBusd.times(cakeUserBalance).toNumber()
  console.log('debug->earningsBusd1', cakePriceBusd)
  if (!account) {
    return (
      <Block>
      {!cakePriceBusd.eq(0) ? <CardBusdValue value={busdBalance} /> : <br />}
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
      <CardValue value={cakeUserBalance} decimals={1} fontSize="24px" lineHeight="36px" />
      {!cakePriceBusd.eq(0) ? <CardBusdValue value={busdBalance} /> : <br />}
    </Block>
  )
}

export default CakeWalletBalance
