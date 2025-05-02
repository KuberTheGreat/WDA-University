import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { setUser } from "../utils/authSlice";
import { useDispatch, useSelector } from "react-redux";

function AuthPage() {
  const [email, setEmail] = useState("lci2024033@iiitl.ac.in");
  const [name, setName] = useState("Mohd Amaan");
  const [password, setPassword] = useState("");
  const [enrlno, setenrlno] = useState("LCI2024033");
  const [gender, setGender] = useState("Male");

  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [role, setRole] = useState("student");
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const storage = getStorage();
  // const storageRef = ref(storage, `profile-pics/${userCredential.user.uid}`);

  const handleAuth = async () => {
    setError("");
    const emailPattern =
      /^(lci|lit|lcs|lcb)202(1|2|3|4)0(0[1-9]|[1-5][0-9]|60)@iiitl\.ac\.in$/;

    const enrolNoPattern =
      /^(LCI|LCS|LCB|LIT)202(1|2|3|4)0(0[1-9]|[1-5][0-9]|60)$/;

    if (!isLogin)
    {
      if (!name || !enrlno  || !gender || !email || !password) {
        setError("Please fill all fields.");
        return;
      }
      if (!enrolNoPattern.test(enrlno)) {
        setError("Enrollment No is not valid!!!");
        return;
      }
    }
    
    

    if (!emailPattern.test(email)) {
      setError("Only Institute email ID is allowed.");
      return;
    }

    

    try {
      if (isLogin) {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        dispatch(setUser(userCredential.user));
        navigate("/about");
        // redirection will go here later based on role
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        
        
        dispatch(
          setUser({
            user: userCredential.user,
            name,
            enrlno,
            gender,
          })
        );
        console.log("from dispatch" + userCredential.user )
        navigate("/about");
        // redirection will go here later based on role
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-300 p-10 rounded-2xl shadow-2xl w-full max-w-md transition-all">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          {isLogin ? "Welcome Back 👋" : "Create an Account"}
        </h2>

        <div className="space-y-4">
          {/* Role Dropdown */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="student">Student</option>
            <option value="professor">Professor</option>
            <option value="admin">Admin</option>
          </select>

          {/* Name Input  */}

          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}

          {/* Enrollment No  */}

          {!isLogin && (
            <input
              type="text"
              placeholder="Enrollment No"
              value={enrlno}
              onChange={(e) => setenrlno(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}

          {/* Profile Pic  */}

          {/* {!isLogin && (
            <div className="w-full">
              <label className="block mb-1 font-medium text-gray-700">
                Upload Profile Picture
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setProfilePic(e.target.files[0])}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          )} */}

          {/* Gender  */}
          {!isLogin && (
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          )}

          {/* Email Input */}
          <input
            type="email"
            placeholder="Institute Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password Input */}
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

          {/* Auth Button */}
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
