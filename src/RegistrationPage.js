import React from 'react';

const SignupPage = () => {
  return (
    <div className="flex h-screen text-gray-900">
      <div className="w-11/12 p-8 m-auto bg-white rounded-lg sm:w-96 bg-opacity-80 bg-clip-padding">
        <div className="space-y-2">
          <div>
            <h1 className="text-2xl font-medium text-center md:text-4xl font-roboto">Create Account</h1>
          </div>
          <div>
            <div className="space-x-1 text-sm text-center md:text-base font-nunito">
              <span>
                Already have an account?
              </span>
              <a className="font-semibold text-blue-500" href="signin.html">Sign In</a>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <form className="text-base font-nunito" action="http://localhost:8080/" method="POST">
            <div className="space-y-4">
              <div className="relative flex items-center">
                <svg className="absolute w-5 h-5 ml-3 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  type="email" name="email" placeholder="Email" required />
              </div>
              <div className="relative flex items-center">
                <svg className="absolute w-5 h-5 ml-3 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input
                  className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  type="password" name="password" placeholder="Password" required />
              </div>
              <div className="flex items-start space-x-2 md:items-center">
                <input className="focus:outline-none" type="checkbox" name="terms" id="serviceTerms" />
                <label className="-mt-1 text-sm sm:mt-0" htmlFor="serviceTerms">
                  <span>I have read and agree to the</span>
                  <a className="font-semibold text-blue-500" href="">Terms&nbsp;of&nbsp;Service</a>
                </label>
              </div>
              <div>
                <button
                  className="w-full p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg">Sign Up</button>
              </div>
            </div>
          </form>
          <div className="mt-4">
            <button
              className="w-full p-2 text-sm font-normal text-center transition duration-100 bg-white rounded-md md:text-lg font-roboto focus:outline-none hover:shadow-lg">
              <span className="flex items-center justify-center gap-4">
                <img className="w-5 h-5 text-xs" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="google_logo"/>
                Sign up with Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
