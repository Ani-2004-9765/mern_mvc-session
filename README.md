Hotel Room Management System

(Node.js + Express.js + MongoDB + MVC + Session)
Objective

Develop a Hotel Room Management System using Express.js, MongoDB, Mongoose, EJS, Bootstrap,
MVC Architecture, and Session Management.

Module 1: User Authentication 
Registration
Create a registration form with the following fields:
• Full Name
• Email
• Password

Login
• Authenticate users using Email and Password.
• Create a session after successful login.

Logout
• Destroy the session and redirect the user to the login page.

Module 2: Room Management (CRUD Operations)
Create a Room collection with the following fields:
• Room Number
• Room Type
• Price Per Night
• Capacity

Functionalities

Insert Room
Allow logged-in users to add new room details.

Display Rooms
Display all room records in a Bootstrap table.

Update Room
Allow editing of existing room details.

Delete Room
Allow deletion of room records.

Session Requirements
The following operations should be accessible only after login:
• Insert Room
• Display Rooms
• Update Room
• Delete Room
• Logout
If a user tries to access these pages without logging in, redirect them to the Login page.
MVC Structure
models/
controllers/
routes/
views/
public/
app.js

Technologies
• Node.js
• Express.js
• MongoDB
• Mongoose
• EJS
• Bootstrap
• Express Session

Expected Output
A session-based Hotel Room Management System implementing:
✓ User Registration
✓ User Login
✓ User Logout
✓ Insert Room
✓ Display Rooms
✓ Update Room
✓ Delete Room
✓ MVC Architecture
