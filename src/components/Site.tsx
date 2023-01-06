import React from 'react';
import styles from './Site.module.css'
import {Route, Routes} from "react-router-dom";
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    1234
                </div>
                <Routes>
                    <Route path={"/page1"} element={<PageOne/>}/>
                    <Route path={"/page2"} element={<PageTwo/>}/>
                    <Route path={"/page3"} element={<PageThree/>}/>
                </Routes>
                <div className={styles.content}>
               content
                </div>
            </div>
        </div>
    );
};

