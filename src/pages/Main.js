import React from 'react';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }) {
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/8368427?v=4" alt="" />
                    <footer className="">
                        <strong>Isaque Akamine</strong>
                        <p>Desenvolvedor mobile especializado em React Native</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                    </div>
                    <div className="buttons">
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/8368427?v=4" alt="" />
                    <footer className="">
                        <strong>Isaque Akamine</strong>
                        <p>Desenvolvedor mobile especializado em React Native</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                    </div>
                    <div className="buttons">
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/8368427?v=4" alt="" />
                    <footer className="">
                        <strong>Isaque Akamine</strong>
                        <p>Desenvolvedor mobile especializado em React Native</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                    </div>
                    <div className="buttons">
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/8368427?v=4" alt="" />
                    <footer className="">
                        <strong>Isaque Akamine</strong>
                        <p>Desenvolvedor mobile especializado em React Native</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                    </div>
                    <div className="buttons">
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}
