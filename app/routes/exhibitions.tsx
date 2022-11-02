import React from 'react';
import { Link } from '@remix-run/react';
import { useLoaderData } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';
import { CollectionCard } from '~/components/collections/CollectionCard';
import { BookOpenIcon } from '@heroicons/react/solid';
import { LoaderArgs } from '@remix-run/server-runtime';

export async function loader({ request }: LoaderArgs) {
    const collections = await getCollections(request);
    return {
        collections,
    };
}

const NEW_COLLECTION = '[NewCollection]';
const COLLECTION_DATE_START_TAG = '[Collection-Date]';
const COLLECTION_DATE_END_TAG = '[/Collection-Date]';

export default function Index() {
    const { collections } = useLoaderData<typeof loader>();
    const { description } = collections;

    return (
        <>
            <section className="container bg-effect">
                <h1 className="main-title bg-effect">Exhibitions</h1>
                {collections.map((collection) => {
                    const isNewExhibition =
                    collection?.description?.includes(NEW_COLLECTION);
                    const hasDate =
                    collection.description?.includes(COLLECTION_DATE_START_TAG) &&
                    collection.description?.includes(COLLECTION_DATE_END_TAG);
                    let year = '';
                    if (hasDate) {
                        const startIndex = description?.indexOf(
                            COLLECTION_DATE_START_TAG,
                        );
                        const endIndex = collection.description?.indexOf(
                            COLLECTION_DATE_END_TAG,
                        );
                        year = collection.description?.substring(
                            startIndex + 17,
                            endIndex,
                        );
                    }
                    return (
                        <div className="exhibition-item" key={collection.id}>
                            <div className="exhibition-image-grid">
                                <div
                                    className="exhibition-image"
                                    style={{
                                        backgroundImage: `url('${collection.featuredAsset?.preview}')`,
                                    }}
                                />
                            </div>
                            <div className="exhibition-content-grid">
                                <div className="exhibition-content">
                                    <div className="exhibition-content-container">
                                        {isNewExhibition && (
                                            <span className="exhibition-tag">
                                                New Collection
                                            </span>
                                        )}
                                        <h4 className="exhibition-item-title">
                                            {collection.name}
                                        </h4>
                                        <br />
                                        {/* {year && (
                                            <p className="exhibition-item-date">
                                                {year}
                                            </p>
                                        )} */}
                                        <Link
                                            to={`/exhibition/${collection.slug}`}
                                            className="exhibition-item-link"
                                        >
                                            View Exhibition
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        // </li>
                    );
                })}
            </section>
        </>
    );
}
