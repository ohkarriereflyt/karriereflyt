import HeadshotOne from "../imagesMidlertidig/HeadshotOne.jpg";
import HeadshotTwo from "../imagesMidlertidig/HeadshotTwo.jpg";
import HeadshotThree from "../imagesMidlertidig/HeadshotThree.jpg";
import Image from "next/image";

export default function CustomerFeedback({reviewsTitle, reviews}) {
  return (
    <div className="w-full max-w-screen-lg mx-auto lg:mt-0 lg:pt-0 md:pt-48">
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 md:px-0 px-4">
          {reviewsTitle}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:px-0 px-6">
          {reviews.map((customer) => (
            <div
              className="flex flex-col rounded-lg border-4 border-border-dark bg-background-flat text-start px-6 py-5 shadow-xl"
              key={customer.author}
            >
              <h2 className="my-3  text-card-text-color">
                {customer.textTitle}
              </h2>
              <p className="mb-12 text-card-text-color">{customer.text}</p>
              <div className="flex items-center mt-auto pb-8">
                <img
                  className=" object-fit w-20 h-20 rounded-full  mr-4"
                  src={customer.reviewImage}
                  alt={customer.author}
                />
                <div>
                  <h2 className="font-bold  text-card-text-color">
                    {customer.author}
                  </h2>
                  <p className="text-card-text-color">{customer.company}</p>
                  <p className="text-card-text-color">{customer.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
