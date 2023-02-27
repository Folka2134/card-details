import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./App.css";

function App() {
  const [cardholderName, setCardholderName] = useState("Jane Appleseed");
  const [cardNumber, setCardNumber] = useState("0000000000000000");
  const [mm, setMm] = useState("00");
  const [yy, setYy] = useState("00");
  const [cvc, setCvc] = useState("000");

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Formik Logic

  const formik = useFormik({
    initialValues: {
      cardholderName: "",
      cardNumber: "",
      mm: "",
      yy: "",
      cvc: "",
    },

    // Validate Form

    validationSchema: Yup.object({
      cardholderName: Yup.string().required("Can't be blank"),
      cardNumber: Yup.number()
        .min(16, "must have atleast 16 numbers")
        .typeError("wrong fomat, numbers only")
        .required("Can't be blank"),
      mm: Yup.number()
        .min(2, "requires 2 digits")
        .typeError("wrong fomat, numbers only")
        .required("Can't be blank"),
      yy: Yup.number()
        .min(2, "requires 2 digits")
        .typeError("wrong fomat, numbers only")
        .required("Can't be blank"),
      cvc: Yup.number()
        .min(3, "requires 3 digits")
        .typeError("wrong fomat, numbers only")
        .required("Can't be blank"),
    }),

    // Submit Form
    onSubmit: (values) => {
      console.log(values);
      setFormSubmitted(true);
    },
  });

  // console.log(formik.errors);
  return (
    <div className="App">
      <div className="h-80 bg-[#21082F] p-4">
        <div className="card-front h-56 w-96 p-10 rounded-lg bg-gradient-to-br from-[#6142F5] via-[#A353D0] to-[#650792] text-white absolute inset-y-36 inset-x-5 z-10">
          <div className="flex flex-col h-full justify-between pb-4">
            <h1></h1>
            <h1 className="text-center text-3xl tracking-widest">
              {cardNumber}
            </h1>
          </div>
          <div className="flex justify-between text-sm">
            <h3 className="uppercase">{cardholderName}</h3>
            <p>
              {mm}/{yy}
            </p>
          </div>
        </div>
        <div className="card-back h-56 w-96 pt-4 rounded-lg bg-gray-100 right-6 absolute">
          <h1 className="h-10 bg-black">.</h1>
          <div className="p-5">
            <div className="text-right text-white tracking-widest rounded-md p-2 bg-gray-400">
              {cvc}
            </div>
          </div>
        </div>
      </div>
      <main className="p-10 mt-12">
        {formSubmitted ? (
          <div className="flex flex-col h-96 text-center justify-center">
            <h1 className="text-4xl font-semibold tracking-wider uppercase mb-8">
              Thank you!
            </h1>
            <h3 className="text-2xl text-gray-500 mb-12">
              We've added your card details
            </h3>
            <button className="bg-[#21082F] text-white p-4 rounded-xl">
              Continue
            </button>
          </div>
        ) : (
          <form
            className="flex flex-col justify-evenly h-96"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <label
                className={`text-sm font-semibold tracking-wider uppercase ${
                  formik.errors.cardholderName && formik.touched.cardholderName
                    ? "border-red-400"
                    : "border-gray-200"
                }`}
                htmlFor="cardName"
              >
                Cardholder Name
              </label>
              <input
                className="w-full p-2 border-2 border-gray-300 mt-2"
                type="text"
                name="cardholderName"
                placeholder="e.g Jane Appleseed"
                value={formik.values.cardholderName}
                onInput={(e) => setCardholderName(e.target.value)}
                onChange={formik.handleChange}
              />

              {formik.errors.cardholderName &&
                formik.touched.cardholderName && (
                  <label className="text-xs text-red-400 p-2 text-right italic">
                    {formik.errors.cardholderName}
                  </label>
                )}
            </div>
            <div>
              <label
                className={`text-sm font-semibold tracking-wider uppercase ${
                  formik.errors.cardNumber && formik.touched.cardNumber
                    ? "border-red-400"
                    : "border-gray-200"
                }`}
              >
                Card Number
              </label>
              <input
                className="w-full p-2 border-2 border-gray-300 mt-2"
                type="text"
                name="cardNumber"
                placeholder="e.g 1234 5678 9123 0000"
                value={formik.values.cardNumber}
                onInput={(e) => setCardNumber(e.target.value)}
                onChange={formik.handleChange}
              />
              {formik.errors.cardNumber && formik.touched.cardNumber && (
                <label className="text-xs text-red-400 p-2 text-right italic">
                  {formik.errors.cardNumber}
                </label>
              )}
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <label
                  className={`text-sm font-semibold tracking-wider uppercase ${
                    (formik.errors.mm && formik.touched.mm) ||
                    (formik.errors.yy && formik.touched.yy)
                      ? "border-red-400"
                      : "border-gray-200"
                  }`}
                >
                  Exp. Date (mm/yy)
                </label>
                <div className="flex">
                  <div className="flex flex-col">
                    <input
                      className="w-14 p-2 border-2 border-gray-300 mr-3 mt-2"
                      type="text"
                      name="mm"
                      placeholder="MM"
                      maxLength={2}
                      value={formik.values.mm}
                      onInput={(e) => setMm(e.target.value)}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.mm && formik.touched.mm && (
                      <label className="text-xs text-red-400 p-2 text-right italic">
                        {formik.errors.mm}
                      </label>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      className="w-14 p-2 border-2 border-gray-300 mr-3 mt-2"
                      type="text"
                      name="yy"
                      placeholder="YY"
                      maxLength={2}
                      value={formik.values.yy}
                      onInput={(e) => setYy(e.target.value)}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.yy && formik.touched.yy && (
                      <label className="text-xs text-red-400 p-2 text-right italic">
                        {formik.errors.yy}
                      </label>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  className={`text-sm font-semibold tracking-wider uppercase ${
                    formik.errors.cvc && formik.touched.cvc
                      ? "border-red-400"
                      : "border-gray-200"
                  }`}
                >
                  CVC
                </label>
                <input
                  className="w-28 p-2 border-2 border-gray-300 mr-3 mt-2"
                  type="text"
                  name="cvc"
                  placeholder="e.g 123"
                  maxLength={3}
                  value={formik.values.cvc}
                  onInput={(e) => setCvc(e.target.value)}
                  onChange={formik.handleChange}
                />
                {formik.errors.cvc && formik.touched.cvc && (
                  <label className="text-xs text-red-400 p-2 text-right italic">
                    {formik.errors.cvc}
                  </label>
                )}
              </div>
            </div>
            <button
              className="bg-[#21082F] text-white p-4 rounded-xl"
              type="submit"
              value="Confirm"
            >
              Confirm
            </button>
          </form>
        )}
      </main>
    </div>
  );
}

export default App;
