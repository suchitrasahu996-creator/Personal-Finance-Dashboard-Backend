import * as transactionRepository from "../repositories/transaction.repository.js";

export const createTransaction = async (userId, transactionData) => {

    if (!userId) {
        throw new Error("User ID required");
    }

    return await transactionRepository.insertTransaction(
        userId,
        transactionData
    );

};

export const getTransactions = async (userId) => {

    if (!userId) {
        throw new Error("User ID required");
    }

    return await transactionRepository.getTransactionsByUser(
        userId
    );

};

export const deleteTransaction = async (userId, transactionId) => {

    if (!transactionId) {
        throw new Error("Transaction ID required");
    }

    return await transactionRepository.deleteTransaction(
        userId,
        transactionId
    );

};

export const getMonthlySummary = async (userId, year, month) => {

    const transactions =
        await transactionRepository.getMonthlyTransactions(
            userId,
            year,
            month
        );

    let income = 0;
    let expense = 0;

    for (const txn of transactions) {

        if (txn.type === "income") {
            income += Number(txn.amount);
        }

        if (txn.type === "expense") {
            expense += Number(txn.amount);
        }

    }

    return {

        income,
        expense,
        balance: income - expense,
        count: transactions.length

    };

};