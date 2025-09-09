import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (e) => {
    const label = e.target.nextElementSibling;
    if (label) {
      label.classList.add('focus');
    }
  };

  const handleBlur = (e) => {
    const label = e.target.nextElementSibling;
    if (label && !e.target.value) {
      label.classList.remove('focus');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      {/* Call to Action Section */}
      <section
        className="section-md bg-accent bg-image text-center bg-overlay-darker"
        style={{
          backgroundImage: "url(/images/bg-image-8.jpg)",
          backgroundPosition: "center 10%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          color: "white"
        }}
      >
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1
          }}
        ></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row justify-content-md-center">
            <div className="col-md-11 col-lg-9 col-xl-8">
              <h3 className="heading-decorated text-5xl tracking-wide leading-16 font-bold">
                Make your business prosper with our advisory and consulting services!
              </h3>
              <a
                className="btn btn-primary"
                href="#contacts"
                style={{
                  backgroundColor: "#1d89ff",
                  borderColor: "#1d89ff",
                  padding: "15px 35px",
                  fontSize: "16px",
                  fontWeight: "500",
                  textDecoration: "none",
                  borderRadius: "4px",
                  display: "inline-block",
                  transition: "all 0.3s ease"
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Details Section */}
      <section className="section-md bg-default" id="contacts">
        <div className="container">
          <div className="row row-50">
            {/* Contact Details */}
            <div className="col-lg-4">
              <div className='text-3xl font-bold'>Contact Details</div>
              <div className="contact-info">
              <ul class="list-sm contact-info">
                <li>
                  <dl class="list-terms-inline">
                    <dt>Address</dt>
                    <dd>
                      No.17, Fuchun Road, Fu'an City, Fujian
                      Province, China
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl class="list-terms-inline">
                    <dt>Whatsapp</dt>
                    <dd>
                      <ul class="list-semicolon">
                        <li><a>(+86) 13774774580</a></li>
                        <li><a>(+86) 15059331866</a></li>
                        <li><a>(+86) 15859511151</a></li>
                      </ul>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl class="list-terms-inline">
                    <dt>E-mail</dt>
                    <dd>
                      <ul class="list-semicolon">
                        <li><a>mcmm20210811@gmail.com</a></li>
                        <li><a>cnabbkobe@gmail.com</a></li>
                        <li><a>736354116@qq.com</a></li>
                      </ul>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl class="list-terms-inline">
                    <dt>We are open</dt>
                    <dd>Mn-Fr: 8 am-10 pm</dd>
                  </dl>
                </li>
                <li>
                  <ul class="list-inline-sm">
                    <li><a class="icon-sm fa-facebook icon text-sky-600" href="#"></a></li>
                    <li><a class="icon-sm fa-twitter icon text-sky-600" href="#"></a></li>
                    <li>
                      <a class="icon-sm fa-google-plus icon text-sky-600" href="#"></a>
                    </li>
                    <li><a class="icon-sm fa-vimeo icon text-sky-600" href="#"></a></li>
                    <li><a class="icon-sm fa-youtube icon text-sky-600" href="#"></a></li>
                    <li>
                      <a class="icon-sm fa-pinterest-p icon text-sky-600" href="#"></a>
                    </li>
                  </ul>
                </li>
              </ul>
              </div>
            </div>
            {/* Contact Form */}
            <div className="col-lg-8">
              <h4 className="heading-decorated text-3xl font-bold">Get in Touch</h4>
              <form
                onSubmit={handleSubmit}
                className="rd-mailform"
                data-form-output="form-output-global"
                data-form-type="contact"
              >
                <div className="row row-20">
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <input
                        className="form-input"
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required
                      />
                      <label className={`form-label ${formData.name ? 'focus' : ''}`} htmlFor="contact-name">
                        Your Name <span className='text-red-700'>*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <input
                        className="form-input"
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required
                      />
                      <label className={`form-label ${formData.email ? 'focus' : ''}`} htmlFor="contact-email">
                        Your Email <span className='text-red-700'>*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-wrap">
                      <textarea
                        className="form-input"
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required
                        rows="7"
                      ></textarea>
                      <label className={`form-label ${formData.message ? 'focus' : ''}`} htmlFor="contact-message">
                        Your Message <span className='text-red-700'>*</span>
                      </label>
                    </div>
                  </div>
                </div>
                <button 
                  className="btn btn-primary" 
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>

            
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="p-0">
        <div className="google-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1255.9572477409522!2d119.63289412518819!3d27.081199802559084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z56aP5a6J5biCIOmTrem8jg!5e0!3m2!1szh-CN!2shk!4v1757397436482!5m2!1szh-CN!2shk"
            width="100%"
            height="450"
            className="border-0 block"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Fujian Mingding Electromechanical Technology Co., Ltd. Location"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;