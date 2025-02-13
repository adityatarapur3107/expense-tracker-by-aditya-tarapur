document.getElementById('addExpenseButton').addEventListener('click', function() {
    const expenseName = document.getElementById('expenseName').value;
    const expenseAmount = document.getElementById('expenseAmount').value;
  
    // Validate inputs
    if (expenseName === '' || expenseAmount === '') {
      alert('Please fill in all fields');
      return;
    }
  
    // Create a new expense item
    const expenseItem = document.createElement('div');
    expenseItem.classList.add('expense-item');
  
    // Use a default image for the expense
    const expenseImg = document.createElement('img');
    expenseImg.src = 'https://via.placeholder.com/50'; // Placeholder image
    expenseImg.alt = expenseName;
  
    // Create the expense details element
    const expenseDetails = document.createElement('div');
    expenseDetails.classList.add('expense-details');
  
    // Create the expense name element
    const expenseNameElement = document.createElement('div');
    expenseNameElement.classList.add('expense-name');
    expenseNameElement.textContent = expenseName;
  
    // Create the expense amount element
    const expenseAmountElement = document.createElement('div');
    expenseAmountElement.classList.add('expense-amount');
    expenseAmountElement.textContent = `$${expenseAmount}`;
  
    // Append everything together
    expenseDetails.appendChild(expenseNameElement);
    expenseDetails.appendChild(expenseAmountElement);
    expenseItem.appendChild(expenseImg);
    expenseItem.appendChild(expenseDetails);
  
    // Append to the expenses list
    const expensesList = document.getElementById('expensesList');
    const noExpenses = document.querySelector('.no-expenses');
    if (noExpenses) {
      noExpenses.remove(); // Remove the "No expenses" message when there are items
    }
    expensesList.appendChild(expenseItem);
  
    // Clear the input fields after submission
    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';
  });
  