import * as billService from "../services/bill.service.js";

export const createBill = async (req, res) => {
  try {
    const bill = await billService.createBill(
      req.user.id,
      req.body
    );

    res.status(201).json({
      success: true,
      data: bill,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBills = async (req, res) => {
  try {
    const bills = await billService.getBills(
      req.user.id
    );

    res.json({
      success: true,
      data: bills,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateBillStatus = async (req, res) => {
  try {
    const bill = await billService.updateBillStatus(
      req.user.id,
      req.params.id,
      req.body.status
    );

    res.json({
      success: true,
      data: bill,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBill = async (req, res) => {
  try {
    await billService.deleteBill(
      req.user.id,
      req.params.id
    );

    res.json({
      success: true,
      message: "Bill deleted",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};