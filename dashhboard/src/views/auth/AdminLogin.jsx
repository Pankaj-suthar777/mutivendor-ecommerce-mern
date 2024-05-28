import { useState } from "react";

const AdminLogin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-w-screen min-h-screen bg-[rgb(205,202,233)] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[50px] ">
              <img
                className="h-full w-full"
                src="/images/logo.png"
                alt="logo"
              />
            </div>
          </div>
          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                type="email"
                id="email"
                placeholder="Email"
                required
                onChange={inputHandler}
                value={state.email}
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                type="password"
                id="password"
                placeholder="Password"
                required
                onChange={inputHandler}
                value={state.password}
              />
            </div>

            <button
              className="bg-slate-800 w-full hover:shadow-blue-300/5 hover-lg text-white rounded-md px-7 py-2 mb-3"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
