import { Link } from '@remix-run/react';
import * as React from 'react';
import { CollectionsQuery } from '~/generated/graphql';

export function CollectionCard({
    collection,
}: {
    collection: CollectionsQuery['collections']['items'][number];
}) {
    return (
        <>
            <span aria-hidden="true">
                <div>
                    <img src={collection.featuredAsset?.preview} />
                </div>
            </span>
            <Link
                to={'/exhibition/' + collection.slug}
                prefetch="intent"
                key={collection.id}
                className=""
            >
                <span className="caption">
                    {collection.name}
                </span>
            </Link>
        </>
    );
}
