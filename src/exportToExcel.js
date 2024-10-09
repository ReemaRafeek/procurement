import * as XLSX from 'xlsx';

export const exportToExcel = (items, orderNo) => {
  const ws = XLSX.utils.json_to_sheet(items);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Purchase Order");

  // Generate Excel file
  XLSX.writeFile(wb, `Purchase_Order_${orderNo}.xlsx`);
};
