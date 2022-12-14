import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    ShouldReloadFunction,
    useLoaderData,
} from '@remix-run/react';
import styles from './styles/custom.css';
import appCss from './styles/app.css';
import { Header } from './components/header/Header';
import {
    DataFunctionArgs,
    MetaFunction,
    json,
} from '@remix-run/server-runtime';
import { getCollections } from '~/providers/collections/collections';
import { activeChannel } from '~/providers/channel/channel';
import { APP_META_DESCRIPTION, APP_META_TITLE } from '~/constants';
import { useEffect, useState } from 'react';
import { CartTray } from '~/components/cart/CartTray';
import { getActiveCustomer } from '~/providers/customer/customer';
import Footer from '~/components/footer/Footer';
import { useActiveOrder } from '~/utils/use-active-order';
import bootstrapCSS from 'bootstrap/dist/css/bootstrap.min.css';

export const meta: MetaFunction = () => {
    return { title: APP_META_TITLE, description: APP_META_DESCRIPTION };
};

export function links() {
    return [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css' },
        { rel: 'stylesheet', href: appCss },
        { rel: 'stylesheet', href: bootstrapCSS },
        { rel: 'stylesheet', href: styles },
    ];
}

const devMode =
    typeof process !== 'undefined' && process.env.NODE_ENV === 'development';

// The root data does not change once loaded.
export const unstable_shouldReload: ShouldReloadFunction = ({
    url,
    prevUrl,
    params,
    submission,
}) => {
    if (prevUrl.pathname === '/sign-in') {
        // just logged in
        return true;
    }
    if (prevUrl.pathname === '/account' && url.pathname === '/') {
        // just logged out
        return true;
    }
    if (submission?.action === '/checkout/payment') {
        // submitted payment for order
        return true;
    }
    return false;
};

export type RootLoaderData = {
    activeCustomer: Awaited<ReturnType<typeof getActiveCustomer>>;
    activeChannel: Awaited<ReturnType<typeof activeChannel>>;
    collections: Awaited<ReturnType<typeof getCollections>>;
};

export async function loader({ request, params, context }: DataFunctionArgs) {
    const collections = await getCollections(request);
    const topLevelCollections = collections.filter(
        (collection) => collection.parent?.name === '__root_collection__',
    );
    const activeCustomer = await getActiveCustomer({ request });
    const loaderData: RootLoaderData = {
        activeCustomer,
        activeChannel: await activeChannel({ request }),
        collections: topLevelCollections,
    };
    return json(loaderData, { headers: activeCustomer._headers });
}

export default function App() {
    const [open, setOpen] = useState(false);
    const loaderData = useLoaderData<RootLoaderData>();
    const { collections } = loaderData;
    const {
        activeOrderFetcher,
        activeOrder,
        adjustOrderLine,
        removeItem,
        refresh,
    } = useActiveOrder();

    useEffect(() => {
        // When the loader has run, this implies we should refresh the contents
        // of the activeOrder as the user may have signed in or out.
        refresh();
    }, [loaderData]);

    return (
        <html lang="en" id="app">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" type="image/png"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />

                <link
                    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <Header
                    onCartIconClick={() => setOpen(!open)}
                    cartQuantity={activeOrder?.totalQuantity ?? 0}
                />
                <main className="main-content">
                    <Outlet
                        context={{
                            activeOrderFetcher,
                            activeOrder,
                            adjustOrderLine,
                            removeItem,
                        }}
                    />
                </main>
                <CartTray
                    open={open}
                    onClose={setOpen}
                    activeOrder={activeOrder}
                    adjustOrderLine={adjustOrderLine}
                    removeItem={removeItem}
                />
                <ScrollRestoration />
                <Scripts />
                {devMode && <LiveReload />}
                <Footer collections={collections}></Footer>
            </body>
        </html>
    );
}
