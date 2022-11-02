import { SearchQuery } from '~/generated/graphql';
import { Link } from '@remix-run/react';
import { Price } from './Price';

export type ProductCardProps = SearchQuery['search']['items'][number];
export function ProductCard({
    productAsset,
    productName,
    slug,
}: ProductCardProps) {
    return (
        <>
            <img
                alt=""
                src={productAsset?.preview}
            />
            <Link
                className="flex flex-col"
                prefetch="intent"
                to={`/art/${slug}`}
            >
                <div className="caption">{productName}</div>
            </Link>
        </>
    );
}
