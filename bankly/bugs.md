**Bug #1:** The register route does not handle the case where the username is already taken, which could lead to duplicate usernames in the database. This can be a security issue as it allows multiple users to register with the same username.

**Location** - routes/auth.js

**Solution** - Added validation for required fields in the register route. 

**Bug #2:** The login route does not await the result of the User.authenticate function call, which could result in incorrect authentication logic or unexpected behavior. This can lead to security vulnerabilities such as unauthorized access.

**Location** - routes/auth.js

**Solution** - Added validation for required fields in the login route.

**Bug #3:** The login route does not return a 401 status code when the username or password is incorrect, as specified in the comment. Instead, it returns a 500 status code if an error occurs during authentication. This can lead to inconsistent error handling and unexpected behavior for clients.

**Location** - routes/auth.js

**Solution** - Added validation to return a 401 status code and json message "Invalid username or password". 

**Bug #4:** In the PATCH route for updating a user, there's no validation of the request parameters (req.body). 

**Location** - routes/users.js

**Solution** - Added req.body so that user can be updated properly. 

**Bug #5:** In the DELETE route for deleting a user, there's no error handling for the case where the User.delete function fails. It's recommended to wrap this call in a try-catch block to properly handle any errors that may occur during the deletion process.

**Location** - routes/users.js

**Solution** - Wraps the call to User.delete in a try-catch block to properly handle any errors that may occur during the deletion process. If an error occurs, it returns a 500 status code with an error message indicating that the deletion failed.


**Bug #6:** Does not handle case where JWT token is invalid or expired

**Location** -  middleware/auth.js

**Solution** - Use err.name to determine the type of error, and then set the appropriate status code accordingly. This ensures that we handle different types of errors correctly and provide meaningful error responses to the client so that we know whether the token is expired (401) or if it is another type of error (400). 