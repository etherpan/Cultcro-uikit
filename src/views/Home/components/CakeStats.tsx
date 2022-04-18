import React from 'react'
import { Card, CardBody, Image, Text, Skeleton } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { getBalanceNumber, formatLocalisedCompactNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useFarms, usePriceCakeBusd } from 'state/farms/hooks'
import { getCakeAddress } from 'utils/addressHelpers'
import { useTranslation } from 'contexts/Localization'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  display: flex;
  margin: 15px 0;
  padding-bottom: 15px;

  box-sizing: content-box;
  border-width: 0px;
  border-bottom: 1px;
  border-style: solid;
  border-image: linear-gradient(to right, #150d2e 0%, #898A97 20%, #7D7D80 50%, #898A97 80%, #150d2e 100%);
  border-image-slice: 1;
`

const Block = styled.div`
  margin-left: 10px;
  margin-top: 3px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()), 9)
  const totalMinted = totalSupply ? getBalanceNumber(totalSupply, 9) : 0
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply, 9) - burnedBalance : 0
  const NNPriceBusd = usePriceCakeBusd()
  const mcap = NNPriceBusd.isNaN() ? 0 : getBalanceNumber(NNPriceBusd.times(cakeSupply).times(1000000000), 9)
  const farms = useFarms()
  const rewardPerBlock = farms && farms.data ? farms.data[0].nnperblock : 0

  
  return (
    <StyledCakeStats>
      <CardBody>
        <Text fontSize="22px" mb="24px">
          {t('NN Status')}
        </Text>
        <Row>
          <Image src="/images/home/totalminted.png" alt="totalminted icon" width={50} height={50} />
          <Block>
            <Label>{t('Total Minted')}</Label>
            <CardValue fontSize="24px" decimals={0} value={totalMinted} lineHeight="36px"/>
          </Block>          
        </Row>
        <Row>
          <Image src="/images/home/totalburned.png" alt="totalburned icon" width={50} height={50} />
          <Block>
            <Label>{t('Total Burned')}</Label>
            <CardValue fontSize="24px" decimals={0} value={burnedBalance} lineHeight="36px"/>
          </Block>          
        </Row>
        <Row>
          <Image src="/images/home/circulatingsupply.png" alt="circulatingsupply icon" width={50} height={50} />
          <Block>
            <Label>{t('Circulating Supply')}</Label>
            <CardValue fontSize="24px" decimals={0} value={cakeSupply} lineHeight="36px"/>
          </Block>          
        </Row>
        <Row>
          <Image src="/images/home/marketcap.png" alt="marketcap icon" width={50} height={50} />
          <Block>
            <Label>{t('Market Cap')}</Label>
            <CardValue fontSize="24px" decimals={2} value={mcap} lineHeight="36px" prefix="$"/> 
          </Block>          
        </Row>
        <Row>
          <Image src="/images/home/perblock.png" alt="perblock icon" width={50} height={50} />
          <Block>
            <Label>{t('New NN/Block')}</Label>
            <Text fontSize="24px" lineHeight="36px">{rewardPerBlock}</Text>
            {/* <CardValue fontSize="24px" decimals={1} value={rewardPerBlock} lineHeight="36px"/> */}
          </Block>          
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
