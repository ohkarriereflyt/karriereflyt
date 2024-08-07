import { TransitionWave } from "./index";

export default function CustomerFeedback({ reviewsTitle, reviews }) {
  const formatTextWithBreaks = (text) => {
    if (!text) {
      return <></>; // or you can return any default value you prefer
    }

    return text.split("\n").map((item, index) => (
      <span key={index}>
        {item}
        <br />
      </span>
    ));
  };

  return (
    <div className="relative">
      <div className="lg:absolute w-full h-full">
        <div className="w-full half-way-transition-wave">
          <TransitionWave />
        </div>
      </div>
      <div className="half-slate-gray-background">
        <div className="max-w-7xl w-full mx-auto md:p-8 p-4">
          <h1 className="relative lg:dark light text-center mb-12">
            {reviewsTitle}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {reviews.map((customer) => (
              <div className="flex justify-center w-full" key={customer.author}>
                <div className="flex flex-col kf-border-light gray-background px-6 py-4 shadow-xl lg:min-h-80 w-full">
                  <h2 className="my-2">{customer.textTitle}</h2>
                  <p className="mb-4">{formatTextWithBreaks(customer.text)}</p>
                  <div className="flex items-center mt-auto">
                    <img
                      className=" object-cover w-20 h-20 rounded-full mr-4"
                      src={customer.reviewImage}
                      alt={customer.author}
                    />
                    <div>
                      <h2>{customer.author}</h2>
                      <p>{customer.company}</p>
                      <p>{customer.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
