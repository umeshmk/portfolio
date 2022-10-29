import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper';
import styles from './styles.module.scss';
import {Description} from '../Description';
import {Projects} from '../Projects';

export const Slider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div className={styles.slider}>
      {/* Slider */}
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <Description />
        </SwiperSlide>
        <SwiperSlide>
          <Projects />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};
