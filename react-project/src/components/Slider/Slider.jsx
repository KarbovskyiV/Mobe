import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import './slider.scss';
import src from '../../assets/img/slides.png'

register();

const slides = [
    {
        src,
        title: 'IPhone 12',
        oldPrice: 30000,
        newPrice: 27999,
    },
    {
        src,
        title: 'IPhone 12',
        oldPrice: 30000,
        newPrice: 27999,
    },
    {
        src,
        title: 'IPhone 12',
        oldPrice: 30000,
        newPrice: 27999,
    },
]

const Slider = () => {

    const swiperElRef = useRef(null);

    useEffect(() => {
        swiperElRef.current.addEventListener('progres', (e) => {
            const [swiper, progress] = e.detail;
            console.log(progress);
        });

        swiperElRef.current.addEventListener('slidechange', (e) => {
            console.log('slide change');
        });
    }, []);

    const slidesRender = slides.map(({src, title, oldPrice, newPrice}, i) => {
        return (
            <swiper-slide key={i}>
                <img src={src} alt={title}/>
            </swiper-slide>
        )
    })

    return (
        <swiper-container
            ref={swiperElRef}
            slides-per-view='1'
            navigation='true'
            pagination='true'
            autoplay='true'
            loop='true'
        >
            {slidesRender}
        </swiper-container>
    )
}

export default Slider;