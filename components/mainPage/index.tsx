import React, {ChangeEvent, Component} from 'react';

import './main-page.css';

class MainPage extends Component {
    state = {
        email: '',
        locate: '',
        name: '',
        selectedOption: '',
        tel: ''
    };

    handleNameChange = (changeEvent: ChangeEvent<HTMLInputElement>) => {
        this.setState({name: changeEvent.target.value});
    };

    handleEmailChange = (changeEvent: ChangeEvent<HTMLInputElement>) => {
        this.setState({email: changeEvent.target.value});
    };

    handleTelChange = (changeEvent: ChangeEvent<HTMLInputElement>) => {
        this.setState({tel: changeEvent.target.value});
    };

    handleLocateChange = (changeEvent: ChangeEvent<HTMLInputElement>) => {
        this.setState({locate: changeEvent.target.value});
    };

    handleOptionChange = (changeEvent: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };

    fetchNotes = () => {
        fetch('/api')
            .then(response => response.json())
            .then(result => console.info(result));
    };

    handleSubmit = () => {
        fetch('/api', {
            body: JSON.stringify(this.state),
            headers: {'Content-Type': 'application/json'},
            method: 'POST'
        }).then(this.fetchNotes);

        this.setState({
            email: '',
            locate: '',
            name: '',
            selectedOption: '',
            tel: ''
        });
    };

    render() {
        const {name, tel, email, locate} = this.state;

        const isButtonDisabled = !name || !tel || !email || !locate;

        return (
            <form className="wrap">
                <section className="info">
                    <div className="img-woman">
                        <img
                            src="/img/woman2.webp"
                            alt="Яна Шестоперова"
                            title="Яна Шестоперова"
                        />
                    </div>
                    <p className="questions">ОСТАЛИСЬ ВОПРОСЫ?</p>
                    <p className="call-center">
                        С вами свяжется Яна Шестоперова,
                        <br />
                        <span className="strong">
                            руководитель отдела продаж
                        </span>
                    </p>
                    <div className="input-wrap">
                        <input
                            type="text"
                            className="row"
                            placeholder="Как вас зовут?"
                            value={name}
                            onChange={this.handleNameChange}
                        />
                        <div className="group-element">
                            <input
                                className="col"
                                type="text"
                                placeholder="Телефон"
                                value={tel}
                                onChange={this.handleTelChange}
                            />
                            <input
                                className="col"
                                type="text"
                                placeholder="E-mail"
                                value={email}
                                onChange={this.handleEmailChange}
                            />
                        </div>
                        <div className="special-box">
                            <input
                                className="col"
                                type="text"
                                placeholder="Откуда вы?"
                                value={locate}
                                onChange={this.handleLocateChange}
                            />
                            <div className="wrap-communication-method">
                                <p className="title-communication-method">
                                    Предпочтительный способ связи
                                </p>
                                <div className="group-element icon">
                                    <label>
                                        <input
                                            type="radio"
                                            name="contact"
                                            value="phone"
                                            checked={
                                                this.state.selectedOption ===
                                                'phone'
                                            }
                                            onChange={this.handleOptionChange}
                                            className="form-check-input"
                                        />
                                        <img
                                            src="/img/phone.png"
                                            width="29px"
                                            height="29px"
                                            alt="PHONE"
                                        />
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="contact"
                                            value="telegram"
                                            checked={
                                                this.state.selectedOption ===
                                                'telegram'
                                            }
                                            onChange={this.handleOptionChange}
                                            className="form-check-input"
                                        />
                                        <img
                                            src="/img/telegram.png"
                                            width="29px"
                                            height="29px"
                                            alt="telegram"
                                        />
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="contact"
                                            value="whatsApp"
                                            checked={
                                                this.state.selectedOption ===
                                                'whatsApp'
                                            }
                                            onChange={this.handleOptionChange}
                                            className="form-check-input"
                                        />
                                        <img
                                            src="/img/whatsApp.png"
                                            width="29px"
                                            height="29px"
                                            alt="WhatsApp"
                                        />
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="contact"
                                            value="viber"
                                            checked={
                                                this.state.selectedOption ===
                                                'viber'
                                            }
                                            onChange={this.handleOptionChange}
                                            className="form-check-input"
                                        />
                                        <img
                                            src="/img/viber.png"
                                            width="29px"
                                            height="29px"
                                            alt="viber"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="submit-section">
                        <button
                            disabled={isButtonDisabled}
                            className="submit-button"
                            onClick={this.handleSubmit}
                        >
                            ОТПРАВИТЬ
                        </button>
                        <p className="warning">
                            Нажимая на кнопку, вы даете согласие на
                            <br />
                            <a href="/" className="link">
                                обработку своих персональных данных
                            </a>
                        </p>
                    </div>
                </section>
            </form>
        );
    }
}

export default MainPage;
