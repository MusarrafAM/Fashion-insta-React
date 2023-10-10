import React, { useState } from "react";
import { MdLocalPhone, MdOutlineAlternateEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import validator from "validator";

const Contact = () => {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
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

    // !Form Validation
    const validationErrors = {};

    if (!formData.firstName.trim()) {
      validationErrors.firstName = "First Name is required";
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = "Last Name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.phoneNumber.trim()) {
      validationErrors.phoneNumber = "Phone Number is required";
    } else if (!validator.isMobilePhone(formData.phoneNumber)) {
      validationErrors.phoneNumber = "Phone Number is not valid";
    }

    if (!formData.country.trim()) {
      validationErrors.country = "Country is required";
    }

    if (!formData.gender.trim()) {
      validationErrors.gender = "Gender is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted succesfully");

      // Clear input fileds
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        country: "",
        gender: "",
        message: "",
      });
    }

    console.log(formData);
  };

  return (
    <div className="w-full  lg:mt-20">
      <div className="py-10 max-w-[1240px] mx-auto text-center">
        <h1 className="md:text-5xl text-4xl font-bold mb-5">Contact us</h1>
        <p className="md:text-xl text-lg">
          There are various types of fashion shops that cater to different
          styles,
        </p>
        <p className="md:text-xl text-lg">budget, and target markets.</p>

        <div className="container-form-socials grid lg:grid-cols-3 my-10">
          <div className="cotact-socials">
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

          <div className="contact-form lg:col-span-2 px-10">
            <form onSubmit={handleSubmit}>
              <div className=" border border-black my-4 ">
                <p>First name</p>
                {errors.firstName && (
                  <span className="text-red-500 font-medium">
                    {errors.firstName}
                  </span>
                )}
                <input
                  className="w-[300px] pl-[50px]"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name here"
                />
              </div>

              <div className="mx-auto border border-black my-4">
                <p>Last name</p>
                {errors.lastName && (
                  <span className="text-red-500 font-medium">
                    {errors.lastName}
                  </span>
                )}
                <input
                  className="w-[300px] pl-[50px]"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name here"
                />
              </div>
              <div className="mx-auto border border-black my-4">
                <p>Email address</p>
                {errors.email && (
                  <span className="text-red-500 font-medium">
                    {errors.email}
                  </span>
                )}
                <input
                  className="w-[300px] pl-[50px]"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email here"
                />
              </div>
              <div className="mx-auto border border-black my-4">
                <p>Phone number</p>
                {errors.phoneNumber && (
                  <span className="text-red-500 font-medium">
                    {errors.phoneNumber}
                  </span>
                )}
                <input
                  className="w-[350px] pl-[50px]"
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number here here"
                />
              </div>

              <div className="mx-auto border border-black my-4">
                <p>Country</p>
                {errors.country && (
                  <span className="text-red-500 font-medium">
                    {errors.country}
                  </span>
                )}
                <input
                  className="w-[350px] pl-[50px]"
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Enter your country here here"
                />
              </div>
              <div className="mx-auto border border-black my-4">
                <p>Gender</p>
                {errors.gender && (
                  <span className="text-red-500 font-medium">
                    {errors.gender}
                  </span>
                )}
                <div className="flex justify-center gap-10">
                  <div>
                    <input
                      className="mr-2"
                      type="radio"
                      value="male"
                      name="gender"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                    />
                    Male
                  </div>

                  <div>
                    <input
                      className="mr-2"
                      type="radio"
                      value="female"
                      name="gender"
                      checked={formData.gender === "female"}
                      onChange={handleChange}
                    />
                    Female
                  </div>
                </div>
              </div>
              <div className="mx-auto border border-black my-4 h-[100px]">
                <p>Message</p>
                <input
                  className="w-[400px] pl-[40px]"
                  type="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your special requirement"
                />
              </div>

              <button
                type="submit"
                className="p-2 my-2 bg-[#FE5F38] text-white rounded-md min-w-[200px] cursor-pointer"
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
