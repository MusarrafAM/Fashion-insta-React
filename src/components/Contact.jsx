import React, { useState } from "react";
import { MdLocalPhone, MdOutlineAlternateEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the form data, like sending it to a server
    console.log(formData);
    console.log(formData.message);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      gender: "",
      message: "",
    });
  };

  return (
    <div className="w-full lg:h-screen lg:mt-20">
      <div className="py-10 max-w-[1240px] mx-auto text-center">
        <h1 className="md:text-5xl text-4xl font-bold mb-5">Contact us</h1>
        <p className="md:text-xl text-lg">
          There are various types of fashion shops that cater to different
          styles,
        </p>
        <p className="md:text-xl text-lg">budget, and target markets.</p>

        <div className="container-form-socials grid lg:grid-cols-3 my-10">
          <div className="cotact-socials ">
            <div className="each-socials flex py-3 justify-center mr-[70px]">
              <div className="border border-black rounded-xl w-[50px] h-[50px] pt-1 pl-1">
                <MdLocalPhone size={40} className="text-[#FE5F38]" />
              </div>
              <p className="text-left pl-2">
                Phone number
                <br />
                <a href="tel:+94774588754">077 4588 754</a>
              </p>
            </div>

            <div className="each-socials flex py-3 justify-center">
              <div className="border border-black rounded-xl w-[50px] h-[50px] pt-1 pl-1">
                <MdOutlineAlternateEmail size={40} className="text-[#FE5F38]" />
              </div>
              <p className="text-left pl-2">
                Email address <br />
                <a href="mailto:example@email.com">contact@fashionista.com</a>
              </p>
            </div>

            <div className="each-socials flex py-3 justify-center">
              <div className="border border-black rounded-xl w-[50px] h-[50px] pt-1 pl-1">
                <HiLocationMarker size={40} className="text-[#FE5F38]" />
              </div>
              <p className="text-left pl-2">
                Location <br />
                <a href="https://maps.google.com/maps?q=51.50370006633932, -0.11961258061933769">
                  London, United Kingdom
                </a>
              </p>
            </div>
          </div>

          <div className="contact-form lg:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="mx-auto border border-black my-4">
                <p>First name</p>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name here"
                />
              </div>
              <div className="mx-auto border border-black my-4">
                <p>Last name</p>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name here"
                />
              </div>
              <div className="mx-auto border border-black my-4">
                <p>Email address</p>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email here"
                />
              </div>
              <div className="mx-auto border border-black my-4">
                <p>Phone number</p>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number here here"
                />
              </div>
              <div className="mx-auto border border-black my-4">
                <p>Gender</p>
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                Male
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                Female
              </div>
              <div className="mx-auto border border-black my-4">
                <p>Message</p>
                <input
                  type="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your special requirement"
                />
              </div>

              <button
                type="submit"
                className="p-2 my-2 bg-[#FE5F38] text-white rounded-md min-w-[80px] cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
