import { useLoaderData } from '@remix-run/react';
import { ProductCard } from '~/components/products/ProductCard';
import { useRef, useState } from 'react';
import { FacetFilterTracker } from '~/components/facet-filter/facet-filter-tracker';
import FacetFilterControls from '~/components/facet-filter/FacetFilterControls';
import { filteredSearchLoader } from '~/utils/filtered-search-loader';
import { FiltersButton } from '~/components/FiltersButton';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export const loader = filteredSearchLoader;

export default function Search() {
    const { result } = useLoaderData<typeof loader>();
    return (
        <div className="container">
            <div className="mt-6">
                <h1 className="main-title">Shop</h1>
                <div className="">
                    <div className="">
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                        >
                            <Masonry>
                                {result.items.map((item) => (
                                    <ProductCard
                                        key={item.productId}
                                        {...item}
                                    ></ProductCard>
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </div>
            </div>
        </div>
    );
}
