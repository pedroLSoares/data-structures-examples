const Stack = require('./Stack');

// 1. Define an empty pizza stack with a maxSize of 6
const pizzaStack = new Stack(6);
// 2. Add pizzas as they are ready until we fill up the stack
for (let i = 0; i < 6; i++) {
  pizzaStack.push(`Pizza #${i + 1}`);
}
// 3. Try pushing another pizza to check for overflow
try {
  pizzaStack.push('Pizza #7');
} catch (e) {
  console.log(e.message);
}

// 4. Peek at the pizza on the top of stack and log its value
console.log(pizzaStack.peek());

// 5. Deliver all the pizzas from the top of the stack down
while (!pizzaStack.isEmpty()) {
  pizzaStack.pop();
}

// 6. Try popping another pizza to check for empty stack
try {
  pizzaStack.pop();
} catch (e) {
  console.log(e.message);
}
