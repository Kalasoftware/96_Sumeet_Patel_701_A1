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
