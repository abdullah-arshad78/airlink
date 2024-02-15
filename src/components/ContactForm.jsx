import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { sendEmail } from "../utils/https";

import useView from "../hooks/useView";
import { motion } from "framer-motion";
import useInput from "../hooks/useInput";
import useDate from "../hooks/useDate";
import useWindowWidth from "../hooks/useWindowWidth";
const formControlClass = "flex flex-col items-start my-2";
const labelGeneralClass = "font-black text-lg drop-shadow";
const inputGeneralClass =
  "w-full rounded-lg p-2 bg-gray-200 outline-none drop-shadow text-slate-600 my-2 focus:-translate-y-2 transition-all duration-200 ease-in focus:border-b-4 focus:border-blue-600";

const DateInputClasses =
  "rounded-lg bg-gray-200 p-2 drop-shadow outline-none text-slate-600";

function validateText(text) {
  return /^[A-Za-z]{2,}$/.test(text);
}
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}
function validatePhoneNumber(phoneNumber) {
  const regex = /^\d{6,14}$/;
  return regex.test(phoneNumber);
}
function validateAdults(num) {
  // Check if the number is between 1 and 10
  if (num >= 1 && num <= 10) {
    return true;
  }
  return false;
}
function validateChildren(num) {
  // Check if the number is between 1 and 10
  if (num >= 0 && num <= 10) {
    return true;
  }
  return false;
}
const convertDateHandler = (date) => {
  let convertedDate = "";
  if (date !== "") {
    convertedDate = new Date(date).toLocaleDateString("en-GB");
  }
  return convertedDate;
};
const ContactForm = () => {
  const windowWidth = useWindowWidth();
  const [mainBg, setMainBg] = useState("bg-contact-mob");
  const [isTravelInsurance, setIsTravelInsurance] = useState(
    "travel-insurance-unsure"
  );
  const [ticketType, setTicketType] = useState("return");
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const ticketTypeHandler = (e) => setTicketType(e.target.value);
  const travelInsuranceHandler = (e) => setIsTravelInsurance(e.target.value);

  useEffect(() => {
    if (isSubmitSuccess) {
      setTimeout(() => setIsSubmitSuccess(false), 5000);
    }
  }, [isSubmitSuccess]);

  const isMobile = windowWidth <= 640;
  useEffect(() => {
    if (isMobile) {
      setMainBg("bg-contact-mob");
    } else {
      setMainBg("bg-contact-tab");
    }
  }, [isMobile]);

  const { ref, inView } = useView(false);
  const childrenVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const { data, mutate, isPending } = useMutation({
    mutationFn: sendEmail,

    onSuccess: () => {
      resetHandler();
      setIsSubmitSuccess(true);
    },
    onError: () => {
      setIsError(true);
    },
  });
  const {
    value: firstName,

    handleChange: firstNameHandleChange,
    handleBlur: firstNameHandleBlur,
    isValid: firstNameIsValid,
    isCorrect: firstNameIsCorrect,
    resetValues: resetFirstName,
  } = useInput(validateText);

  const {
    value: lastName,

    handleChange: lastNameHandleChange,
    handleBlur: lastNameHandleBlur,
    isValid: lastNameIsValid,
    isCorrect: lastNameIsCorrect,
    resetValues: resetLastName,
  } = useInput(validateText);
  const {
    value: destinationFrom,

    handleChange: destinationFromHandleChange,
    handleBlur: destinationFromHandleBlur,
    isValid: destinationFromIsValid,
    isCorrect: destinationFromIsCorrect,
    resetValues: resetdestinationFrom,
  } = useInput(validateText);
  const {
    value: destinationTo,

    handleChange: destinationToHandleChange,
    handleBlur: destinationToHandleBlur,
    isValid: destinationToIsValid,
    isCorrect: destinationToIsCorrect,
    resetValues: resetdestinationTo,
  } = useInput(validateText);
  const {
    value: email,
    handleChange: emailHandleChange,
    handleBlur: emailHandleBlur,
    isValid: emailIsValid,
    isCorrect: emailIsCorrect,
    resetValues: resetEmail,
  } = useInput(validateEmail);

  const {
    value: phoneNumber,
    handleChange: phoneNumberHandleChange,
    handleBlur: phoneNumberHandleBlur,
    isValid: phoneNumberIsValid,
    isCorrect: phoneNumberIsCorrect,
    resetValues: resetPhoneNumber,
  } = useInput(validatePhoneNumber);
  const {
    value: adults,
    handleChange: adultsHandleChange,
    handleBlur: adultsHandleBlur,
    isValid: adultsIsValid,
    isCorrect: adultsIsCorrect,
    resetValues: resetAdults,
  } = useInput(validateAdults);
  const {
    value: children,
    handleChange: childrenHandleChange,
    handleBlur: childrenHandleBlur,
    isValid: childrenIsValid,
    isCorrect: childrenIsCorrect,
    resetValues: resetChildren,
  } = useInput(validateChildren);
  const {
    value: comments,

    handleChange: commentsHandleChange,
    handleBlur: commentsHandleBlur,
    isValid: commentsIsValid,
    isCorrect: commentsIsCorrect,
    resetValues: resetComments,
  } = useInput(validateText);

  const {
    firstDateFrom,
    firstDateFromBlurHandler,
    firstDateFromIsValid,
    firstDateFromIsCorrect,
    setFirstDateFrom,
    secondDateFrom,
    secondDateFromBlurHander,
    secondDateFromIsValid,
    secondDateFromIsCorrect,
    setSecondDateFrom,
    firstDateTo,
    firstDateToBlurHandler,
    firstDateToIsValid,
    firstDateToIsCorrect,
    secondDateTo,
    secondDateToBlurHander,
    secondDateToIsValid,
    secondDateToIsCorrect,
    setFirstDateTo,
    setSecondDateTo,
    minSecondDateFrom,

    minFirstDateTo,

    minSecondDateTo,
    resetDates,
  } = useDate();

  const formIsValid =
    firstNameIsCorrect &&
    lastNameIsCorrect &&
    phoneNumberIsCorrect &&
    emailIsCorrect &&
    adultsIsCorrect &&
    childrenIsCorrect &&
    commentsIsCorrect &&
    firstDateFromIsCorrect &&
    secondDateFromIsCorrect &&
    firstDateToIsCorrect &&
    secondDateToIsCorrect &&
    destinationFromIsCorrect &&
    destinationToIsCorrect;
  console.log(formIsValid);

  function resetHandler() {
    resetFirstName();
    resetLastName();
    resetEmail();
    resetPhoneNumber();
    resetComments();
    resetAdults();
    resetChildren();
    resetDates();
    resetdestinationFrom();
    resetdestinationTo();
  }
  const submitHandler = (e) => {
    e.preventDefault();

    if (formIsValid) {
      const data = {
        firstName,
        lastName,
        email,
        phoneNumber,
        destinationFrom,
        destinationTo,

        firstDateFrom: convertDateHandler(firstDateFrom),
        secondDateFrom: convertDateHandler(secondDateFrom),
        firstDateTo: convertDateHandler(firstDateTo),
        secondDateTo: convertDateHandler(secondDateTo),

        isTravelInsurance,
        adults,
        children,
        serviceType: ticketType,
        comments,
      };
      mutate(data);
    }

    return;
  };
  return (
    <motion.form
      onSubmit={submitHandler}
      ref={ref}
      variants={{
        hidden: { opacity: 0, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: "300ms",
            type: "spring",
            stiffness: 50,
            staggerChildren: 0.3,
          },
        },
      }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="hidden"
      className={`${mainBg} w-[95%] p-4 rounded-lg shadow-lg text-white max-w-[50rem]`}
    >
      <motion.div
        variants={childrenVariants}
        transition={{ duration: "200ms", type: "spring" }}
        className="sm:flex items-center justify-between gap-x-2"
      >
        <div className={`${formControlClass} sm:w-[45%]`}>
          <label className={labelGeneralClass} htmlFor="first-name">
            First Name
          </label>
          <input
            className={`${inputGeneralClass} ${
              !firstNameIsValid && "bg-red-200 focus:border-red-600"
            }`}
            id="first-name"
            type="text"
            placeholder="John"
            value={firstName}
            onChange={firstNameHandleChange}
            onBlur={firstNameHandleBlur}
          ></input>
          {!firstNameIsValid && (
            <p className="text-red-500">Please add a valid first name</p>
          )}
        </div>
        <div className={`${formControlClass} sm:w-[45%]`}>
          <label className={labelGeneralClass} htmlFor="last-name">
            Last Name
          </label>
          <input
            className={`${inputGeneralClass} ${
              !lastNameIsValid && "bg-red-200 focus:border-red-600"
            }`}
            id="last-name"
            placeholder="Smith"
            type="text"
            value={lastName}
            onChange={lastNameHandleChange}
            onBlur={lastNameHandleBlur}
          ></input>
          {!lastNameIsValid && (
            <p className="text-red-500">Please add a valid last name</p>
          )}
        </div>
      </motion.div>
      <motion.div
        variants={childrenVariants}
        transition={{ duration: "200ms", type: "spring" }}
        className="sm:flex items-center justify-between gap-x-2"
      >
        <div className={`${formControlClass} sm:w-[45%]`}>
          <label className={labelGeneralClass} htmlFor="email">
            Email
          </label>
          <input
            placeholder="johnsmith@email.com"
            className={`${inputGeneralClass} ${
              !emailIsValid && "bg-red-200 focus:border-red-600"
            }`}
            id="email"
            type="email"
            value={email}
            onChange={emailHandleChange}
            onBlur={emailHandleBlur}
          ></input>
          {!emailIsValid && (
            <p className="text-red-500">Please add valid email</p>
          )}
        </div>
        <div className={`${formControlClass} sm:w-[45%]`}>
          <label className={labelGeneralClass} htmlFor="phone">
            Phone
          </label>
          <input
            className={`${inputGeneralClass} ${
              !phoneNumberIsValid && "bg-red-200 focus:border-red-600"
            }`}
            placeholder="00353910000000"
            id="phone"
            type="number"
            value={phoneNumber}
            onChange={phoneNumberHandleChange}
            onBlur={phoneNumberHandleBlur}
          ></input>
          {!phoneNumberIsValid && (
            <p className="text-red-500">Please add valid phone number</p>
          )}
        </div>
      </motion.div>
      <motion.div
        variants={childrenVariants}
        transition={{ duration: "200ms", type: "spring" }}
        className="sm:flex items-center justify-between gap-x-2"
      >
        <div className={`${formControlClass} sm:w-[45%]`}>
          <label className={labelGeneralClass} htmlFor="destination-from">
            Destination From
          </label>
          <input
            className={`${inputGeneralClass} ${
              !destinationFromIsValid && "bg-red-200 focus:border-red-600"
            }`}
            id="destination-from"
            type="text"
            placeholder="Limerick"
            value={destinationFrom}
            onChange={destinationFromHandleChange}
            onBlur={destinationFromHandleBlur}
          ></input>
          {!destinationFromIsValid && (
            <p className="text-red-500">Please add valid destination</p>
          )}
        </div>
        <div className={`${formControlClass} sm:w-[45%]`}>
          <label className={labelGeneralClass} htmlFor="destination-to">
            Destination To
          </label>
          <input
            className={`${inputGeneralClass} ${
              !destinationToIsValid && "bg-red-200 focus:border-red-600"
            }`}
            id="destination-to"
            placeholder="Sydney"
            type="text"
            value={destinationTo}
            onChange={destinationToHandleChange}
            onBlur={destinationToHandleBlur}
          ></input>
          {!destinationToIsValid && (
            <p className="text-red-500">Please add a valid last name</p>
          )}
        </div>
      </motion.div>
      <motion.div
        variants={childrenVariants}
        transition={{ duration: "200ms", type: "spring" }}
        className={formControlClass}
      >
        <span className={labelGeneralClass}>Departure Date Range</span>
        <div className="w-full flex justify-between">
          <div className="flex flex-col items-start">
            <label className={labelGeneralClass} htmlFor="date-f-1">
              {" "}
              From
            </label>
            <input
              className={`${DateInputClasses} ${
                !firstDateFromIsValid && "bg-red-200"
              }`}
              id="daate-f-1"
              type="date"
              value={firstDateFrom}
              onChange={(e) => setFirstDateFrom(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              onBlur={firstDateFromBlurHandler}
            ></input>
            {!firstDateFromIsValid && (
              <p className="text-red-500 drop-shadow my-2 ">
                This field is required
              </p>
            )}
          </div>
          <div className="flex flex-col items-start">
            {" "}
            <label className={labelGeneralClass} htmlFor="date-f-2">
              To
            </label>
            <input
              className={`${DateInputClasses} ${
                !secondDateFromIsValid && "bg-red-200"
              }`}
              id="date-f-2"
              type="date"
              value={secondDateFrom}
              onChange={(e) => setSecondDateFrom(e.target.value)}
              onBlur={secondDateFromBlurHander}
              min={minSecondDateFrom}
            ></input>
            {!secondDateFromIsValid && (
              <p className="text-red-500 drop-shadow my-2 ">
                This field is required
              </p>
            )}
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={childrenVariants}
        transition={{ duration: "200ms", type: "spring" }}
        className={formControlClass}
      >
        <span className={labelGeneralClass}>Arrival Date Range</span>
        <div className="w-full flex justify-between">
          <div className="flex flex-col items-start">
            <label className={labelGeneralClass} htmlFor="date-to-1">
              From
            </label>
            <input
              className={`${DateInputClasses} ${
                !firstDateToIsValid && "bg-red-200"
              }`}
              id="date-to-1"
              type="date"
              value={firstDateTo}
              onChange={(e) => setFirstDateTo(e.target.value)}
              min={minFirstDateTo}
              onBlur={firstDateToBlurHandler}
            ></input>
            {!firstDateToIsValid && (
              <p className="text-red-500 drop-shadow my-2 ">
                This field is required
              </p>
            )}
          </div>
          <div className="flex flex-col items-start">
            <label className={labelGeneralClass} htmlFor="date-to-2">
              To
            </label>
            <input
              className={`${DateInputClasses} ${
                !secondDateToIsValid && "bg-red-200"
              }`}
              id="date-to-2"
              type="date"
              value={secondDateTo}
              onChange={(e) => setSecondDateTo(e.target.value)}
              min={minSecondDateTo}
              onBlur={secondDateToBlurHander}
            ></input>
            {!secondDateToIsValid && (
              <p className="text-red-500 drop-shadow my-2 ">
                This field is required
              </p>
            )}
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={childrenVariants}
        transition={{ duration: "200ms", type: "spring" }}
        className="flex flex-col items-start py-2 my-2 md:w-[50%]"
      >
        <span className={labelGeneralClass}>
          Would you like to have travel insurance
        </span>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="travel-insurance-yes">Yes</label>
            <input
              type="radio"
              id="travel-insurance-yes"
              name="travel-insurance"
              value="travel-insurance-yes"
              checked={isTravelInsurance === "travel-insurance-yes"}
              onChange={travelInsuranceHandler}
            ></input>
          </div>
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="travel-insurance-no">No</label>
            <input
              type="radio"
              id="travel-insurance-no"
              name="travel-insurance"
              value="travel-insurance-no"
              checked={isTravelInsurance === "travel-insurance-no"}
              onChange={travelInsuranceHandler}
            ></input>
          </div>
          <div className="flex flex-col items-center justify-center">
            {" "}
            <label htmlFor="travel-insurance-unsure">Not Sure</label>
            <input
              id="travel-insurance-unsure"
              type="radio"
              name="travel-insurance"
              value="travel-insurance-unsure"
              checked={isTravelInsurance === "travel-insurance-unsure"}
              onChange={travelInsuranceHandler}
            ></input>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={childrenVariants}
        transition={{ duration: "200ms", type: "spring" }}
        className="flex items-center justify-between py-2 gap-x-4"
      >
        <div>
          <div className="flex items-center space-x-2 text-left my-2 ">
            <label className="font-black  drop-shadow" htmlFor="adults">
              Number of adults (over 18)
            </label>
            <input
              className={`w-[4rem] rounded-lg p-2 drop-shadow outline-none text-slate-600 bg-gray-200 focus:-translate-y-2 transition-all duration-200 ease-in focus:border-b-4 focus:border-blue-600 ${
                !adultsIsValid && "bg-red-200 focus:border-red-600"
              }`}
              id="adults"
              type="number"
              placeholder="2"
              value={adults}
              onChange={adultsHandleChange}
              onBlur={adultsHandleBlur}
              min={1}
              max={10}
            ></input>
          </div>
          {!adultsIsValid && (
            <p className="text-red-500 text-sm">Should be between 1 and 10</p>
          )}
        </div>
        <div>
          <div className="flex items-center space-x-2 text-left my-2">
            <label className="font-black  drop-shadow" htmlFor="children">
              Number of children (under 18)
            </label>

            <input
              className={`w-[4rem] rounded-lg p-2 drop-shadow outline-none text-slate-600 bg-gray-200 focus:-translate-y-2 transition-all duration-200 ease-in focus:border-b-4 focus:border-blue-600 ${
                !childrenIsValid && "bg-red-200 focus:border-red-600"
              }`}
              id="children"
              type="number"
              placeholder="2"
              value={children}
              onChange={childrenHandleChange}
              onBlur={childrenHandleBlur}
              min={0}
              max={10}
            ></input>
          </div>
          {!childrenIsValid && (
            <p className="text-red-500 text-sm">Should be between 0 and 10</p>
          )}
        </div>
      </motion.div>
      <motion.div
        variants={childrenVariants}
        transition={{ duration: "200ms", type: "spring" }}
        className="my-2 flex items-center space-x-2 outline-none my-4"
      >
        <label className={labelGeneralClass} htmlFor="service-type">
          Service Type
        </label>
        <select
          className="bg-gray-200 text-slate-600 p-2 rounded-lg"
          id="service-type"
          value={ticketType}
          onChange={ticketTypeHandler}
        >
          <option value="one-way">One Way</option>
          <option value="return">Return</option>
          <option value="hajj">Hajj</option>
          <option value="umrah">Umrah</option>
        </select>
      </motion.div>

      <motion.div
        variants={childrenVariants}
        transition={{ duration: "200ms", type: "spring" }}
        className="flex mt-4 mb-2 space-x-2 my-4"
      >
        <label className={labelGeneralClass}>Speacial Request</label>
        <div className="w-[75%] max-w-[20rem] sm:max-w-[35rem] md:max-w-[50rem] text-left">
          <textarea
            placeholder="Get us an amazing trip! :)"
            className={`bg-gray-200  resize-none rounded-lg outline-none p-2 text-slate-600 w-[75%] max-w-[20rem] sm:max-w-[35rem] md:max-w-[50rem] focus:-translate-y-2 transition-all duration-200 ease-in focus:border-2 focus:border-blue-600 ${
              !commentsIsValid && "bg-red-200 focus:border-red-600"
            }`}
            value={comments}
            onChange={commentsHandleChange}
            onBlur={commentsHandleBlur}
          ></textarea>
          {!commentsIsValid && (
            <p className="text-red-500">This field is required</p>
          )}
        </div>
      </motion.div>

      <motion.div
        className="flex items-center justify-start space-x-4"
        variants={childrenVariants}
        transition={{ duration: "200ms", type: "spring" }}
      >
        <span
          onClick={resetHandler}
          className="flex items-center justify-center  text-white font-bold md:text-[1.2rem] bg-gradient-to-r from-slate-600 to-slate-900 rounded-lg hover:from-slate-900 hover:to-slate-600 hover:-translate-y-[3px] p-2 transition-all duration-200 ease-in white-shadow cursor-pointer"
        >
          Reset
        </span>
        <button
          className={`flex items-center justify-center p-2  text-white font-bold md:text-[1.2rem] bg-gradient-to-r from-sky-600 to-blue-900 rounded-lg ${
            formIsValid &&
            "hover:from-blue-900 hover:to-sky-600 hover:-translate-y-[3px]  transition-all duration-200 ease-in"
          } white-shadow ${
            !formIsValid && "from-slate-600 to-gray-600 cursor-not-allowed"
          }`}
          type="submit"
          disabled={!formIsValid}
        >
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </motion.div>
      {isError && (
        <p className="text-red-500 text-lg font-bold drop-shadow my-4">
          Oops something went wrong
        </p>
      )}
      {isSubmitSuccess && (
        <p className="text-green-500 text-lg font-bold drop-shadow my-4">
          Form Submitted Successfully!
        </p>
      )}
    </motion.form>
  );
};

export default ContactForm;
