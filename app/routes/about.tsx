import React from 'react';
import { useLoaderData } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';
import { CollectionCard } from '~/components/collections/CollectionCard';
import { BookOpenIcon } from '@heroicons/react/solid';
import { LoaderArgs } from '@remix-run/server-runtime';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

export async function loader({ request }: LoaderArgs) {
    const collections = await getCollections(request);
    return {
        collections,
    };
}

export default function Index() {
    const Spacer = (props: { p: any }) => (
        <div style={{ paddingBottom: props.p }}></div>
    );

    return (
        <div className="container about-row">
            <h1 className="main-title">About</h1>
            <p className="about-heading bg-effect">
                Ghazali Moinuddin is a renowned Painter and Prof. of Fine Arts
                at Jamia Millia Islamia, based in Delhi. He completed his BFA
                (Bachelor of Fine Arts) in 1999 from Jamia Millia Islamia and
                MFA (Master of Fine Arts) in 2001 from Jamia Millia Islamia.{' '}
            </p>
            <Spacer p={86} />
            <div className="row-fluid">
                <div className="column-50">
                    <div className="image-container image-left">
                        <img src="/assets/about/image1.png" alt="#" />
                    </div>
                </div>
                <div className="column-50">
                    <div className="image-container  image-center">
                        <img src="/assets/about/image4.png" alt="#" />
                    </div>
                    <Spacer p={80} />
                    <div className="image-container  image-right">
                        <img src="/assets/about/image2.png" alt="#" />
                    </div>
                </div>
            </div>
            <Spacer p={77} />
            {/* *********************************** */}
            <div className="row-fluid bg-effect">
                <div className="column-50">
                    <p className="mw-700 ">
                        Completely awestruck with nature and its various hues,
                        Ghazali's work echoes his emotions. Each work of his is
                        an endeavour to showcase the various forms of nature and
                        its mesmerising beauty. His artistic work is class apart
                        and the strokes in his canvasses are born out of a tube
                        of acrylic and his deft fingers.
                    </p>
                </div>
                <div className="column-50 ">
                    <p className="p-gara">
                        Recipient of many awards and recognitions, he has had
                        solo and group shows of his work globally. He has been
                        participating in various national and international art
                        camps. He was the only Indian participating in the much
                        talked about art event in Egypt, 'Sharm EI Sheikh'.
                    </p>
                </div>
            </div>
            <Spacer p={77} />
            {/* ************************************ */}
            <div className="row-fluid">
                <div className="column-50">
                    <div className="image-container image-right">
                        <img src="/assets/about/image3.png" alt="#" />
                    </div>
                    <Spacer p={60} />
                    <div className="image-container image-right">
                        <img src="/assets/about/image7.png" alt="#" />
                    </div>
                </div>
                <div className="column-50">
                    <div className="image-container">
                        <img src="/assets/about/image6.png" alt="#" />
                    </div>
                </div>
            </div>
            <Spacer p={77} />
            {/* *********************************** */}
            <div className="row-fluid">
                <div className="column-50 bg-effect">
                    <p>
                        His work falls under the category of 'Impression Art'
                        and what is even more striking is that his paintings are
                        solely based on imagination. In one of his works, a
                        series of 45 Mountain paintings, Ghazali has captured
                        the serenity, grandeur and natural beauty in a manner as
                        if he were replicating what stood in front of him. But,
                        in reality he reveals – “It has been ages since I have
                        been to a hill station. All the 45 paintings have come
                        through my imagination. Even when I am confined to a
                        room surrounded by books and magazines, my mind
                        transports me to a serene hill station where the beauty
                        of Himalayas leaves me in a Trans”.
                    </p>
                </div>
                <div className="column-50">
                    <p className="p-gara">
                        In some of his works, he applies new possibilities
                        directly, without any justification or a literary
                        content. In these paintings pure forms take reign in
                        their elementary capacity, completely visible in their
                        stiff, vertical or horizontal seams and layers are the
                        materials with which the compositions are rhythmically
                        constructed at their chosen best.
                    </p>
                </div>
            </div>
            <Spacer p={103} />
            {/* *********************************** */}
            <div className="row-fluid">
                <div className="column-50 image-center">
                    <div className="image-container">
                        <img src="/assets/about/image5.png" alt="#" />
                    </div>
                </div>
                <div className="column-50">
                    <Spacer p={50} />
                    <div className="image-container image-right">
                        <img src="/assets/about/image8.png" alt="#" />
                    </div>
                </div>
            </div>
            <Spacer p={77} />
            {/* *************************************** */}
            <div className="row-fluid">
                <div className="about-quote bg-effect">
                    <p className="p-big">
                        <FaQuoteLeft size={40} color="#ececec" />
                        Delving deep in his work, which not only expresses his
                        doting admiration for nature; his style reflects a
                        thirst of mankind's inner needs. His work is simple yet
                        striking and brings to life the natural marvels. The
                        work is not time bound; yet captures natural changes –
                        seasonal or habitation. Distractions do not find place
                        in his work; thus giving all the space to his theme –
                        'nature'.
                    </p>
                    <Spacer p={67} />
                    <span className="p-small">
                        He uses a fresh, firm yet spontaneous seeming
                        stylization of the forms of nature in depth, and a
                        symbolic content.
                    </span>
                </div>
            </div>
            <h2 className="main-title bg-effect">EXPERIENCES</h2>
            <div className="awards-exp">
                <div className="row-fluid">
                    <div className="column-50">
                        <div className="about-row-title">SOLO SHOWS</div>
                        <ul>
                            <li>
                                <span className="about-row-date">2008</span>
                                <span className="about-row-content">
                                    Qaus-E-Quzah: All India Fine Arts and Crafts
                                    Society, 1-Rafi Marg New Delhi{' '}
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2013</span>
                                <span className="about-row-content">
                                    Nuqoosh-E-Fitrat: Visual Arts Gallery India
                                    Habitate Center, Lodi Road, New Delhi{' '}
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2014</span>
                                <span className="about-row-content">
                                    Amwaaj-E-Takhayyul: MF Hussain Art Gallery,
                                    Jamia Millia Islamia University, N. Delhi{' '}
                                </span>
                            </li>
                            {/*  */}
                            <li>
                                <span className="about-row-date">2017</span>
                                <span className="about-row-content">
                                    "Kun Faya Koon”: Visual Art Gallery, India
                                    Habitat Center, Lodhi Road, New Delhi{' '}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <Spacer p={39} />
                {/* *************************** */}
                <div className="row-fluid">
                    <div className="column-50" />

                    <div className="column-50">
                        <div className="about-row-title">Group Shows</div>
                        <ul>
                            <li>
                                <span className="about-row-date">2019</span>
                                <span className="about-row-content">
                                    Participated in Art Exhibition Celebrating
                                    Indian Languages The Learning Curve at Twin
                                    Art Gallery, IGNCA, New Delhi.
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2017</span>
                                <span className="about-row-content">
                                    Participated in Jaipur Kala Mahotsav
                                    Organized by Pratibha Educational
                                    Development Research Society, Shilpgram,
                                    Jawahar Kala Kendra, Jaipur.
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2017</span>
                                <span className="about-row-content">
                                    Participated in National Art Exhibition
                                    Organized by Vidya Institute of Fashion
                                    Technology, Meerut Uttar Pradesh,
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2016</span>
                                <span className="about-row-content">
                                    Participated in India Art Festival, Nehru
                                    Center, Worli, Mumbai{' '}
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2015</span>
                                <span className="about-row-content">
                                    Participated in the India Art Festival,
                                    Nehru Center, Worli, Mumbai
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2015</span>
                                <span className="about-row-content">
                                    Participated in the Contemporary Art
                                    Exhibitions, at Lalit Kala Academy, Ravindra
                                    Bhawan, in the cities of New Delhi, Chennai
                                    and Bhopal.
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2012</span>
                                <span className="about-row-content">
                                    Participated in the Contemporary Art
                                    Exhibitions, at Lalit Kala Academy, Ravindra
                                    Bhawan, in the cities of New Delhi, Chennai
                                    and Bhopal.
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2012</span>
                                <span className="about-row-content">
                                    Participated in the contemporary Art
                                    Exhibition at Rabindar Bhawan Mandi House,
                                    New Delhi.
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2012</span>
                                <span className="about-row-content">
                                    Part of the 'All India group show by Fusion
                                    Art Foundation' , Chitra Kala Parishad
                                    Bangalore
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2010</span>
                                <span className="about-row-content">
                                    Participated in the Contemporary Art
                                    Exhibitions, at Lalit Kala Academy, Ravindra
                                    Bhawan, New Delhi
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2010</span>
                                <span className="about-row-content">
                                    Participated in the Contemporary Art
                                    Exhibitions, at Lalit Kala Academy, Ravindra
                                    Bhawan, New Delhi
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2009</span>
                                <span className="about-row-content">
                                    Participated in a group show for flood
                                    affected people of Bihar, organized by
                                    Modern School, Barakhamba Road, New Delhi,
                                    in 2009.
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2008</span>
                                <span className="about-row-content">
                                    Participated in a group show 'India on
                                    Canvas, Jr.', organized by the Ambassador of
                                    France and Khushi – an NGO at the Embassy of
                                    France, New Delhi
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2008</span>
                                <span className="about-row-content">
                                    Participated in the State Lalit Kala Academy
                                    Lucknow{' '}
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2008</span>
                                <span className="about-row-content">
                                    Participated in the 3rd Indian contemporary
                                    miniature painting and sculpture exhibition
                                    organized by Nav Siddhartha Art Group at
                                    Lalit Kala Academy New Delhi
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <Spacer p={39} />
                {/* *************************** */}
                <div className="row-fluid">
                    <div className="column-50">
                        <div className="about-row-title">Published Works</div>
                        <ul>
                            <li>
                                <span className="about-row-date">2018</span>
                                <span className="about-row-content">
                                    International Interview Published in We TV
                                    Arabia, Dubai,
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2017</span>
                                <span className="about-row-content">
                                    Interview and Article published in India
                                    Today, Press Trust of India,
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2014</span>
                                <span className="about-row-content">
                                    Painting published in Star Week magazine, in
                                    the January issue
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2014</span>
                                <span className="about-row-content">
                                    Painting published in Glittering India
                                    magazine, in the January issue
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2014</span>
                                <span className="about-row-content">
                                    Painting published in Femina magazine
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2014</span>
                                <span className="about-row-content">
                                    Painting published in Inside-Outside
                                    magazine
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2014</span>
                                <span className="about-row-content">
                                    Painting published in You & I magazine{' '}
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2013</span>
                                <span className="about-row-content">
                                    Painting published in Cineblitz magazine
                                </span>
                            </li>

                            <li>
                                <span className="about-row-date">2013</span>
                                <span className="about-row-content">
                                    Painting published in 'Women on Top'
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2012</span>
                                <span className="about-row-content">
                                    Painting published in 'Viswa Patrakar
                                    Sadan', a quarterly magazine
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2012</span>
                                <span className="about-row-content">
                                    Painting published in 'Media Opinion', a
                                    quarterly magazine
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2012</span>
                                <span className="about-row-content">
                                    Painting published in 'Lexicon collection
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2009</span>
                                <span className="about-row-content">
                                    Painting published in 'Women's' Era', a
                                    fortnightly magazine, in the February
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* *************************** */}
                <Spacer p={39} />
                <div className="row-fluid">
                    <div className="column-50" />
                    <div className="column-50">
                        <div className="about-row-title">Awards</div>
                        <ul>
                            <li>
                                <span className="about-row-date">2016</span>
                                <span className="about-row-content">
                                    Painting selected for display in the “Hall
                                    of Fame” of MSTF museum for 57 OIC
                                    Countries, associated with UNOSSC, in
                                    Tehran, Iran I.R.
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2017</span>
                                <span className="about-row-content">
                                    He received the Certificate of Appreciation
                                    in the Field of People Leader by Darsgah
                                    Mughal Shahenshah Bahadur Shah Zafar.
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2018</span>
                                <span className="about-row-content">
                                    He is the proud recipient of the Maulana
                                    Mohammad Ali Jauhar Young Achiever Award by
                                    Alumni Association of Jamia Millia Islamia.
                                    He received this on the institute's Alumni
                                    Day, December 23, 2018
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2016</span>
                                <span className="about-row-content">
                                    Painting selected for display in the “Hall
                                    of Fame” of MSTF museum for 57 OIC
                                    Countries, associated with UNOSSC, in
                                    Tehran, Iran I.R.
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2017</span>
                                <span className="about-row-content">
                                    He received the Certificate of Appreciation
                                    in the Field of People Leader by Darsgah
                                    Mughal Shahenshah Bahadur Shah Zafar.
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">2018</span>
                                <span className="about-row-content">
                                    He is the proud recipient of the Maulana
                                    Mohammad Ali Jauhar Young Achiever Award by
                                    Alumni Association of Jamia Millia Islamia.
                                    He received this on the institute's Alumni
                                    Day, December 23, 2018
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Spacer p={109} />
            <div className="find-collections">
                <p>
                    His collections find place in the following prestigious
                    places/homes
                </p>
                <ul>
                    <li>
                        <span className="find-collections-no">01</span>
                        <span className="find-collections-content">
                            {' '}
                            Cheazemi Haron, Deputy High Commissioner, Malaysian
                            High Commission, at Chanaykya Puri, New Delhi.
                        </span>
                    </li>
                    <li>
                        <span className="find-collections-no">02</span>
                        <span className="find-collections-content">
                            Mohd. Eabin Basir, Counselor Malaysian Embassy, at
                            Chanaykya Puri, New Delhi
                        </span>
                    </li>
                    <li>
                        <span className="find-collections-no">03</span>
                        <span className="find-collections-content">
                            At the Royal Caribbean
                        </span>
                    </li>
                    <li>
                        <span className="find-collections-no">04</span>
                        <span className="find-collections-content">
                            In the Governer House, New Delhi
                        </span>
                    </li>
                    <li>
                        <span className="find-collections-no">05</span>
                        <span className="find-collections-content">
                            With the ex- Ministry of External Affairs - Salman
                            Khursheed
                        </span>
                    </li>
                    <li>
                        <span className="find-collections-no">06</span>
                        <span className="find-collections-content">
                            With the Rajya Sabha Member - Tazeen Fatima
                        </span>
                    </li>
                    <li>
                        <span className="find-collections-no">07</span>
                        <span className="find-collections-content">
                            Paintings presented to the business tycoons of Dubai
                            invited as guests on the TV Programme - “A Day with
                            a Tycoon”, by ZEE TV, Dubai
                        </span>
                    </li>
                </ul>
            </div>
            <Spacer p={89} />
            <div className="awards-exp">
                <div className="row-fluid">
                    <div className="column-50" />
                    <div className="column-50">
                        <div className="about-row-title">
                            university appearances
                        </div>
                        <ul>
                            <li>
                                <span className="about-row-date">2008</span>
                                <span className="about-row-content">
                                    He assisted in an Educational Tour of the
                                    whole Department to Ajanta and Ellora
                                    (Aurangabad).
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">1996</span>
                                <span className="about-row-content">
                                    He assisted in the University Decoration
                                    Committee during Foundation Day, in Jamia.
                                </span>
                            </li>
                            <li>
                                <span className="about-row-date">1995</span>
                                <span className="about-row-content">
                                    He also participated in the Kalam Festival.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Spacer p={89} />
            <div className="row-fluid">
                <div className="certificate bg-effect">
                    <h4>Certificate of Appreciation</h4>
                    <p>
                        Artist Ghazali Moinuddin was awarded the Certificate of
                        Appreciation for participating the Painting competition
                        in 'Yamunautsav', held on 27th March, 2022. This was an
                        initiation focusing towards spreading awareness to make
                        river Yamuna regain its past glory.
                    </p>
                </div>
            </div>
            <Spacer p={112} />
        </div>
    );
}
