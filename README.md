README: Building an E-commerce Website with AWS and DynamoDB This document outlines the step-by-step process of creating an E-commerce website with a Products Page, Cart Page, and AWS backend services.

📌 Features ✅ Products Page: Displays all products stored in DynamoDB. ✅ Add to Cart: Adds selected products to a separate Cart Table. ✅ Cart Page: Shows cart items with options to edit and delete items. ✅ Uses AWS Services:

DynamoDB (for storing products & cart data) Lambda (for backend logic) API Gateway (to expose APIs) S3 (for hosting images & frontend)

📌 Step 1: Set Up DynamoDB Tables

1️⃣ Create the Products Table Table Name: Products Primary Key: ProductID (String) Attributes: ProductID (String) - Unique ID Name (String) - Product Name Description (String) - Product details ImageURL (String) - S3 URL for product image Price (Number) - Product price

2️⃣ Create the Cart Table Table Name: Cart Primary Key: CartID (String) (Format: UserID-ProductID) Attributes: CartID (String) - Unique ID (UserID-ProductID) ProductID (String) - Matches Products table Name (String) - Product Name ImageURL (String) - Product Image URL Price (Number) - Product Price

📌 Step 2: Set Up AWS Lambda Functions Create Lambda functions for the following operations: 1️⃣ Get all products (Fetch from Products table) 2️⃣ Add to Cart (Store selected product in Cart table) 3️⃣ Get Cart Items (Fetch all products in the cart) 4️⃣ Edit Cart Item (Update product quantity in Cart table) 5️⃣ Delete Cart Item (Remove an item from Cart table)

📌 Step 3: Deploy APIs using AWS API Gateway Create API Gateway → Add routes for each Lambda function: /products → GET (Fetch products) /cart/add → POST (Add to cart) /cart/get → GET (Fetch cart items) /cart/edit → PUT (Edit cart item) /cart/delete → DELETE (Remove cart item) Deploy API → Copy API Gateway URLs.

📌 Step 4: Build the Frontend (HTML, CSS, JavaScript)

1️⃣ Pages to Create index.html → Products Page (Displays all products with an "Add to Cart" button)

2️⃣ JavaScript Functionalities Fetch products from API and display them. "Add to Cart" button triggers an API request to add an item to the cart. Fetch cart items from API and display them on the Cart page. Edit quantity of cart items using an API call. Remove items from the cart via API call.

📌 Step 5: Deploy the Frontend Host the frontend using Amazon S3 (Static Website Hosting). Ensure the S3 bucket is public so users can access the website. Update API URLs in JavaScript files to match your API Gateway endpoints.

📌 Final Steps ✅ Test the API calls using Postman or a browser. ✅ Check DynamoDB tables to verify data is stored correctly. ✅ Monitor AWS CloudWatch logs for debugging issues. ✅ Optimize UI with CSS for a better user experience.
