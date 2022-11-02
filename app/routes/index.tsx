import React from 'react';
import { useLoaderData } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';
import { CollectionCard } from '~/components/collections/CollectionCard';
import { BookOpenIcon } from '@heroicons/react/solid';
import { LoaderArgs } from '@remix-run/server-runtime';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { getProductBySlug } from '~/providers/products/products';
import { filteredSearchLoader } from '~/utils/filtered-search-loader';
import { ProductCard } from '~/components/products/ProductCardForSlider';

export const loader = filteredSearchLoader;

export default function Index() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        // lazyLoad: true,
        slidesToShow: 4,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        pauseOnHover: true,
        variableWidth: true,
        arrows: true,
        nextArrow: (
            <NextArrow
                className={undefined}
                style={undefined}
                onClick={undefined}
            />
        ),
        prevArrow: (
            <PrevArrow
                className={undefined}
                style={undefined}
                onClick={undefined}
            />
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    function NextArrow(props: { className: any; style: any; onClick: any }) {
        const { className, style, onClick } = props;
        return (
            <div
                className={'home-slider-icon home-slider-icon-next'}
                style={{ ...style }}
                onClick={onClick}
            >
                <FaArrowRight />
            </div>
        );
    }

    function PrevArrow(props: { className: any; style: any; onClick: any }) {
        const { className, style, onClick } = props;
        return (
            <div
                className={'home-slider-icon home-slider-icon-prev'}
                style={{ ...style }}
                onClick={onClick}
            >
                <FaArrowLeft />
            </div>
        );
    }
    const { result } = useLoaderData<typeof loader>();
    return (
        <>
            <section className="container bg-effect">
                <h1 className="home-title">Browse Gallery</h1>
                <Slider className="home-slider-container" {...settings}>
                    {result.items.map((item) => (
                        <li key={item.productId} className="product-item">
                            <ProductCard
                                key={item.productId}
                                {...item}
                            ></ProductCard>
                        </li>
                    ))}
                </Slider>
            </section>
        </>
    );
}
