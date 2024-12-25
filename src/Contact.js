import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container mt-5 mb-3">
        <h2 className="text-center">Feel Free To Contact Us</h2>
      </div>
      <div>
      <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6649.033165265131!2d-7.6155522!3d33.5731107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd02e9f3598f%3A0x9c8e1bb5c6a12f69!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sma!4v1670162550524!5m2!1sen!2sma"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
></iframe>

      </div>
      {/* Form Section Starts here */}
      <div className="container mt-3">
        <form action="https://formspree.io/f/maykrwar" method="POST">
          <div className="row mb-3 ">
            <div className="col-md-7 mx-auto">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-bold"
              >
                Your Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="form-control shadow"
                name="username"
                required
                autoComplete="off"
                // value=""
              />
            </div>
          </div>
          <div className="row mb-3 ">
            <div className="col-md-7 mx-auto">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-bold"
              >
                Email Address
              </label>
              <input
                type="email"
                name="Email"
                className="form-control shadow"
                placeholder="Email address"
                autoComplete="off"
                required
                // value=""
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-7 mx-auto">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-bold"
              >
                Write Your Message
              </label>
              <textarea
                className="form-control shadow"
                autoComplete="off"
                placeholder="Message"
                name="Messages"
                required
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="d-grid gap-2 col-4 mx-auto mb-3">
            <button
              type="submit"
              className="btn btn-outline-primary fw-bold shadow"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
