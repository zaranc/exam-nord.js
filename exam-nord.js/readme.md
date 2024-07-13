1. Project Setup (5 points)
- Initialize a new Node.js project.
- Install necessary dependencies: express, ejs, body-parser, mongoose, jsonwebtoken, cookie-parser, etc.
- Set up a basic server using Express.

2. Model - MongoDB Setup (5 points)
- Set up a MongoDB database to store product data.
- Create collections for products, categories, and users.
- Define Product, Category, and User models using Mongoose.

3. Model - User Model with Roles (5 points)
- Enhance the User model to include fields such as username, password, role, etc.
- Implement role-based access control (e.g., roles: admin, user).
- Hash and store user passwords securely in the database.
4. Controller - Authentication (10 points)
- Create controllers for user registration (/register) and login (/login).
- Implement a JWT token issuance upon successful login and send it as a cookie to the client.
- Store user roles in the JWT payload.
- Configure the server to use cookie-parser for parsing cookies.
- Implement a route to handle user logout and clear the JWT token cookie.

5. Middleware and Routing (10 points)
- Create middleware to check for the presence and validity of JWT tokens.
- Implement a middleware to extract user information from the token and attach it to the request object.
- Use middleware to protect routes that require authentication.
- Define routes for rendering views and handling CRUD operations on products and categories.
- Ensure that routes are protected based on user roles.

6. Model - Fetching and Displaying User-Specific Products (10 points)
- Update the User model to include a reference or array of associated products.
- Ensure that all products can be retrieved for an authenticated user.
- Modify routes to handle multi-user support.

7. Model - Category Support (10 points)
- Implement category controllers for adding, updating, and deleting categories.
- Associate products with categories in the Product model.
- Ensure that products can be filtered based on selected categories.

8. View Structure (5 points)
- Create the necessary views using EJS:
- productList.ejs (to display all products)
- myProducts.ejs (to display products added by the logged-in user)
- productForm.ejs
- productItem.ejs
- categoryList.ejs (to display all categories)
- navbar.ejs (for navigation)
- login.ejs
- register.ejs

9. Navbar (5 points)
- Create a navbar.ejs partial for navigation.
- Include links to the product list, user-specific products, category list, product form, and a sign-out option (if applicable).
- Ensure the navbar is responsive and visually appealing.