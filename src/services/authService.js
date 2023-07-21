// authService.js

// Function to handle user login
export const login = async (username, password) => {
  try {
    // Implement the API call to handle user login
    // Example: Make a POST request to your backend API to authenticate the user
    const response = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const data = await response.json();
    // Save the JWT to local storage
    localStorage.setItem('token', data.token);

    // Return the user data from the response
    return data.user;
  } catch (error) {
    throw error;
  }
};

// Function to handle user registration
export const signup = async (username, password, email, skills) => {
  try {
    // Implement the API call to handle user registration
    // Example: Make a POST request to your backend API to register the user
    const response = await fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email, skills }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const data = await response.json();
    // Save the JWT to local storage
    localStorage.setItem('token', data.token);

    // Return the user data from the response
    return data.user;
  } catch (error) {
    throw error;
  }
};

// Function to log out the user and remove the JWT from local storage
export const logout = () => {
  localStorage.removeItem('token');
};
