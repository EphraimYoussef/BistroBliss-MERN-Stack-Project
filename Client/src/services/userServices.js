import Cookies from "js-cookie";


const signUp = async (data) => {
  try {
    const response = await fetch("http://192.168.2.133:5000/api/auth/signup", {
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
    const response = await fetch("http://192.168.2.133:5000/api/auth/login", {
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

export {
  signUp,
  login
}