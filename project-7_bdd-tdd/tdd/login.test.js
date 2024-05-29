test("should login successfully with correct credentials", () => {
  const result = login("correctUsername", "correctPassword");
  expect(result).toBe("Login successful");
});

test("should fail to login with incorrect credentials", () => {
  const result = login("incorrectUsername", "incorrectPassword");
  expect(result).toBe("Login failed");
});

// minimal code to pass test
/**
function login(username, password) {
  if (username === "correctUsername" && password === "correctPassword") {
    return "Login successful";
  } else {
    return "Login failed";
  }
}
*/

// refactored code
function login(username, password) {
  const validUsername = "correctUsername";
  const validPassword = "correctPassword";
  return username === validUsername && password === validPassword
    ? "Login successful"
    : "Login failed";
}
