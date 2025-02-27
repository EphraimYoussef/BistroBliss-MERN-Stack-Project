import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const signUp = async (data) => {
  try {
    console.log("env" + process.env.BACKEND_PORT);
    
    const response = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.name,
        email: data.email,
        password: data.password,
        isAdmin: data.admin,
      }),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "Something went wrong. Please try again.");
    }

    // * Save token to a cookie (valid for 7 days)
    Cookies.set("token", result.data.token, { expires: 7, secure: true });

    setTimeout(() => {
      window.location.href = "/";
    }, 2500);

  } catch (error) {
    throw new Error(error.message);
  }
}

const login = async (data) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Something went wrong. Please try again.");
    }

    Cookies.set("token", result.data.token.token);

    setTimeout(() => {
      window.location.href = "/";
    }, 2500);

  } catch (error) {
    throw new Error(error.message);
  }
}

const logout = async () => {
  try {
    await fetch(`${API_URL}/auth/logout`, { method: 'POST', credentials: 'include' });
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  } 
  catch (error) {
    console.error('Logout failed', error);
  }
};


export {
  signUp,
  login,
  logout
}