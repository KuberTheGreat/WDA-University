import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleAuth = async () => {
    setError(""); // clear previous error

    const emailPattern =
      /^(lci|lit|lcs|lcb)202(1|2|3|4)0(0[1-9]|[1-5][0-9]|60)@iiitl\.ac\.in$/;
    if (!emailPattern.test(email)) {
      setError(
        "Only Institute email id is allowed."
      );
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful!");
      }
    } catch (err) {
      setError(err.message); // set error for display
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md transition-all">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          {isLogin ? "Welcome Back 👋" : "Create an Account"}
        </h2>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          </div>
          <button
            onClick={handleAuth}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </div>

        <p className="text-center mt-6 text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
            }}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AuthPage;
