import React from 'react'
import { Card, CardBody, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { useTranslation } from 'contexts/Localization'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  min-height: 450px;
  margin-top: 20px;
`

const CustomCardBody = styled(CardBody)`
  margin-top: 10px;
  min-height: 450px;
`;

const TwitterCard = () => {
  const {t} = useTranslation()

  return (
    <StyledTwitterCard>
      <CustomCardBody>
        <Text fontSize="22px" mb="24px">
          {t('Announcements')}
        </Text>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'GreenhouseSwap'
          }}
          options={{
            height: '450',
            chrome: "noheader, nofooter",
          }}
        />
      </CustomCardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
