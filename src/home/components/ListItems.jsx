import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';

import { Item } from './Item';

export const ListItems = ({ id, showList = false, category, number }) => {

    const swiperRef = useRef();

    return (
        <div className={`list-items ${showList ? 'list-active' : ''}`} id={id}>
            <div className='container-carrousel'>
                <Swiper
                    spaceBetween={15}
                    slidesPerView={6}
                    modules={[Navigation]}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    <SwiperSlide><Item url="/assets/164x240.png" description="Action, 2016" title={`Den of Thieves ${number}`} /></SwiperSlide>
                    <SwiperSlide><Item url="/assets/164x240.png" description="Action, 2016" title={`Den of Thieves ${number}`} /></SwiperSlide>
                    <SwiperSlide><Item url="/assets/164x240.png" description="Action, 2016" title={`Den of Thieves ${number}`} /></SwiperSlide>
                    <SwiperSlide><Item url="/assets/164x240.png" description="Action, 2016" title={`Den of Thieves ${number}`} /></SwiperSlide>
                    <SwiperSlide><Item url="/assets/164x240.png" description="Action, 2016" title={`Den of Thieves ${number}`} /></SwiperSlide>
                    <SwiperSlide><Item url="/assets/164x240.png" description="Action, 2016" title={`Den of Thieves ${number}`} /></SwiperSlide>
                    <SwiperSlide><Item url="/assets/164x240.png" description="Action, 2016" title={`Den of Thieves ${number}`} /></SwiperSlide>
                    <SwiperSlide><Item url="/assets/164x240.png" description="Action, 2016" title={`Den of Thieves ${number}`} /></SwiperSlide>
                </Swiper>
            </div>
            <div className="container-info-list">
                <span className='sep-bar'></span>
                <h2 className="tl-info-list">{category}</h2>
                <div className="container-navigator-list">
                    <button type='button' onClick={() => swiperRef.current?.slidePrev()} >
                        <img src="/assets/arrow-left.png" alt="Prev" />
                    </button>
                    <button type='button' onClick={() => swiperRef.current?.slideNext()}>
                        <img src="/assets/arrow-rigth.png" alt="Next" />
                    </button>
                </div>
                <hr />
                <a href="#">View all &gt;</a>
            </div>
        </div>
    )
}
