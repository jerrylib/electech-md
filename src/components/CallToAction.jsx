
const CallToAction = () => {
  return (
    <section className="section-sm bg-accent text-center">
      <div className="container">
        <div className="row row-30 align-items-center justify-content-center justify-content-xl-between">
          <div className="col-xl-8 text-xl-start">
            <h4 className="heading-decoratedIf text-3xl font-bold tracking-wide">
              We are always ready to help you make your business more profitable
              with our tailored solutions
            </h4>
          </div>
          <div className="col-xl-2 text-xl-end">
            <a
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalContacts"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;