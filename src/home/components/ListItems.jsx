import { useRef } from 'react';
import { Item } from './Item';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


export const ListItems = ({id, showList=false, category, number}) => {

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <div className={`list-items ${showList ? 'list-active':''}`} id={id}>
            <div className='container-carrousel'>
                <Swiper
                    spaceBetween={15}
                    slidesPerView={6}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
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
                    <div ref={navigationPrevRef}>
                        <img src="/assets/arrow-left.png" alt="Prev" />
                    </div>
                    <div ref={navigationNextRef}>
                        <img src="/assets/arrow-rigth.png" alt="Next" />
                    </div>
                </div>
                <hr />
                <a href="#">View all &gt;</a>
            </div>
        </div>
    )
}
