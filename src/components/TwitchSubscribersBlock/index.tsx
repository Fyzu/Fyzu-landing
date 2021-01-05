import React from 'react'
import Slider, { Settings as SliderSettings } from 'react-slick'
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

function TwitchSubscribersBlock(props: ISubscribersBlockProps) {
  const settings: SliderSettings = {
    accessibility: false,
    dots: false,
    lazyLoad: 'ondemand',
    autoplay: true,
    centerPadding: '0',
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    rows: 3,
    slidesPerRow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
  }

  return (
    <Root>
      <Header>
        <Image />
        <Title>
          Спасибо за поддержку
          <SubTitle>Список подписчиков на Twitch</SubTitle>
        </Title>
      </Header>
      <Content>
        <Slider {...settings}>
          {props.subs.map((sub) => (
            <SliderItem key={sub.name}>
              <User>
                <UserAvatar src={sub.avatar} alt={sub.name} />
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
