import { useState, useEffect } from "react";

const validatedate = (date) => date.length !== 0;

const useDate = () => {
  const [firstDateFrom, setFirstDateFrom] = useState("");
  const [secondDateFrom, setSecondDateFrom] = useState("");
  const [firstDateTo, setFirstDateTo] = useState("");
  const [secondDateTo, setSecondDateTo] = useState("");
  const [minSecondDateFrom, setMinSecondDateFrom] = useState("");
  const [minFirstDateTo, setMinFirstDateTo] = useState("");
  const [minSecondDateTo, setMinSecondDateTo] = useState("");
  const [firstDateFromIsTouched, setFirstDateFromIsTouched] = useState(false);
  const [secondDateFromIsTouched, setSecondDateFromIsTouched] = useState(false);
  const [firstDateToIsTouched, setFirstDateToIsTouched] = useState(false);
  const [secondDateToIsTouched, setSecondDateToIsTouched] = useState(false);

  useEffect(() => {
    // Initialize the minimum dates for the second, third, and fourth inputs
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMinSecondDateFrom(tomorrow.toISOString().split("T")[0]);
    setMinFirstDateTo(tomorrow.toISOString().split("T")[0]);
    setMinSecondDateTo(tomorrow.toISOString().split("T")[0]);
  }, []);

  useEffect(() => {
    updateMinDate(
      firstDateFrom,
      setMinSecondDateFrom,
      secondDateFrom,
      setSecondDateFrom
    );
  }, [firstDateFrom]);

  useEffect(() => {
    updateMinDate(
      secondDateFrom,
      setMinFirstDateTo,
      firstDateTo,
      setFirstDateTo
    );
  }, [secondDateFrom]);

  useEffect(() => {
    updateMinDate(
      firstDateTo,
      setMinSecondDateTo,
      secondDateTo,
      setSecondDateTo
    );
  }, [firstDateTo]);

  const updateMinDate = (
    currentDate,
    setMinDateFunc,
    dependentDate,
    setDependentDateFunc
  ) => {
    if (currentDate) {
      const dayAfterDate = new Date(currentDate);
      dayAfterDate.setDate(dayAfterDate.getDate() + 1);
      const dayAfterDateString = dayAfterDate.toISOString().split("T")[0];
      setMinDateFunc(dayAfterDateString);

      if (dependentDate && dependentDate < dayAfterDateString) {
        setDependentDateFunc("");
      }
    }
  };
  const resetDates = () => {
    setFirstDateFrom("");
    setFirstDateFromIsTouched(false);
    setSecondDateFrom("");
    setSecondDateFromIsTouched(false);
    setFirstDateTo("");
    setFirstDateToIsTouched(false);
    setSecondDateTo("");
    setSecondDateToIsTouched(false);
    setMinFirstDateTo("");
    setMinSecondDateTo("");
  };

  const firstDateFromBlurHandler = () => {
    setFirstDateFromIsTouched(true);
  };
  const secondDateFromBlurHander = () => {
    setSecondDateFromIsTouched(true);
  };
  const firstDateToBlurHandler = () => {
    setFirstDateToIsTouched(true);
  };
  const secondDateToBlurHander = () => {
    setSecondDateToIsTouched(true);
  };

  const firstDateFromIsCorrect = validatedate(firstDateFrom);
  const firstDateToIsCorrect = validatedate(firstDateTo);
  const secondDateFromIsCorrect = validatedate(secondDateFrom);
  const secondDateToIsCorrect = validatedate(secondDateTo);
  const firstDateFromIsValid = firstDateFromIsTouched
    ? validatedate(firstDateFrom)
    : true;
  const firstDateToIsValid = firstDateToIsTouched
    ? validatedate(firstDateTo)
    : true;
  const secondDateFromIsValid = secondDateFromIsTouched
    ? validatedate(secondDateFrom)
    : true;
  const secondDateToIsValid = secondDateToIsTouched
    ? validatedate(secondDateTo)
    : true;
  return {
    firstDateFrom,
    setFirstDateFrom,
    firstDateFromBlurHandler,
    firstDateFromIsValid,
    firstDateFromIsCorrect,
    secondDateFrom,
    secondDateFromIsCorrect,
    secondDateFromIsValid,
    setSecondDateFrom,
    secondDateFromBlurHander,
    firstDateTo,
    firstDateToIsValid,
    firstDateToIsCorrect,
    firstDateToBlurHandler,
    secondDateTo,
    secondDateToIsValid,
    secondDateToBlurHander,
    setFirstDateTo,
    setSecondDateTo,
    secondDateToIsCorrect,
    minSecondDateFrom,
    setMinSecondDateFrom,
    minFirstDateTo,
    setMinFirstDateTo,
    minSecondDateTo,
    setMinSecondDateTo,
    resetDates,
  };
};

export default useDate;
