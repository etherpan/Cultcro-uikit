import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'GroupsIcon',
    href: '/swap',
    // items: [
    //   {
    //     label: t('Swap'),
    //     href: '/swap',
    //   },
    //   {
    //     label: t('Liquidity'),
    //     href: '/liquidity',
    //   },
    // ],
  },
  // {
  //   label: t('Farms'),
  //   icon: 'FarmIcon',
  //   href: '/farms',
  // },
  // {
  //   label: t('Pools'),
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: t('Referral'),
  //   icon: 'TicketIcon',
  //   href: '/referral',
  // },
  // {
  //   label: t('Lottery'),
  //   icon: 'GroupsIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: t('Gaming'),
  //   icon: 'PredictionsIcon',
  //   href: '/games',
  // },
  // {
  //   label: t('Audits'),
  //   icon: 'NftIcon',
  //   href: '/audit',
  // },
  // {
  //   label: t('Info'),
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: t('DexGuru'),
  //       href: 'https://dex.guru/token/0x30B8274C3b452d6D5af4dedC3464C18E65dDeC64-bsc',
  //     },
  //     {
  //       label: t('CoinmarketCap'),
  //       href: '/coinmarket',
  //     },
  //     {
  //       label: t('Coingecko'),
  //       href: '/coingecko',
  //     },
  //   ],
  // },
  // {
  //   label: t('More'),
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: t('Github'),
  //       href: 'https://github.com/cultcroswap',
  //     },
  //     {
  //       label: t('Docs'),
  //       href: 'https://cultcroswap.com/docs/whitepaper.pdf',
  //     },
  //     {
  //       label: t('News'),
  //       href: 'https://medium.com/@cultcroswap',
  //     },
  //   ],
  // }
]

export default config
