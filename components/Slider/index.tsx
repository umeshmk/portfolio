import React, {useEffect, useRef, useState} from 'react';
import {Swiper as SwiperComponent, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Swiper, {Pagination} from 'swiper';
import styles from './styles.module.scss';
import {Description} from '../Description';
import {Projects} from '../Projects';
import {El} from '../Elements';
import {Buttons} from '../Button';

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [sObj, setSObj] = useState<Swiper>();

  return (
    <>
      <div className={styles.sliderBox}>
        <El.Frame type="vertical" />
        <div className={styles.slider}>
          <SwiperComponent
            modules={[Pagination]}
            autoHeight={true}
            onInit={(obj) => {
              setSObj(obj);
            }}
            onSlideChange={(sliderObj) => {
              setSlideIndex(sliderObj.activeIndex);
            }}
            className="mySwiper">
            <SwiperSlide>
              <Description />
            </SwiperSlide>
            <SwiperSlide>
              <Projects />
            </SwiperSlide>
          </SwiperComponent>
        </div>
        <El.Frame type="vertical" />
      </div>
      <El.Frame type="horizontal" />
      <div
        className={styles.buttons}
        onClick={() =>
          slideIndex === 0 ? sObj?.slideNext() : sObj?.slidePrev()
        }>
        {slideIndex === 0 ? (
          <Buttons label="Projects" isLeft={false} />
        ) : (
          <Buttons label="Home" isLeft={true} />
        )}
      </div>
    </>
  );
};
