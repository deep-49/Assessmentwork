# React Web Application with Authentication and Navigation

This project is a React-based web application with a responsive user interface styled using Tailwind CSS. It includes user authentication (signup, login, and logout), dynamic routing using React Router, and a clean layout with reusable components.

---

## Features

### 1. **Responsive Navigation**
- **Header and Footer Components**: Includes navigation links such as:
  - Home
  - About Us
  - Contact Us
  - Login
  - Signup
  - Logout
- **Tailwind CSS**: Ensures responsiveness and consistent styling.

### 2. **Authentication**
- **Login Page**:
  - Fields for User ID (Email or Username) and Password.
  - Validates credentials and shows an error for invalid login.
  - Redirects to the dashboard on successful login.

- **Signup Page**:
  - Fields for User Name, Email, Mobile, Password, and Retype Password.
  - Encrypts passwords using `bcryptjs`.
  - Displays success or error messages based on input.

- **Logout Page**:
  - Clears session data and redirects to the login page.

### 3. **Dashboard**
- Displays a welcome message and placeholder links for different modules (e.g., Gender Master, Country Master).
- Includes a form for updating the password (without actual functionality).

### 4. **Dynamic Routing**
- Navigation links use React Router for seamless page transitions.

---



### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

  ### File Structure

  src/
├── components/
│   ├── Header.jsx         # Header with navigation links
│   ├── Footer.jsx         # Footer with copyright info
├── pages/
│   ├── Home.jsx           # Home page content
│   ├── About.jsx          # About Us page
│   ├── Contact.jsx        # Contact Us page
│   ├── Login.jsx          # Login form
│   ├── Signup.jsx         # Signup form with password encryption
│   ├── Dashboard.jsx      # Dashboard layout
│   ├── Logout.jsx         # Logout logic and redirection
├── App.js                 # App configuration with routing
├── index.js               # Entry point of the application
├── styles.css             # Tailwind CSS configuration

### Dependencies
- React: Frontend framework.
- React Router DOM: Routing and navigation.
- Tailwind bcryptjs: Password encryption library.
- CSS: Utility-first CSS framework for styling.
  

