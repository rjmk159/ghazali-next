import { Link, useLoaderData } from '@remix-run/react';
import { ShoppingBagIcon } from '@heroicons/react/outline';
import { SearchBar } from '~/components/header/SearchBar';
import { useRootLoader } from '~/utils/use-root-loader';
import { UserIcon } from '@heroicons/react/solid';
import { useScrollingUp } from '~/utils/use-scrolling-up';
import { classNames } from '~/utils/class-names';
import { useLocation } from '@remix-run/react';
import GhazaliLogo from '~/assets/GhazaliLogo';

const LinkItem = (props: { children: any; href: string }) => {
    const router = useLocation();
    return (
        <li
            className={
                router.pathname.includes(props.href)
                    ? 'menu-item active'
                    : 'menu-item'
            }
        >
            <Link to={props.href}>{props.children}</Link>
        </li>
    );
};

export function Header({
    onCartIconClick,
    cartQuantity,
}: {
    onCartIconClick: () => void;
    cartQuantity: number;
}) {
    const data = useRootLoader();
    const isSignedIn = !!data.activeCustomer.activeCustomer?.id;
    const isScrollingUp = useScrollingUp();
    return (
        <header className={classNames('nav', { 'nav-active': isScrollingUp })}>
            <div className="container">
                <div className="nav-row row">
                    <div className="menu-container-grid col-xs-5 col-lg-4">
                        <ul className="menu-container">
                            <LinkItem href="/about">About</LinkItem>

                            <LinkItem href="/arts">Shop</LinkItem>
                            <LinkItem href="/exhibitions">Exhibitions</LinkItem>
                        </ul>
                    </div>
                    <div className="brand-logo col-xs-8 col-lg-4">
                        <div className="navbar-brand">
                            <Link to="/">
                                <GhazaliLogo />
                            </Link>
                        </div>
                    </div>
                    <div className="right-menu menu-container-grid col-xs-5 col-lg-4">
                        <ul className="menu-container">
                            {/* <SearchBar></SearchBar> */}
                            <LinkItem href="/account">Account</LinkItem>
                            <LinkItem href="/contact">Contact</LinkItem>
                            <li
                                className="menu-item"
                                aria-label="Open cart tray"
                                onClick={onCartIconClick}
                            >
                                Cart ({cartQuantity || 0})
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
