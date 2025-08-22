const Services = () => {
  const services = [
    {
      image: "/images/service-1-652x491.jpg",
      title: "Business Planning",
      description: "We can create an efficient and reliable business plan designed to fit your company's sphere of activity and industry experience."
    },
    {
      image: "/images/service-2-652x491.jpg",
      title: "Equity & Venture Funds",
      description: "Our professional team will be glad to provide you with advice on managing equity and venture capital funds."
    },
    {
      image: "/images/service-3-652x491.jpg",
      title: "Strategic Growth",
      description: "Our company provides a customized approach to advising clients looking to grow through acquisition."
    }
  ];

  return (
    <section className="section-md bg-default" id="services">
      <div className="container">
        <div className="row row-60">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-xl-4">
              <div className="thumbnail-classic">
                <a href="#">
                  <img
                    src={service.image}
                    alt=""
                    width="652"
                    height="491"
                  />
                </a>
                <div className="caption">
                  <h5>
                    <a className="thumbnail-classic-title text-xl font-bold" href="#">
                      {service.title}
                    </a>
                  </h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;