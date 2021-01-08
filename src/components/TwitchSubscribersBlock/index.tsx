import React from 'react'
import Slider, { Settings as SliderSettings } from 'react-slick'
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
  Image,
  SubTitle,
  Footer,
  Description,
  Heart,
} from './styled'
import Button from '@/components/Button'

export interface ISubscribersBlockProps {
  subs: ITwitchSubscriber[]
}

const SLIDER_SETTINGS: SliderSettings = {
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
}

function TwitchSubscribersBlock(props: ISubscribersBlockProps) {
  const [rootRef, isVisible] = useInView()

  return (
    <Root ref={rootRef}>
      <Header>
        <Image />
        <Title>
          Спасибо за поддержку
          <SubTitle>Список подписчиков на Twitch</SubTitle>
        </Title>
      </Header>
      <Content>
        <Slider {...SLIDER_SETTINGS} autoplay={isVisible}>
          {props.subs.map((sub) => (
            <SliderItem key={sub.name}>
              <User>
                <UserAvatar avatar={isVisible ? sub.avatar : undefined} />
                <UserName>{sub.name}</UserName>
              </User>
            </SliderItem>
          ))}
        </Slider>
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
