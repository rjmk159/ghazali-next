import { RootLoaderData } from '~/root';
import { Link, useLocation } from '@remix-run/react';
import GhazaliLogo from '../../assets/GhazaliLogo';
import { FaFacebookF, FaTwitterSquare, FaLinkedinIn } from 'react-icons/fa';

// import { faFaceRelieved } from '@fortawesome/pro-solid-svg-icons'

export default function Footer({
    collections,
}: {
    collections: RootLoaderData['collections'];
}) {
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
    return (
        <footer>
            <div className="container">
                <div className="footer-row">
                    <div className="col-xs-4 col-lg-4">
                        <ul className="footer-menu-list">
                            <LinkItem href="/content/terms-of-use">
                                Terms and conditions
                            </LinkItem>
                            <LinkItem href="/content/privacy-policy">
                                Privacy Policy
                            </LinkItem>
                            {/* <LinkItem href="/content/privacy-policy">Disclaimer</LinkItem> */}
                        </ul>
                    </div>
                    <div className="brand-logo col-xs-4 col-lg-4">
                        <div className="navbar-brannd">
                            <p>
                                Made with{' '}
                                <span style={{ color: 'red' }}>❤️</span> by{' '}
                                <a href="https://descriptive.ai">
                                    Descriptive.ai
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="right-menu col-xs-4 col-lg-4">
                        <ul className="footer-menu-list footer-menu-list-social">
                            <a href="https//facebook.com">
                                <FaFacebookF />
                            </a>
                            <a href="https//twitter.com">
                                <FaTwitterSquare />
                            </a>
                            <a href="https//linkedin.com">
                                <FaLinkedinIn />
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
