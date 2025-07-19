# Simple Expense Tracker

A simple and beginner-friendly Node.js module to track your expenses locally using a JSON file.

## Install

```bash
npm install simple-expense-tracker
```

## usage 

```javascript
const tracker = require('simple-expense-tracker');

// Add expenses
tracker.addExpense("Coffee", 50);
tracker.addExpense("Books", 300);

// List all
console.log(tracker.getAllExpenses());

// Get total
console.log("Total: ₹", tracker.getTotalExpense());

// Delete by ID
tracker.deleteExpense(1689753487523);
```