
const About = () => {
  const features = [
    {
      icon: "linear-icon-rocket",
      title: "Qualified Employees",
      description: "Our team consists of more than 40 qualified and experienced business consultants."
    },
    {
      icon: "linear-icon-equalizer",
      title: "Free Consultations",
      description: "We offer a free consultation to find out the best possible solutions to your problems."
    },
    {
      icon: "linear-icon-arrow-down-square",
      title: "100% Guaranteed",
      description: "We guarantee that with us you will get the desired results and profit for your business."
    },
    {
      icon: "linear-icon-feather",
      title: "Lots of happy clients",
      description: "Since our establishment, most of our clients have become our returning customers."
    }
  ];

  return (
    <section className="section-md bg-gray-lighter" id="about">
      <div className="container">
        <div className="row justify-content-md-center align-items-lg-center justify-content-lg-between row-50">
          <div className="col-md-9 col-lg-6">
            <h4 className="heading-decorated text-3xl font-bold">About us</h4>
            <p className="mt-4 leading-8">
              Welcome to Mingding Electromechanical Technology Co., Ltd., a professional and reliable
              international trading company dedicated to delivering high-quality
              products and exceptional service to clients around the globe. With a
              strong foundation in global trade and a keen understanding of market
              trends, Mingding has built long-term partnerships across various
              industries. Our commitment to integrity, efficiency, and customer
              satisfaction sets us apart in today's competitive global marketplace.
              Choose Mingding — your trusted partner in international trade.
            </p>
            <div className="row row-30">
              {features.map((feature, index) => (
                <div key={index} className="col-md-6">
                  <article className="blurb blurb-minimal">
                    <div className="unit flex-row unit-spacing-md">
                      <div className="unit-left">
                        <div className="blurb-minimal__icon">
                          <span className={`icon ${feature.icon}`}></span>
                        </div>
                      </div>
                      <div className="unit-body">
                        <p className="blurb__title heading-6">
                          <a href="#">{feature.title}</a>
                        </p>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-7 col-lg-5">
            <div className="thumbnail-classic">
              <a href="#">
                <img
                  src="/images/blog-image-1-420x317.jpg"
                  alt=""
                  width="420"
                  height="317"
                />
              </a>
              <div className="caption">
                <h5>
                  <a className="thumbnail-classic-title text-xl font-bold" href="#">
                    Who we are
                  </a>
                </h5>
                <p className="leading-8">
                  We are a team of passionate web designers and developers bringing
                  you the best website templates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;