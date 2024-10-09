import React from 'react';

const ItemSelectionModal = ({ setItems, items }) => {
  const availableItems = [
    { itemNo: 1, itemName: 'Item A', stockUnit: 'pcs', unitPrice: 100 },
    { itemNo: 2, itemName: 'Item B', stockUnit: 'kg', unitPrice: 200 },
    // Add more items here
  ];

  const handleAddItem = (item) => {
    const newItem = { ...item, packingUnit: 'box', orderQty: 1, netAmount: item.unitPrice };
    setItems([...items, newItem]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-4 w-1/2">
        <h2 className="text-lg font-semibold mb-4">Select Items</h2>
        <ul>
          {availableItems.map((item) => (
            <li
              key={item.itemNo}
              className="p-2 border-b cursor-pointer"
              onClick={() => handleAddItem(item)}
            >
              {item.itemName} - {item.unitPrice} per {item.stockUnit}
            </li>
          ))}
        </ul>
        <button className="mt-4 p-2 bg-red-500 text-white" onClick={() => /* Close modal logic */ {}}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ItemSelectionModal;
