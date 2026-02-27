import * as billRepository from "../repositories/bill.repository.js";


/* ---------------- CREATE ---------------- */
export const createBill = async (userId, billData) => {

  return await billRepository.createBill({
    user_id: userId,
    ...billData,
  });

};


/* ---------------- GET ---------------- */
export const getBills = async (userId) => {

  return await billRepository.getBillsByUserId(userId);

};


/* ---------------- UPDATE PAID STATUS ---------------- */
export const updateBillPaidStatus = async (
  userId,
  billId,
  paid
) => {

  return await billRepository.updateBillPaidStatus(
    userId,
    billId,
    paid
  );

};


/* ---------------- DELETE ---------------- */
export const deleteBill = async (userId, billId) => {

  return await billRepository.deleteBill(
    userId,
    billId
  );

};