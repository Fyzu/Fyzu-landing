import React from 'react'
import { GetServerSidePropsResult } from 'next'
import styled from 'styled-components'
import { ApiClient, StaticAuthProvider } from 'twitch'

import MainBlock from '@/components/MainBlock'
import HistoryBlock from '@/components/HistoryBlock'
import YoutubeBlock from '@/components/YoutubeBlock'
import SocialsBlock from '@/components/SocialsBlock'
import SubscribersBlock from '@/components/TwitchSubscribersBlock'

import { ITwitchSubscriber } from '@/interfaces'

const Root = styled.main`
  display: flex;
  flex-direction: column;
`

interface IHomePageProps {
  subs: ITwitchSubscriber[]
}

function HomePage(props: IHomePageProps) {
  return (
    <Root>
      <MainBlock />
      <HistoryBlock />
      <YoutubeBlock />
      {props.subs.length > 0 && <SubscribersBlock subs={props.subs} />}
      <SocialsBlock />
    </Root>
  )
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<IHomePageProps>> {
  const twitchAccessToken = process.env.TWITCH_ACCESS_TOKEN
  if (!twitchAccessToken) {
    throw new Error('Access token required')
  }

  try {
    const authProvider = new StaticAuthProvider('thefyzu', process.env.TWITCH_ACCESS_TOKEN)
    const apiClient = new ApiClient({ authProvider })

    const channel = await apiClient.kraken.channels.getMyChannel()

    const limit = 100
    const subs: ITwitchSubscriber[] = []

    for (let page = 0, end = false; !end; page++) {
      const subscriptions = await apiClient.kraken.channels.getChannelSubscriptions(
        channel.id,
        0,
        limit
      )

      subs.push(
        ...subscriptions.map((subscription) => ({
          name: subscription.user.displayName,
          avatar: subscription.user.logoUrl,
        }))
      )

      if (subscriptions.length < limit) {
        end = true
      }
    }

    return {
      props: {
        subs,
      },
    }
  } catch (error) {
    console.error(error)
  }

  return {
    props: {
      subs: [],
    },
  }
}

export default HomePage
