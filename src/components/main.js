import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Controller } from 'swiper';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Autoplay, Controller]);


class Main extends Component {
    state = {
        slidesPerView: 1
    }
    faqClick=(e)=> {
        var faq = document.getElementsByClassName('faq-card');
        var faqCard = e.target.parentElement;
        var i;
        if (!faqCard.classList.contains('faq-card')) {
            faqCard = faqCard.parentElement;
        }
        faqCard.classList.toggle('faq-show');
        for (i=0;i<faq.length;i++) {
            if (faq[i]!=faqCard&&faq[i].classList.contains('faq-show')) {
                faq[i].classList.remove('faq-show');
                faq[i].lastElementChild.style.maxHeight = null;
            }
        }
        if (faqCard.classList.contains('faq-show')) {
            faqCard.lastElementChild.style.maxHeight = faqCard.lastElementChild.scrollHeight + 'px';
        } else {
            faqCard.lastElementChild.style.maxHeight = null;
        }
    }
    render() {
        return (
        <>
            <main>
                <section className="banner" id="banner">
                    <div className="container">
                        <h1>Empowering untapped potential 💻🚀</h1>
                        <p>Invicta is an award-winning tech startup that helps skilled refugees find sustainable employment in their field of expertise.</p>
                        <div className="banner-link">
                            <a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfTKZOqi3vLgzxcm2W517_Ibv5XXZWXMK08g2PDA8eOLdd7wA/viewform ">For Refugees</a>
                            <a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScS6Rua-gQby0dmG9b_Nln5DsaohxPImxFE33_dgZz2zMPb_g/viewform">For Businesses</a>
                        </div>
                    </div>
                    <div className="container banner-bottom">
                            <div className="browser">
                                <img src="./assets/img/banner1.jfif" alt="refugee" />
                            </div>
                            <div className="iphone">
                                <img src="./assets/img/banner2.jfif" alt="refugee" />
                            </div>
                        </div>
                </section>
                <section className="work" id="work">
                    <h2 className="section-title">Our Work</h2>
                    <div className="container">
                        <div className="work-content">
                            <div className="work-card">
                                <img src="./assets/img/work-title1.png" alt="Remote working environment" />
                                <h3>Remote working environment</h3>
                                <p>We help refugees find job opportunities via remote working (i.e. online). All they need is a PC or mobile phone to access our platform.</p>
                            </div>
                            <div className="work-card">
                                <img src="./assets/img/work-title2.png" alt="Extensive network of global companies" />
                                <h3>Extensive network of global companies</h3>
                                <p>We work with clients in the US, UAE, Germany, Norway and Turkey, to employ diverse talent.</p>
                            </div>
                            <div className="work-card">
                                <img src="./assets/img/work-title3.png" alt="Transparency and communication" />
                                <h3>Transparency and communication</h3>
                                <p>We work closely with both companies and displaced youth, to ensure maximum efficiency in project delivery.</p>
                            </div>
                        </div>
                        <img src="./assets/img/work1.jfif" alt="working" />
                    </div>
                </section>
                <section className="work-more">
                    <div className="container">
                        <div className="work-more-content">
                            <h2>But wait, there's more…</h2>
                            <p>Here are some of our exclusive features:</p>
                            <div className="work-more-content1">
                                <ul>
                                    <li>Introductory workshop on remote working, hosted by experts</li>
                                    <li>Virtual soft skills training, sponsored by our partner Share Academy</li>
                                    <li>Mental Health Diagnostic Screening</li>
                                    <li>FREE educational courses on design, marketing etc.</li>
                                    <li>Certified Personality Tests (for teams)</li>
                                    <li>Global Facebook community for cross-cultural collaboration</li>
                                    <li>Certified English, Arabic and French tests</li>
                                    <li>FREE Team Development Assessment</li>
                                </ul>
                            </div>
                        </div>
                        <div className="work-more-img">
                            <div className="iphone">
                                <img src="./assets/img/work-more1.jfif" alt="work more" />
                            </div>
                            <div className="ipad">
                                <img src="./assets/img/work-more2.png" alt="work more" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team" id="team">
                    <div className="container">
                        <h2 className="section-title">Our Team</h2>
                        <p>Meet the dedicated people who work around the clock to give you the best of Invicta</p>
                        <div className="team-container">
                            <div className="team-card">
                                <div className="team-card-img">
                                    <img src="./assets/img/member1.jpg" alt="Eden Tadesse" />
                                </div>
                                <h3>Eden Tadesse</h3>
                                <h4>CEO</h4>
                                <p>Eden is an impassioned tech founder with certifications from Google, MIT & Microsoft.</p>
                                <div className="team-card-link">
                                    <a href="mailto:eden.tadesse10@gmail.com"><img src="./assets/img/icon_mail.png" alt="Email Icon" /></a>
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/edentadessederibe/"><img src="./assets/img/icon_linkedin.png" alt="Linkedin Icon" /></a>
                                </div>
                            </div>
                            <div className="team-card">
                                <div className="team-card-img">
                                    <img src="./assets/img/member2.jpg" alt="Qussai Maklad" />
                                </div>
                                <h3>Qussai Maklad</h3>
                                <h4>COO</h4>
                                <p>Qussai is a Syrian-born, award-winning entrepreneur and SDG activist.</p>
                                <div className="team-card-link">
                                    <a href="mailto:qussai.syria@gmail.com"><img src="./assets/img/icon_mail.png" alt="Email Icon" /></a>
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/qussaimaklad/"><img src="./assets/img/icon_linkedin.png" alt="Linkedin Icon" /></a>
                                </div>
                            </div>
                            <div className="team-card">
                                <div className="team-card-img">
                                    <img src="./assets/img/member3.jpg" alt="Sato Takeru" />
                                </div>
                                <h3>Sato Takeru</h3>
                                <h4>CTO</h4>
                                <p>Sato is a Japan-based senior full stack developer with 7+ years of experience.</p>
                                <div className="team-card-link">
                                    <a href="mailto:georgelxl6@gmail.com"><img src="./assets/img/icon_mail.png" alt="Email Icon" /></a>
                                    <a target="_blank" rel="noreferrer" href="#"><img src="./assets/img/icon_linkedin.png" alt="Linkedin Icon" /></a>
                                </div>
                            </div>
                            <div className="team-card">
                                <div className="team-card-img">
                                    <img src="./assets/img/member4.png" alt="Lucia Molitorisova" />
                                </div>
                                <h3>Lucia Molitorisova</h3>
                                <h4>CFO</h4>
                                <p>VC Investment Manager and Senior Finance Consultant</p>
                                <div className="team-card-link">
                                    <a target="_blank" rel="noreferrer" href="mailto:lucia.molitorisova@gmail.com"><img src="./assets/img/icon_mail.png" alt="Email Icon" /></a>
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/molitorisova/"><img src="./assets/img/icon_linkedin.png" alt="Linkedin Icon" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="partners" id="partners">
                    <div className="container">
                        <h2 className="section-title">Our Partners</h2>
                        <div className="partners-container">
                            <a target="_blank" rel="noreferrer" href="#"><img src="./assets/img/partners1.jpg" /></a>
                            <a target="_blank" rel="noreferrer" href="#"><img src="./assets/img/partners2.jfif" /></a>
                            <a target="_blank" rel="noreferrer" href="#"><img src="./assets/img/partners3.png" /></a>
                            <a target="_blank" rel="noreferrer" href="#"><img src="./assets/img/partners4.jfif" /></a>
                        </div>
                    </div>
                </section>
                <section className="voice">
                    <div className="container">
                        <Swiper
                            spaceBetween={40}
                            slidesPerView={this.state.slidesPerView}
                            navigation
                            centeredSlides
                            autoplay={{delay: 3000, disableOnInteraction: false}}
                            loop={true}
                        >
                            <SwiperSlide>
                                <p>“Through Invicta I was able to enroll in free software courses and ultimately find an engineering role that fits my educational background. It has been a dream come true!”</p>
                                <img src="./assets/img/voice1.jpg" />
                                <h3>Adam Souif</h3>
                                <h4>Engineer, ZenBit</h4>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>“Invicta played an instrumental role in helping us find diverse talent across various tech roles. The projects were completed successfully and we will definitely hire again. Bravo to the team!”</p>
                                <img src="./assets/img/voice2.jpg" />
                                <h3>Kyle Morrison</h3>
                                <h4>CEO, Inclusivity</h4>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>“The consultants did a truly great job. Not only did they learn a whole new software quickly, but were willing to adapt and solve any obstacles that came up in using the new software to collaborate. They were very professional and excellent communicators.”</p>
                                <img src="./assets/img/voice3.jpg" />
                                <h3>Lauren Martìnez</h3>
                                <h4>Marketing Consultant, Squaredot</h4>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className="faq" id="faq">
                    <div className="container">
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <div className="faq-container">
                            <div className="faq-card">
                                <div className="faq-q" onClick={this.faqClick}>
                                    <h3>How can I join Invicta as an urban refugee or Internally Displaced Person (IDP)?</h3>
                                </div>
                                <div className="faq-a">
                                    <p>Thank you for your interest. You may fill out our refugee interest form available at the top of this page. If you are an Arabic-speaking refugee, you can join our online community Nawkish on Facebook (details below).</p>
                                </div>
                            </div>
                            <div className="faq-card">
                                <div className="faq-q" onClick={this.faqClick}>
                                    <h3>How can I get involved as a business?</h3>
                                </div>
                                <div className="faq-a">
                                    <p>Thank you for your interest. You may fill out our business interest form available at the top of this page. We are currently establishing a Facebook group for our business partners. You may follow us on Facebook to get updates on this and more.</p>
                                </div>
                            </div>
                            <div className="faq-card">
                                <div className="faq-q" onClick={this.faqClick}>
                                    <h3>Can I volunteer for Invicta?</h3>
                                </div>
                                <div className="faq-a">
                                    <p>Sure! You can work with us as a web-based volunteer. Please contact us at invictaorg.info@gmail.com with your full contact information and a short motivation letter. We will then shortly contact you for an interview.</p>
                                </div>
                            </div>
                            <div className="faq-card">
                                <div className="faq-q" onClick={this.faqClick}>
                                    <h3>How does the recruitment process work?</h3>
                                </div>
                                <div className="faq-a">
                                    <p>It consists of four steps: <br /><br />1. Initial Overview (talent and hard skills are assessed carefully)<br />2. Selection & Training (suitable candidates are chosen for training to optimize their existing skills)<br />3. Pre-Enrollment Phase (selected candidates are given cultural and language orientation of their host companies)<br />4. Recruitment (refugees are paired with global companies for either individual or group-based projects).</p>
                                </div>
                            </div>
                            <div className="faq-card">
                                <div className="faq-q" onClick={this.faqClick}>
                                    <h3>Who can I contact if I have a question that isn’t answered here?</h3>
                                </div>
                                <div className="faq-a">
                                    <p>Please write to us at invictaorg.info@gmail.com.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="arabic">
                    <div className="container">
                        <h2>Are you an Arabic-speaking refugee?</h2>
                        <p>Nawkish is our online community for talented displaced youth seeking employment.<br />We are growing our global community, with more than 28,500+ members today!</p>
                        <div className="arabic-link"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/groups/2526819854242292"><span>f</span><span>JOIN US HERE</span></a></div>
                    </div>
                </section>
                <section className="podcast">
                    <div className="container">
                        <h2>Our CEO was featured in a Startup Podcast🎙</h2>
                        <div className="podcast-link"><a target="_blank" rel="noreferrer" href="https://open.spotify.com/episode/52sllmXItdwjXMIb3RYYy8">LISTEN HERE<img src="./assets/img/receiver.png" alt="receiver Icon" /></a></div>
                    </div>
                </section>
                <section className="partners growth">
                    <div className="container">
                        <h2 className="section-title">Growth Accelerator Programs</h2>
                        <div className="partners-container">
                            <a target="_blank" rel="noreferrer" href="#"><img src="./assets/img/growth1.png" /></a>
                            <a target="_blank" rel="noreferrer" href="#"><img src="./assets/img/growth2.jfif" /></a>
                            <a target="_blank" rel="noreferrer" href="#"><img src="./assets/img/growth3.png" /></a>
                            <a target="_blank" rel="noreferrer" href="#"><img src="./assets/img/growth4.png" /></a>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div className="container">
                    <h2>Let's stay in touch!</h2>
                    <div className="footer-link">
                        <a target="_blank" rel="noreferrer" href="mailto:invictaorg.info@gmail.com"><img src="./assets/img/icon_mail.png" alt="Email Icon" /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/invictaorg"><img src="./assets/img/icon_facebook.png" alt="Facebook Icon" /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/invictaorg/"><img src="./assets/img/icon_instagram.png" alt="Instagram Icon" /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/invictaorg/"><img src="./assets/img/icon_linkedin.png" alt="Linkedin Icon" /></a>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/invictaorg_"><img src="./assets/img/icon_twitter.png" alt="Twitter Icon" /></a>
                    </div>
                </div>
            </footer>
        </>
        );
    }
}

export default Main;
