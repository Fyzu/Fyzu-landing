import React, { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { Settings as SliderSettings } from 'react-slick'
import { useInView } from 'react-intersection-observer'

import { ITwitchSubscriber } from '@/interfaces'

import {
  Root,
  Content,
  User,
  UserAvatar,
  UserName,
  SliderItem,
  Header,
  Title,
  Icon,
  IconImage,
  SubTitle,
  Footer,
  Description,
  Heart,
} from './styled'
import Button from '@/components/Button'

const Slider = dynamic(() => import('react-slick'))

export interface ISubscribersBlockProps {
  subs: ITwitchSubscriber[]
}

const SLIDER_SETTINGS: SliderSettings = {
  autoplay: true,
  dots: false,
  centerPadding: '0',
  infinite: true,
  slidesToShow: 3,
  speed: 1000,
  rows: 3,
  slidesPerRow: 1,
  slidesToScroll: 1,
  nextArrow: <></>,
  prevArrow: <></>,
} as const

function TwitchSubscribersBlock(props: ISubscribersBlockProps) {
  const [rootRef, isVisible] = useInView({ triggerOnce: true })

  const subs = useMemo(() => {
    const itemsOnScreen = SLIDER_SETTINGS.rows || 1

    const neededItems =
      Math.ceil(props.subs.length / itemsOnScreen) * itemsOnScreen - props.subs.length

    return props.subs.concat(props.subs.slice(0, neededItems))
  }, [props.subs])

  return (
    <Root ref={rootRef}>
      <Header>
        <Icon>
          <IconImage />
        </Icon>
        <Title>
          Спасибо за поддержку
          <SubTitle>Список подписчиков на Twitch</SubTitle>
        </Title>
      </Header>
      <Content>
        {isVisible && (
          <Slider {...SLIDER_SETTINGS}>
            {subs.map((sub, index) => (
              <SliderItem key={index}>
                <User>
                  <UserAvatar avatar={isVisible ? sub.avatar : undefined} />
                  <UserName>{sub.name}</UserName>
                </User>
              </SliderItem>
            ))}
          </Slider>
        )}
      </Content>
      <Footer>
        <Description>
          Ты тоже можешь поддержать меня
          <br />и стать частью сообщества
        </Description>
        <Button as="a" href="https://www.twitch.tv/products/thefyzu" target="_blank">
          <Heart /> Подписаться
        </Button>
      </Footer>
    </Root>
  )
}

export default TwitchSubscribersBlock
