import React from 'react';
import N from '../../../constant';

const Testimonials = () => {
  return (
    <div className="my-24 flex flex-col justify-center items-center bg-dark px-4 py-8">
      <h1 className="font-bold text-[2.5rem] mb-12 text-center text-white">
        User Testimonials
      </h1>

      <div className="flex flex-wrap gap-10 justify-center max-w-4xl">
        {N.TESTIMONIALSDATA.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-center max-w-sm p-6 bg-white rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-16 w-16 rounded-full mr-4"
              />
              <p className="font-bold text-lg">
                {testimonial.name}, {testimonial.role}
              </p>
            </div>
            <p className="text-[1.2rem] italic mb-4 text-center">
              "{testimonial.text}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
