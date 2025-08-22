

const Modal = () => {
  const submit = () => {
    //TODO:
  }
  return (
    <div className="modal fade" id="modalContacts" role="dialog">
      <div className="modal-dialog modal-dialog_custom">
        <div className="modal-dialog__inner">
          <button
            className="btn-close"
            type="button"
            data-bs-dismiss="modal"
          ></button>
          <div className="modal-dialog__content">
            <h5>Get in Touch</h5>
            <form
              className="rd-mailform rd-mailform_style-1"
              data-form-output="form-output-global"
              data-form-type="contact"
              method="post"
              action="bat/rd-mailform.php"
            >
              <div className="form-wrap form-wrap_icon linear-icon-man">
                <input
                  className="form-input"
                  id="contact-name-2"
                  type="text"
                  name="name"
                  data-constraints="@Required"
                />
                <label className="form-label" htmlFor="contact-name-2">
                  Your name
                </label>
              </div>
              <div className="form-wrap form-wrap_icon linear-icon-envelope">
                <input
                  className="form-input"
                  id="contact-email-2"
                  type="email"
                  name="email"
                  data-constraints="@Email @Required"
                />
                <label className="form-label" htmlFor="contact-email-2">
                  Your e-mail
                </label>
              </div>
              <div className="form-wrap form-wrap_icon linear-icon-feather">
                <textarea
                  className="form-input"
                  id="contact-message-3"
                  name="message"
                  data-constraints="@Required"
                ></textarea>
                <label className="form-label" htmlFor="contact-message-3">
                  Your message
                </label>
              </div>
              <button className="btn btn-primary" onClick={submit}>
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;