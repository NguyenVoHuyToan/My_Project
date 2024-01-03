import React from 'react';
import './contact-page.scss';
import Logo from '../../assets/img/logo-black.png';
import Button from '../../components/common/button/button';

const Contactpage = () => {
    return (
        <div className='contact-page'>
            <div>
                <div class="C-container_1">
                    <p class="C-container_title_1">GET IN TOUCH</p>
                    <div class="C-sub-container_1">
                        <div class="C-column_1">
                            <div class="C-column-title">
                                <p class="C-sub_title">Send us an email</p>
                                <div class="C-child-box-subtitle_1"></div>
                            </div>

                            <div class="C-sub-column_1">
                                <div class="C-sub-column_1_1">
                                    <div class="C-sub-column_1_1_1">
                                        <div class="C-sub_title_2"><label class="label">Name</label></div>
                                        <div><input class="C-textbox--simple" type="text" placeholder="Your name" /></div>
                                    </div>
                                    <div class="C-sub-column_1_1_1">
                                        <div class="C-sub_title_2"><label for="">Phone Number</label></div>
                                        <div><input class="C-textbox--simple" type="text" placeholder="Your phone" /></div>
                                    </div>
                                </div>

                                <div class="C-sub-column_1_1">
                                    <div class="C-sub-column_1_1_1">
                                        <div class="C-sub_title_2"><label for="">Email</label></div>
                                        <div><input class="C-textbox--simple" type="text" placeholder="Your email" /></div>
                                    </div>

                                    <div class="C-sub-column_1_1_1">
                                        <div class="C-sub_title_2"><label for="">Subject</label></div>
                                        <div><input class="C-textbox--simple" type="text" placeholder="Input text" /></div>
                                    </div>
                                </div>

                                <div>
                                    <div class="C-sub-column_1_1_1">
                                        <div class="C-sub_title_2"><label>Message</label></div>
                                        <div><input class="C-textbox--big" type="text" placeholder="Message" /></div>
                                    </div>
                                </div>
                                <div class="C-buton_submit">
                                    <Button
                                        text="SUBMIT"
                                        btnStyle="auth-btn"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="C-column_2"></div>
                        <div class="C-column_3">
                            <div class="C-column-title">
                                <p class="C-sub_title">Contact us</p>
                                <div class="C-child-box-subtitle_1"></div>
                            </div>

                            <div>
                                <div class="C-sub-column_3">
                                    <label>Need assistance or have questions? Don't hesitate to get in touch with us. ShineAura's
                                        customer care team is available 24/7 to assist you. Let us know how we can help. We're here to listen and ensure you have the best shopping experience on <b>ShineAura</b>.
                                    </label>
                                </div>

                                <div class="C-sub-column_3">
                                    <div class="C-store-information">
                                        <i class="bi bi-envelope-fill"></i>
                                        <label className='social-label'>thisisouremail@gmail.com</label>
                                    </div>
                                    <div class="C-store-information">
                                        <i class="bi bi-telephone-fill"></i>
                                        <label className='social-label'>(000) 000 0000</label>
                                    </div>
                                    <div class="C-store-information">
                                        <i class="bi bi-geo-alt-fill"></i>
                                        <label className='social-label'>Street Address #000, City, State, Zip ######</label>
                                    </div>
                                </div>
                                <div class="C-sub-column_3">
                                    <div>
                                        <label>Contact our medias:</label>
                                    </div>
                                    <div class="C-contact-information">
                                        <button> <i class="bi bi-facebook social-icon" ></i></button>
                                        <button><i class="bi bi-twitter-x social-icon"></i></button>
                                        <button><i class="bi bi-instagram social-icon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="C-container_2">
                        <div class="C-container_title_2">
                            <p class="C-FAQ_1">FAQ</p>
                            <p class="C-FAQ_2">Frequently Asked Questions</p>
                        </div>
                        <div class="C-sub-container_2">
                            <div class="C-column-title">
                                <img class="C-img" alt="" src={Logo} />
                                <div class="C-child-box-subtitle_2"></div>
                            </div>
                            <div>
                                <div class="C-sub-button_2">
                                    <button class="C-button-FAQ_1">
                                        <i class="bi bi-plus-circle"></i>
                                        <label className='label-FAQ'>What are the ingredients in your products?</label>
                                    </button>
                                    <div class="C-container-FAQ_1">
                                        <label for="">We highly value transparency and your well-being. Delve into our product
                                            descriptions, where we disclose every ingredient used. We are committed to ensuring that you
                                            make informed choices by providing comprehensive details about the composition of each
                                            product.
                                        </label>
                                    </div>
                                    <div class="C-child-box-subtitle_3"></div>
                                </div>

                                <div class="C-sub-button_2">
                                    <button class="C-button-FAQ_2">
                                        <i class="bi bi-plus-circle"></i>

                                        <label className='label-FAQ'>Are your products cruelty-free and vegan?</label>
                                    </button>
                                    <div class="C-container-FAQ_2">
                                        <label>Our commitment extends beyond quality skincare. We take pride in our ethical
                                            stance: our products are cruelty-free and entirely vegan. We've ensured that no
                                            animal-derived ingredients find their way into our formulations. Feel assured about the
                                            ethical integrity of our brand.
                                        </label>
                                    </div>
                                    <div class="C-child-box-subtitle_3"></div>
                                </div>
                                <div class="C-sub-button_2">
                                    <button class="C-button-FAQ_3">
                                        <i class="bi bi-plus-circle"></i>
                                        <label className='label-FAQ'>Do you offer any samples or trial sizes?</label>
                                    </button>
                                    <div class="C-container-FAQ_3">
                                        <label for="">Discover our products firsthand with trial-sized samples or miniature versions
                                            available for purchase. We understand the importance of experiencing a product before making
                                            a significant commitment. Dip your toes into our range with our convenient trial-sized
                                            options.
                                        </label>
                                    </div>
                                    <div class="C-child-box-subtitle_3"></div>
                                </div>
                                <div class="C-sub-button_2">
                                    <button class="C-button-FAQ_4">
                                        <i class="bi bi-plus-circle"></i>
                                        <label className='label-FAQ' for="">How do I return or exchange an item?</label>
                                    </button>
                                    <div class="C-container-FAQ_4">
                                        <label for="">We prioritize your satisfaction with our hassle-free return or exchange process.
                                            Visit our Returns page, where you'll find easy steps to initiate a return or exchange. We
                                            strive to ensure that your shopping experience remains stress-free.
                                        </label>
                                    </div>
                                    <div class="C-child-box-subtitle_3"></div>
                                </div>
                                <div class="C-sub-button_2">
                                    <button class="C-button-FAQ_5">
                                        <i class="bi bi-plus-circle"></i>
                                        <label className='label-FAQ' for="">What are your shipping rates and policies?</label>
                                    </button>
                                    <div class="C-container-FAQ_5">
                                        <label for="">We provide detailed insights into our shipping procedures, rates, and policies.
                                            Our Shipping Policy page houses comprehensive information on shipping rates, estimated
                                            delivery times, and other essential shipping terms. Discover our commitment to seamless
                                            delivery.
                                        </label>
                                    </div>
                                    <div class="C-child-box-subtitle_3"></div>
                                </div>
                                <div class="C-sub-button_2">
                                    <button class="C-button-FAQ_6">
                                        <i class="bi bi-plus-circle"></i>
                                        <label className='label-FAQ' for="">Which product is right for my skin type?</label>
                                    </button>
                                    <div class="C-container-FAQ_6">
                                        <label for="">Choosing the perfect skincare product tailored to your skin type is vital. Explore
                                            our product range, each detailed with specific benefits catered to various skin types. For
                                            personalized guidance, reach out to us or refer to our 'Suitable Skin Types' page.
                                        </label>
                                    </div>
                                    <div class="C-child-box-subtitle_last"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default Contactpage;
