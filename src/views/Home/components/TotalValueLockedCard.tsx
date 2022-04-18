import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Text, Image } from '@pancakeswap/uikit'
import { useTotalValue } from 'state/farms/hooks'
// import { useGetStats } from 'hooks/api'
import { useTranslation } from 'contexts/Localization'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  margin-top:20px;
  
`

const CustomCardBody = styled(CardBody)`
  min-height:120px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`

const TotalValueLockedCard = () => {
  const { t } = useTranslation()
  const tvl = useTotalValue()
  // const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <StyledTotalValueLockedCard>
      <CustomCardBody>
        <Text fontSize="22px" mb="24px">
            {t('Total Value Locked (TVL)')}
        </Text>
        <Row>
          <Image src="/images/home/tvl.png" alt="tvl logo" width={50} height={50} />
          <Text fontSize="28px" ml="20px">${tvl.toFixed(2)}</Text>
        </Row>
      </CustomCardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
