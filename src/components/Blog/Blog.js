import React from 'react';
import social from "../img/blog/cat-post/social.jpg";
import food from "../img/blog/cat-post/food.jpg";
import politics from "../img/blog/cat-post/politics.jpg";
import blog4 from "../img/blog/main-blog/m-blog-4.jpg";
import blog5 from "../img/blog/main-blog/m-blog-5.jpg";
import blog3 from "../img/blog/main-blog/m-blog-3.jpg";
import blog2 from "../img/blog/main-blog/m-blog-2.jpg";
import blog1 from "../img/blog/main-blog/m-blog-1.jpg";
import { Context } from '../../Context/Provider';



import '../../css/style.css';


const Blog = () => {
    const { state } = React.useContext(Context);

    return(
    <div>
        {/*banner section*/}
        <section className="blog-banner-area" id="blog">
            <div className="container h-100">
                <div className="blog-banner">
                    <div className="text-center">
                        <h1>{state.texts[state.language].location.banner}</h1>
                    <nav aria-label="breadcrumb" className="banner-breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Blog</li>
                    </ol>
                    </nav>
                    </div>
                </div>
            </div>
        </section>
        {/*categories section*/}
        <section className="blog_categorie_area">
            <div className="container">
                <div className="row">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.024140148418!2d-71.30608378458201!3d-41.13399897928826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b71e69754f9%3A0xfa24b97df0020edd!2sGrand%20Hotel%20Bariloche!5e0!3m2!1ses!2ses!4v1592911354589!5m2!1ses!2ses" width="100%" height="450" frameborder="2px" style={{border:'2px', padding: '20px'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                        <div className="categories_post">
                            <img className="card-img rounded-0" src={social} alt="post"/>
                            <div className="categories_details">
                                <div className="categories_text">
                                    <a href="blog-single.html">
                                        <h5>Social Life</h5>
                                    </a>
                                    <div className="border_line"></div>
                                    <p>Enjoy your social life together</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                        <div className="categories_post">
                            <img className="card-img rounded-0" src={politics} alt="post"/>
                            <div className="categories_details">
                                <div className="categories_text">
                                    <a href="blog-single.html">
                                        <h5>Politics</h5>
                                    </a>
                                    <div className="border_line"></div>
                                    <p>Be a part of politics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                        <div className="categories_post">
                            <img className="card-img rounded-0" src={food} alt="post"/>
                            <div className="categories_details">
                                <div className="categories_text">
                                    <a href="blog-single.html">
                                        <h5>Food</h5>
                                    </a>
                                    <div className="border_line"></div>
                                    <p>Let the food be finished</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*blog area*/}
        <section className="blog_area">
      <div className="container">
          <div className="row">
              <div className="col-lg-8">
                  <div className="blog_left_sidebar">
                      <article className="row blog_item">
                          <div className="col-md-3">
                              <div className="blog_info text-right">
                                  <div className="post_tag">
                                      <a href="#">Food,</a>
                                      <a className="active" href="#">Technology,</a>
                                      <a href="#">Politics,</a>
                                      <a href="#">Lifestyle</a>
                                  </div>
                                  <ul className="blog_meta list">
                                      <li>
                                          <a href="#">Mark wiens
                                              <i className="lnr lnr-user"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">12 Dec, 2017
                                              <i className="lnr lnr-calendar-full"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">1.2M Views
                                              <i className="lnr lnr-eye"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">06 Comments
                                              <i className="lnr lnr-bubble"></i>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-9">
                              <div className="blog_post">
                                  <img src={blog1} alt=""/>
                                  <div className="blog_details">
                                      <a href="blog-single.html">
                                          <h2>Astronomy Binoculars A Great Alternative</h2>
                                      </a>
                                      <p>MCSE boot camps have its supporters and its detractors. Some people do not understand
                                          why you should have to spend money on boot camp when you can get the MCSE study
                                          materials yourself at a fraction.</p>
                                      <a className="button button-blog" href="blog-single.html">View More</a>
                                  </div>
                              </div>
                          </div>
                      </article>
                      <article className="row blog_item">
                          <div className="col-md-3">
                              <div className="blog_info text-right">
                                  <div className="post_tag">
                                      <a href="#">Food,</a>
                                      <a className="active" href="#">Technology,</a>
                                      <a href="#">Politics,</a>
                                      <a href="#">Lifestyle</a>
                                  </div>
                                  <ul className="blog_meta list">
                                      <li>
                                          <a href="#">Mark wiens
                                              <i className="lnr lnr-user"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">12 Dec, 2017
                                              <i className="lnr lnr-calendar-full"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">1.2M Views
                                              <i className="lnr lnr-eye"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">06 Comments
                                              <i className="lnr lnr-bubble"></i>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-9">
                              <div className="blog_post">
                                  <img src={blog2} alt=""/>
                                  <div className="blog_details">
                                      <a href="blog-single.html">
                                          <h2>The Basics Of Buying A Telescope</h2>
                                      </a>
                                      <p>MCSE boot camps have its supporters and its detractors. Some people do not understand
                                          why you should have to spend money on boot camp when you can get the MCSE study
                                          materials yourself at a fraction.</p>
                                      <a href="blog-single.html" className="button button-blog">View More</a>
                                  </div>
                              </div>
                          </div>
                      </article>
                      <article className="row blog_item">
                          <div className="col-md-3">
                              <div className="blog_info text-right">
                                  <div className="post_tag">
                                      <a href="#">Food,</a>
                                      <a className="active" href="#">Technology,</a>
                                      <a href="#">Politics,</a>
                                      <a href="#">Lifestyle</a>
                                  </div>
                                  <ul className="blog_meta list">
                                      <li>
                                          <a href="#">Mark wiens
                                              <i className="lnr lnr-user"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">12 Dec, 2017
                                              <i className="lnr lnr-calendar-full"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">1.2M Views
                                              <i className="lnr lnr-eye"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">06 Comments
                                              <i className="lnr lnr-bubble"></i>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-9">
                              <div className="blog_post">
                                  <img src={blog3} alt=""/>
                                  <div className="blog_details">
                                      <a href="blog-single.html">
                                          <h2>The Glossary Of Telescopes</h2>
                                      </a>
                                      <p>MCSE boot camps have its supporters and its detractors. Some people do not understand
                                          why you should have to spend money on boot camp when you can get the MCSE study
                                          materials yourself at a fraction.</p>
                                      <a href="blog-single.html" className="button button-blog">View More</a>
                                  </div>
                              </div>
                          </div>
                      </article>
                      <article className="row blog_item">
                          <div className="col-md-3">
                              <div className="blog_info text-right">
                                  <div className="post_tag">
                                      <a href="#">Food,</a>
                                      <a className="active" href="#">Technology,</a>
                                      <a href="#">Politics,</a>
                                      <a href="#">Lifestyle</a>
                                  </div>
                                  <ul className="blog_meta list">
                                      <li>
                                          <a href="#">Mark wiens
                                              <i className="lnr lnr-user"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">12 Dec, 2017
                                              <i className="lnr lnr-calendar-full"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">1.2M Views
                                              <i className="lnr lnr-eye"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">06 Comments
                                              <i className="lnr lnr-bubble"></i>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-9">
                              <div className="blog_post">
                                  <img src={blog4} alt=""/>
                                  <div className="blog_details">
                                      <a href="blog-single.html">
                                          <h2>The Night Sky</h2>
                                      </a>
                                      <p>MCSE boot camps have its supporters and its detractors. Some people do not understand
                                          why you should have to spend money on boot camp when you can get the MCSE study
                                          materials yourself at a fraction.</p>
                                      <a href="blog-single.html" className="button button-blog">View More</a>
                                  </div>
                              </div>
                          </div>
                      </article>
                      <article className="row blog_item">
                          <div className="col-md-3">
                              <div className="blog_info text-right">
                                  <div className="post_tag">
                                      <a href="#">Food,</a>
                                      <a className="active" href="#">Technology,</a>
                                      <a href="#">Politics,</a>
                                      <a href="#">Lifestyle</a>
                                  </div>
                                  <ul className="blog_meta list">
                                      <li>
                                          <a href="#">Mark wiens
                                              <i className="lnr lnr-user"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">12 Dec, 2017
                                              <i className="lnr lnr-calendar-full"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">1.2M Views
                                              <i className="lnr lnr-eye"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">06 Comments
                                              <i className="lnr lnr-bubble"></i>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-9">
                              <div className="blog_post">
                                  <img src={blog5} alt=""/>
                                  <div className="blog_details">
                                      <a href="blog-single.html">
                                          <h2>Telescopes 101</h2>
                                      </a>
                                      <p>MCSE boot camps have its supporters and its detractors. Some people do not understand
                                          why you should have to spend money on boot camp when you can get the MCSE study
                                          materials yourself at a fraction.</p>
                                      <a href="blog-single.html" className="button button-blog">View More</a>
                                  </div>
                              </div>
                          </div>
                      </article>
                      <nav className="blog-pagination justify-content-center d-flex">
                          <ul className="pagination">
                              <li className="page-item">
                                  <a href="#" className="page-link" aria-label="Previous">
                                      <span aria-hidden="true">
                                          <span className="lnr lnr-chevron-left"></span>
                                      </span>
                                  </a>
                              </li>
                              <li className="page-item">
                                  <a href="#" className="page-link">01</a>
                              </li>
                              <li className="page-item active">
                                  <a href="#" className="page-link">02</a>
                              </li>
                              <li className="page-item">
                                  <a href="#" className="page-link">03</a>
                              </li>
                              <li className="page-item">
                                  <a href="#" className="page-link">04</a>
                              </li>
                              <li className="page-item">
                                  <a href="#" className="page-link">09</a>
                              </li>
                              <li className="page-item">
                                  <a href="#" className="page-link" aria-label="Next">
                                      <span aria-hidden="true">
                                          <span className="lnr lnr-chevron-right"></span>
                                      </span>
                                  </a>
                              </li>
                          </ul>
                      </nav>
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="blog_right_sidebar">
                      <aside className="single_sidebar_widget search_widget">
                          <div className="input-group">
                              <input type="text" className="form-control" placeholder="Search Posts"/>
                              <span className="input-group-btn">
                                  <button className="btn btn-default" type="button">
                                      <i className="lnr lnr-magnifier"></i>
                                  </button>
                              </span>
                          </div>
                          <div className="br"></div>
                      </aside>
                      <aside className="single_sidebar_widget author_widget">
                          <img className="author_img rounded-circle" src="img/blog/author.png" alt=""/>
                          <h4>Charlie Barber</h4>
                          <p>Senior blog writer</p>
                          <div className="social_icon">
                              <a href="#">
                                  <i className="fab fa-facebook-f"></i>
                              </a>
                              <a href="#">
                                  <i className="fab fa-twitter"></i>
                              </a>
                              <a href="#">
                                  <i className="fab fa-github"></i>
                              </a>
                              <a href="#">
                                <i className="fab fa-behance"></i>
                              </a>
                          </div>
                          <p>Boot camps have its supporters andit sdetractors. Some people do not understand why you should
                              have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits
                              detractors.
                          </p>
                          <div className="br"></div>
                      </aside>
                      <aside className="single_sidebar_widget popular_post_widget">
                          <h3 className="widget_title">Popular Posts</h3>
                          <div className="media post_item">
                              <img src="img/blog/popular-post/post1.jpg" alt="post"/>
                              <div className="media-body">
                                  <a href="blog-single.html">
                                      <h3>Space The Final Frontier</h3>
                                  </a>
                                  <p>02 Hours ago</p>
                              </div>
                          </div>
                          <div className="media post_item">
                              <img src="img/blog/popular-post/post2.jpg" alt="post"/>
                              <div className="media-body">
                                  <a href="blog-single.html">
                                      <h3>The Amazing Hubble</h3>
                                  </a>
                                  <p>02 Hours ago</p>
                              </div>
                          </div>
                          <div className="media post_item">
                              <img src="img/blog/popular-post/post3.jpg" alt="post"/>
                              <div className="media-body">
                                  <a href="blog-single.html">
                                      <h3>Astronomy Or Astrology</h3>
                                  </a>
                                  <p>03 Hours ago</p>
                              </div>
                          </div>
                          <div className="media post_item">
                              <img src="img/blog/popular-post/post4.jpg" alt="post"/>
                              <div className="media-body">
                                  <a href="blog-single.html">
                                      <h3>Asteroids telescope</h3>
                                  </a>
                                  <p>01 Hours ago</p>
                              </div>
                          </div>
                          <div className="br"></div>
                      </aside>
                      <aside className="single_sidebar_widget ads_widget">
                          <a href="#">
                              <img className="img-fluid" src="img/blog/add.jpg" alt=""/>
                          </a>
                          <div className="br"></div>
                      </aside>
                      <aside className="single_sidebar_widget post_category_widget">
                          <h4 className="widget_title">Post Catgories</h4>
                          <ul className="list cat-list">
                              <li>
                                  <a href="#" className="d-flex justify-content-between">
                                      <p>Technology</p>
                                      <p>37</p>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" className="d-flex justify-content-between">
                                      <p>Lifestyle</p>
                                      <p>24</p>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" className="d-flex justify-content-between">
                                      <p>Fashion</p>
                                      <p>59</p>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" className="d-flex justify-content-between">
                                      <p>Art</p>
                                      <p>29</p>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" className="d-flex justify-content-between">
                                      <p>Food</p>
                                      <p>15</p>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" className="d-flex justify-content-between">
                                      <p>Architecture</p>
                                      <p>09</p>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" className="d-flex justify-content-between">
                                      <p>Adventure</p>
                                      <p>44</p>
                                  </a>
                              </li>
                          </ul>
                          <div className="br"></div>
                      </aside>
                      <aside className="single-sidebar-widget newsletter_widget">
                          <h4 className="widget_title">Newsletter</h4>
                          <p>
                              Here, I focus on a range of items and features that we use in life without giving them a second thought.
                          </p>
                          <div className="form-group d-flex flex-row">
                              <div className="input-group">
                                  <div className="input-group-prepend">
                                      <div className="input-group-text">
                                          <i className="fa fa-envelope" aria-hidden="true"></i>
                                      </div>
                                  </div>
                                  <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter email address" onfocus="this.placeholder = ''"
                                      onblur="this.placeholder = 'Enter email'"/>
                              </div>
                              <a href="#" className="bbtns">Subcribe</a>
                          </div>
                          <p className="text-bottom">You can unsubscribe at any time</p>
                          <div className="br"></div>
                      </aside>
                      <aside className="single-sidebar-widget tag_cloud_widget">
                          <h4 className="widget_title">Tag Clouds</h4>
                          <ul className="list">
                              <li>
                                  <a href="#">Technology</a>
                              </li>
                              <li>
                                  <a href="#">Fashion</a>
                              </li>
                              <li>
                                  <a href="#">Architecture</a>
                              </li>
                              <li>
                                  <a href="#">Fashion</a>
                              </li>
                              <li>
                                  <a href="#">Food</a>
                              </li>
                              <li>
                                  <a href="#">Technology</a>
                              </li>
                              <li>
                                  <a href="#">Lifestyle</a>
                              </li>
                              <li>
                                  <a href="#">Art</a>
                              </li>
                              <li>
                                  <a href="#">Adventure</a>
                              </li>
                              <li>
                                  <a href="#">Food</a>
                              </li>
                              <li>
                                  <a href="#">Lifestyle</a>
                              </li>
                              <li>
                                  <a href="#">Adventure</a>
                              </li>
                          </ul>
                      </aside>
                  </div>
              </div>
          </div>
      </div>
  </section>
    </div>
    )
}

export default Blog