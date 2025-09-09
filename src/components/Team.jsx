const Team = () => {
  const teamMembers = [
    {
      image: "/images/avator1.png",
      name: "Linda",
      position: "CEO, Founder",
      socialLinks: [
        { icon: "fa-facebook", href: "https://www.facebook.com/lily.abb.schneider?mibextid=wwXIfr" },
        { icon: "fa-linkedin", href: "https://www.linkedin.com/in/%E7%8E%B2-%E6%9E%97-894214120/" },
        // { icon: "fa-google-plus", href: "#" },
        // { icon: "fa-vimeo", href: "#" },
        // { icon: "fa-youtube", href: "#" },
        // { icon: "fa-pinterest-p", href: "#" }
      ]
    },
    {
      image: "/images/avator2.png",
      name: "Kobe",
      position: "Sales Manager",
      socialLinks: [
        { icon: "fa-facebook", href: "https://www.facebook.com/share/1CwF1oBoxs/?mibextid=wwXIfr" },
        // { icon: "fa-twitter", href: "#" },
        // { icon: "fa-google-plus", href: "#" },
        // { icon: "fa-vimeo", href: "#" },
        // { icon: "fa-youtube", href: "#" },
        // { icon: "fa-pinterest-p", href: "#" }
      ]
    },
    {
      image: "/images/avator3.png",
      name: "Kevin",
      position: "Marketing Manager",
      socialLinks: [
        // { icon: "fa-facebook", href: "#" },
        // { icon: "fa-twitter", href: "#" },
        // { icon: "fa-google-plus", href: "#" },
        // { icon: "fa-vimeo", href: "#" },
        // { icon: "fa-youtube", href: "#" },
        // { icon: "fa-pinterest-p", href: "#" }
      ]
    }
  ];

  return (
    <section className="section-lg bg-gray-lighter text-center" id="team">
      <div className="container">
        <div className="row justify-content-xl-center row-50">
          <div className="col-xl-9">
            <h4 className="heading-decorated text-3xl font-bold">Our Team</h4>
            <p className="mt-4 leading-8">
              We are a team of professionals from different backgrounds who share
              knowledge and expertise in business consulting aiming to provide
              professional services and support to our clients to the highest
              standards.
            </p>
          </div>
        </div>
        <div className="row row-50">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="thumb thumb-corporate">
                <div className="thumb-corporate__main">
                  <img
                    src={member.image}
                    alt=""
                    width="420"
                    height="315"
                  />
                  <div className="thumb-corporate__overlay">
                    <ul className="list-inline-sm thumb-corporate__list">
                      {member.socialLinks.map((social, socialIndex) => (
                        <li key={socialIndex}>
                          <a className={`icon-sm ${social.icon} icon`} target="_blank" href={social.href}></a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="thumb-corporate__caption">
                  <p className="thumb__title">
                    <a href="#">{member.name}</a>
                  </p>
                  <p className="thumb__subtitle">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;