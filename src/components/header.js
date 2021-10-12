import React, { Component } from 'react';


class Header extends Component {
    state = {
        isTop: true,
        headerClassName: '',
        menuShow: false
    };
    componentDidMount() {
        document.addEventListener('scroll', () => {
            const height = window.innerHeight / 2;
            const isTop = window.scrollY < height;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
            if (!this.state.isTop) {
                this.setState({headerClassName: 'header-scroll'});
            } else {
                this.setState({headerClassName: ''});
            }
        });
    }
    
    menuBtnClick=(e)=> {
        e.preventDefault();
        e.stopPropagation();
        const body = document.getElementsByTagName('body');
        if (this.state.menuShow) {
            this.setState({
                menuShow: false
            })
        }
        else {
            this.setState({
                menuShow: true
            })
        }
        if (!this.state.menuShow) {
            body[0].classList.add('body_menu_open');
        }
        else {
            body[0].classList.remove('body_menu_open');
        }
    }
    clickFunc=()=>{
        this.setState({
            menuShow: false
        })
        const body = document.getElementsByTagName('body');
        if (!this.state.menuShow) {
            body[0].classList.add('body_menu_open');
        }
        else {
            body[0].classList.remove('body_menu_open');
        }
    }
  render() {
    return (
        <>
            <header className={this.state.headerClassName}>
                <div className="container">
                    <a href="#"><img src="./assets/img/logo.png" alt="Invicta Logo" /></a>
                    <nav>
                        <ul>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#partners">Partners</a></li>
                            <li><a href="#faq">Faq</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScSDm6YkPH8F1qkd-plexFk0MstdoMY1_CVMCqUseqoWD2Icg/viewform">Contact</a></li>
                        </ul>
                    </nav>
                    <div onClick={this.menuBtnClick} className={`${this.state.menuShow?"menu_btn_open":""} menu_btn`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
            <menu className={this.state.menuShow?"menu_open":""}>
                <nav>
                    <ul>
                        <li><a href="#work" onClick={this.clickFunc}>Work</a></li>
                        <li><a href="#team" onClick={this.clickFunc}>Team</a></li>
                        <li><a href="#partners" onClick={this.clickFunc}>Partners</a></li>
                        <li><a href="#faq" onClick={this.clickFunc}>Faq</a></li>
                        <li><a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScSDm6YkPH8F1qkd-plexFk0MstdoMY1_CVMCqUseqoWD2Icg/viewform" onClick={this.clickFunc}>Contact</a></li>
                    </ul>
                </nav>
            </menu>
            <a href="#banner" className={`${this.state.isTop? "":"show-to-top"} to-top`}>&#8593;</a>
        </>
    );
  }
}

export default Header;
