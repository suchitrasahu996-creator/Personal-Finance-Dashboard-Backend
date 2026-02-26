import * as billRepository from "../repositories/bill.repository.js";

export const createBill = async (userId, billData) => {
  return await billRepository.createBill({
    user_id: userId,
    ...billData,
  });
};

export const getBills = async (userId) => {
  return await billRepository.getBillsByUserId(userId);
};

export const updateBillStatus = async (
  userId,
  billId,
  status
) => {
  return await billRepository.updateBillStatus(
    userId,
    billId,
    status
  );
};

export const deleteBill = async (userId, billId) => {
  return await billRepository.deleteBill(
    userId,
    billId
  );
};