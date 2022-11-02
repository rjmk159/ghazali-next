import { DataFunctionArgs, MetaFunction } from '@remix-run/server-runtime';
import { useLoaderData } from '@remix-run/react';
import { sdk } from '../../graphqlWrapper';
import { ProductCard } from '~/components/products/ProductCard';
import { APP_META_TITLE } from '~/constants';
import { filteredSearchLoader } from '~/utils/filtered-search-loader';
import { FaQuoteLeft } from 'react-icons/fa';

export const meta: MetaFunction = ({ data }) => {
    return {
        title: data?.collection
            ? `${data.collection?.name} - ${APP_META_TITLE}`
            : APP_META_TITLE,
    };
};

export async function loader({ params, request, context }: DataFunctionArgs) {
    const { result } = await filteredSearchLoader({
        params,
        request,
        context,
    });
    const collection = (await sdk.collection({ slug: params.slug })).collection;
    if (!collection?.id || !collection?.name) {
        throw new Response('Not Found', {
            status: 404,
        });
    }

    return {
        collection,
        result,
    };
}
const NEW_COLLECTION = '[NewCollection]';
const QUOTATION_START = '[Quote]';
const QUOTATION_END = '[/Quote]';
const QUOTATION_START_REPLACE = '<div class="single-exhibition-description-2">';
const QUOTATION_END_REPLACE = '</div>';
const COLLECTION_DATE_START_TAG = '[Collection-Date]';
const COLLECTION_DATE_END_TAG = '[/Collection-Date]';

export default function CollectionSlug() {
    const { collection, result } = useLoaderData<typeof loader>();
    const { description } = collection;

    const isNewExhibition = description.includes(NEW_COLLECTION);
    const hasDate =
        description.includes(COLLECTION_DATE_START_TAG) &&
        description.includes(COLLECTION_DATE_END_TAG);
    let year = '';
    let subStr = '--(#*--'
    if (hasDate) {
        const startIndex = description.indexOf(COLLECTION_DATE_START_TAG);
        const endIndex = description.indexOf(COLLECTION_DATE_END_TAG);
        year = description.substring(startIndex + 17, endIndex);
        subStr = description.substring(startIndex, endIndex + 18 );
       
    }
    return (
        <div className="container">
            <div
                className="single-exhibition-item"
                style={{
                    backgroundImage: `url('${collection?.featuredAsset?.preview}')`,
                }}
            >
                <div className="single-exhibition-content">
                    <span className="single-exhibition-title">
                        {isNewExhibition && (
                            <span className="exhibition-tag single-exhibition-tag">
                                New
                            </span>
                        )}

                        <span className="exhibition-title">
                            {collection.name}
                        </span>
                        {year && <span>{year}</span>}
                    </span>
                </div>
            </div>
            <FaQuoteLeft size={40} color="#ececec" />

            <div
                className="single-exhibition-description"
                dangerouslySetInnerHTML={{
                    __html: description
                        .replace(QUOTATION_START, QUOTATION_START_REPLACE)
                        .replace(QUOTATION_END, QUOTATION_END_REPLACE)
                        .replace(NEW_COLLECTION, '')
                        .replace(subStr, '')
                }}
            />

            <div className="sm:col-span-5 lg:col-span-4">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {result.items.map((item) => (
                        <ProductCard
                            key={item.productId}
                            {...item}
                        ></ProductCard>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function CatchBoundary() {
    return (
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8">
                Collection not found!
            </h2>
            <div className="mt-6 grid sm:grid-cols-5 gap-x-4">
                <div className="space-y-6">
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="sm:col-span-5 lg:col-span-4">
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div className="h-64 bg-slate-200 rounded"></div>
                        <div className="h-64 bg-slate-200 rounded"></div>
                        <div className="h-64 bg-slate-200 rounded"></div>
                        <div className="h-64 bg-slate-200 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
