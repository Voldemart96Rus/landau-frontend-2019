import React from 'react';

import './footer.css';

export default function Footer() {
    return (
        <footer>
            <div>
                <h1 className="footer-headers">Офис продаж</h1>
                <p className="footer-descriptions">+7 (3412) 90-18-64</p>
                <p className="footer-descriptions">Ижевск, Лихвинцева, 46</p>
                <p className="footer-descriptions">
                    пн — пт: 9:00–20:00, сб: 10:00–17:00,
                </p>
                <p className="footer-descriptions">
                    вс: 10:00–14:00 (по записи)
                </p>
            </div>
            <div>
                <h1 className="footer-headers">Служба сервиса</h1>
                <p className="footer-descriptions">
                    +7 (3412) 271-899
                    <br />
                    вт — чт: 16:00-18:00
                </p>
            </div>
            <div>
                <h1 className="footer-headers">Меню сайта</h1>
                <ul className="footer-descriptions">
                    <li>Новости и акции</li>
                    <li>Как купить</li>
                    <li>Ход строительства</li>
                    <li>Документация</li>
                    <li>Лицензии банков</li>
                    <li>Чистовая отделка под ключ</li>
                    <li>Контакты</li>
                </ul>
            </div>
            <div>
                <h1 className="footer-headers">Следуйте за нами</h1>
                <div className="social-network">
                    <div className="container-icon">
                        <img
                            className="social-net"
                            src="/img/vk.png"
                            alt="vk"
                            width="34"
                            height="19"
                        />
                    </div>
                    <div className="container-icon">
                        <img
                            className="social-net"
                            src="/img/f.png"
                            alt="facebook"
                            width="18"
                            height="30"
                        />
                    </div>
                    <div className="container-icon">
                        <img
                            className="social-net"
                            src="/img/Instagram.png"
                            alt="Instagram"
                            width="30"
                            height="30"
                        />
                    </div>
                    <div className="container-icon">
                        <img
                            className="social-net"
                            src="/img/youtube.png"
                            alt="YouTube"
                            width="34"
                            height="24"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
