import React, { useState } from 'react';
import SupplierModal from './SupplierModal';
import ImageUpload from './ImageUpload';

const ItemMaster = () => {
  // Form state
  const [itemName, setItemName] = useState('');
  const [inventoryLocation, setInventoryLocation] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [supplier, setSupplier] = useState('');
  const [stockUnit, setStockUnit] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [status, setStatus] = useState(true);  // true for Enabled, false for Disabled
  const [images, setImages] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission (API call, validation)
  };

  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-4">Item Master</h2>
      <form onSubmit={handleSubmit}>
        {/* Item Name */}
        <label>Item Name</label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        
        {/* Inventory Location */}
        <label>Inventory Location</label>
        <input
          type="text"
          value={inventoryLocation}
          onChange={(e) => setInventoryLocation(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        
        {/* Brand */}
        <label>Brand</label>
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        
        {/* Category */}
        <label>Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        
        {/* Supplier */}
        <label>Supplier</label>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={supplier}
            readOnly
            className="border p-2 w-full"
          />
          <button
            type="button"
            className="ml-2 p-2 bg-blue-500 text-white"
            onClick={() => /* Logic to open supplier modal */ {}}
          >
            Search Supplier
          </button>
        </div>
        
        {/* Stock Unit */}
        <label>Stock Unit</label>
        <select
          value={stockUnit}
          onChange={(e) => setStockUnit(e.target.value)}
          className="border p-2 w-full mb-4"
        >
          <option value="kg">Kg</option>
          <option value="pcs">Pieces</option>
          <option value="ltr">Litre</option>
        </select>
        
        {/* Unit Price */}
        <label>Unit Price</label>
        <input
          type="number"
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        
        {/* Image Upload */}
        <label>Item Images</label>
        <ImageUpload images={images} setImages={setImages} />
        
        {/* Status */}
        <label>Status</label>
        <div className="mb-4">
          <label className="mr-4">
            <input
              type="radio"
              value={true}
              checked={status === true}
              onChange={() => setStatus(true)}
            /> Enabled
          </label>
          <label>
            <input
              type="radio"
              value={false}
              checked={status === false}
              onChange={() => setStatus(false)}
            /> Disabled
          </label>
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 text-white p-2"
        >
          Save Item
        </button>
      </form>
      
      {/* Supplier Modal */}
      <SupplierModal /* props to manage modal visibility */ />
    </div>
  );
};

export default ItemMaster;
