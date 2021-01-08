import React from 'react'
import Image from 'next/image'

import {
  HistoryWrapper,
  HistoryItem,
  Root,
  Title,
  Description,
  Shuriken1,
  Shuriken2,
  Photo,
} from './styled'

const HISTORY_ITEMS: { title: string; description: React.ReactNode }[] = [
  {
    title: '1995',
    description: 'Родился - 15 февраля 1995',
  },
  {
    title: '2010',
    description: (
      <>
        Участие в открытых турнирахПо дисциплине <b>TF2</b>;
      </>
    ),
  },
  {
    title: '2015\n',
    description: (
      <>
        Начал профессионально игратьв <b>Overwatch</b>;
      </>
    ),
  },
  {
    title: '2016',
    description: (
      <>
        Завязал с киберспортом
        <br />и начал работать
        <br />
        <b>программистом</b>;
      </>
    ),
  },
  {
    title: '2017',
    description: (
      <>
        Вернулся в киберспорт <br />
        по дисциплине <b>PUBG</b>;начал вести стримы наплатформе <b>Twitch</b>;
      </>
    ),
  },
  {
    title: '2019',
    description: (
      <>
        ушел в <b>Apex Legends</b> и начал играть под <br />
        тегом <b>CrowCrowd</b>;в августе попал в <b>Winstrike</b>;В ноябре играл под знаменами{' '}
        <b>Na`Vi</b>;
      </>
    ),
  },
  {
    title: '2020',
    description: (
      <>
        Начал вести <b>Youtube</b> канал;
        <br />в сентябре Покинул состав <b>Na`Vi</b>;<br />
        продолжаю активно стримитьи играть;
      </>
    ),
  },
]

function HistoryBlock() {
  return (
    <Root>
      <Photo>
        <Image src="/images/fyzu-photo.png" layout="fill" />
      </Photo>
      <HistoryWrapper>
        {HISTORY_ITEMS.map(({ title, description }, index) => (
          <HistoryItem key={index} position={index % 2 ? 'left' : 'right'}>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </HistoryItem>
        ))}
      </HistoryWrapper>
      <Shuriken1 />
      <Shuriken2 />
    </Root>
  )
}

export default HistoryBlock
