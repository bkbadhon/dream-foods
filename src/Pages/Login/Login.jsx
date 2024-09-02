import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

    const {logIn}= useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault();
        const form =new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        logIn(email, password)
        .then(result =>{
            Swal.fire('Good job!','You logged in!','success')
            console.log(result.user)
            navigate(location?. state? location.state : "/" )
        })
        .catch( error =>{
            console.log(error)
        })
    }

  return (
    <div className="bg-base-200 py-4">
      <h2 className="text-2xl  font-bold text-center">Login Here</h2>
      <div className="hero bg-base-200">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center mt-2 mb-2">
              Do not have an account{" "}
              <Link className="text-blue-500" to={"/register"}>
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
