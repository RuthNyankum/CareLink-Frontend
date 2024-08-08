import React from 'react';
import { DNA } from 'react-loader-spinner';

const FormLoader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <DNA
        visible={true}
        height="40"
        width="40"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default FormLoader;
