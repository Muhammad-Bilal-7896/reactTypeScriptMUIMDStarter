import { useState, useEffect } from "react";

// Importing Components
import Header from "../../Components/Header";

// Importing Material UI
import Button from '@mui/material/Button';

import styles from "./style.module.css";

const Home = () => {

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            // if (window.innerWidth < 991) {
            //     setIsOpen(false);
            // }
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });


    return (
        <div className={`${styles.HomeContainer} bg-light`}>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-primary mt-4">
                            React TypeScript based MUI & MD Starter
                        </h2>

                        <br />

                        <h4 className="text-info">Tech Stacks Used</h4>
                        <ul>
                            <li>
                                <a href="https://github.com/facebook/react/blob/main/CHANGELOG.md#1820-june-14-2022">React version = 18.2.0</a>
                            </li>
                            <li>
                                <a href="https://www.npmjs.com/package/react-router-dom/v/6.6.1">React Router & React Router DOM = 6.6.1</a>
                            </li>
                            <li>
                                <a href="https://mui.com/material-ui/getting-started/overview/">Material UI = 5.11.5</a>
                            </li>
                            <li>
                                <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html">Typescript = 4.9.4</a>
                            </li>
                            <li>
                                <a href="https://mdbootstrap.com/docs/standard/">Md bootstrap(mdb) = 6.1.0</a>
                            </li>
                            <li>
                                <a href="https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/">Modular CSS</a>
                            </li>
                        </ul>
                        <br />
                        <Button variant="contained">Press Me</Button>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}
export default Home;