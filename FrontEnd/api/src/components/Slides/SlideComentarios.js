import './slideLanding.css'
import { dataSlide } from "./dataSlide";
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export function SlideComentarios() {

    return (
        <>  
            <h1 className='tituloParceiros'>CONHEÇA NOSSOS PARCEIROS</h1>
            <div className='divSwiper'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    autoplay={{ delay: 1700 }}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {dataSlide.map(user => (


                        <SwiperSlide key={user.id}>
                            <div className='divSwiperBloco'>
                                <img src={user.image} alt={user.username} />
                                <h2 className='tituloSlideLanding'>{user.username}</h2>
                                <p className='descricaoSlideLanding'>{user.testimonial}</p>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper >
        </div>
        </>
    );
};