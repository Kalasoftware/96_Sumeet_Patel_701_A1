// index.js

const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'expenses.json');

function loadExpenses() {
  try {
    if (!fs.existsSync(DB_FILE)) return [];
    const data = fs.readFileSync(DB_FILE);
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

function saveExpenses(expenses) {
  fs.writeFileSync(DB_FILE, JSON.stringify(expenses, null, 2));
}

function addExpense(title, amount) {
  const expenses = loadExpenses();
  expenses.push({ id: Date.now(), title, amount });
  saveExpenses(expenses);
}

function getAllExpenses() {
  return loadExpenses();
}

function getTotalExpense() {
  return loadExpenses().reduce((total, e) => total + e.amount, 0);
}

function deleteExpense(id) {
  let expenses = loadExpenses();
  expenses = expenses.filter(e => e.id !== id);
  saveExpenses(expenses);
}

module.exports = {
  addExpense,
  getAllExpenses,
  getTotalExpense,
  deleteExpense
};
