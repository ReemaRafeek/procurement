import React from 'react';

const SupplierModal = ({ isOpen, setIsOpen, setSupplier }) => {
  // Fetch supplier list from API and set the list here
  const supplierList = ["Supplier A", "Supplier B", "Supplier C"];

  const handleSelectSupplier = (supplier) => {
    setSupplier(supplier);
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
        <div className="bg-white p-4 w-1/2">
          <h2 className="text-lg font-semibold mb-4">Select Supplier</h2>
          <ul>
            {supplierList.map((supplier) => (
              <li
                key={supplier}
                className="p-2 border-b cursor-pointer"
                onClick={() => handleSelectSupplier(supplier)}
              >
                {supplier}
              </li>
            ))}
          </ul>
          <button onClick={() => setIsOpen(false)} className="mt-4 p-2 bg-red-500 text-white">Close</button>
        </div>
      </div>
    )
  );
};

export default SupplierModal;
