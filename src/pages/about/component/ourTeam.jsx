import React from 'react';
import N from '../../../constant';

const OurTeam = () => {
  return (
    <div>
      <div className="flex flex-col items-center ">
        <h1 className="font-bold text-[2.5rem]">Our Team</h1>
        <p className="text-center mb-3">
          Our team at CareLink includes experienced healthcare professionals,
          tech enthusiasts, and dedicated support staff. We're passionate <br />
          about making healthcare more accessible and are committed to providing
          the best possible service to our users.
        </p>
      </div>

      <div>
        {/* <h2 className="font-bold text-[2rem] my-12 text-center">Our Doctors</h2> */}

        <div className="flex gap-4">
          {N.DOCTORS.map((doctor, index) => (
            <div key={index}>
              <div className="bg-primary p-4 rounded-lg shadow-lg">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  //   className="h-[500px] w-[450px]"
                  className="h-[500px] w-[450px] object-cover rounded-t-lg"
                />
                {/* <p className="text-[1.6rem]">{doctor.name}</p>
                <p className="text-[1.2rem]">{doctor.specialty}</p> */}
                <div className="p-4">
                  <p className="text-lg font-semibold">{doctor.name}</p>
                  <p className="text-sm text-gray-600">{doctor.specialty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
