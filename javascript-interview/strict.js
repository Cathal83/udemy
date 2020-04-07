/**
 * Question 11 - What does 'strict mode' do and what are the benefits
 *
 * Answer: Enforces stricter parsing and error handling
 * 1. Prevents the use of global variables - ensures variables uses var, let, const
 * 2. All function parameter names must be unique
 *
 * fail fast and fail loudly
 *
 */

// 1. - 'use strict' requires var, let or const
city = "London";

// 2. - 'use strict' will not allow this
function myFunc(a, a, b) {
  console.log(a, a, b);
}
