import * as transactionService from "../services/transaction.service.js";
import { transactionSchema } from "../validations/transaction.validation.js";

export const addTransaction = async (req, res) => {

    try {

        const { error, value } =
            transactionSchema.validate(req.body);

        if (error) {

            return res.status(400).json({

                success: false,
                message: error.details[0].message

            });

        }

        const transaction =
            await transactionService.createTransaction(
                req.user.id,
                value
            );

        res.status(201).json({

            success: true,
            data: transaction

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};


export const getTransactions = async (req, res) => {

    try {

        const transactions =
            await transactionService.getTransactions(
                req.user.id
            );

        res.status(200).json({

            success: true,
            data: transactions

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};


export const deleteTransaction = async (req, res) => {

    try {

        await transactionService.deleteTransaction(

            req.user.id,
            req.params.id

        );

        res.status(200).json({

            success: true,
            message: "Transaction deleted"

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};


export const getMonthlySummary = async (req, res) => {

    try {

        const { year, month } = req.query;

        const summary =
            await transactionService.getMonthlySummary(

                req.user.id,
                Number(year),
                Number(month)

            );

        res.status(200).json({

            success: true,
            data: summary

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};