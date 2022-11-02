import { SearchQuery } from '~/generated/graphql';
import { Link, useLocation } from '@remix-run/react';
import { Price } from './Price';
import { classNames } from '~/utils/class-names';

export type ProductCardProps = SearchQuery['search']['items'][number];
export function ProductCard({
    productAsset,
    productName,
    slug,
    priceWithTax,
    currencyCode,
}: ProductCardProps) {
    const route = useLocation();
    const isExhibitionPage = route.pathname.includes('exhibition');
    return (
        <Link
            className={`listing-ptoduct${
                isExhibitionPage ? 'flex flex-col exhibition-product' : ''
            }`}
            prefetch="intent"
            to={`/art/${slug}`}
        >
            <img src={productAsset?.preview} alt={productName} />
            <div className="product-content">
                <div className="product-name">{productName}</div>
                <div className="product-price">
                    <Price
                        priceWithTax={priceWithTax}
                        currencyCode={currencyCode}
                    />
                </div>
            </div>
        </Link>
    );
}
