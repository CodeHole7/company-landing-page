
import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer'
// import Footer from '../../Footer';

export interface IMainLayoutProps {
    children?: ReactNode
}

const MainLayout: FC<IMainLayoutProps> = (props: IMainLayoutProps) => {
    return (
        <div id="root">
            <Head>
                <title>Project1</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
            </Head>
            <div>
                <Nav />
            </div>
            <div>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}
export default MainLayout;