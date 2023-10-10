import React from 'react'
  
  function Dashboard() {
    return (
      <div className="relative min-h-screen">
        <head>
          <meta charSet="UTF-8" />
          {/* favicons */}
          <link rel="shortcut icon" href="./assets/icon/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="./assets/icon/android-chrome-192x192.png" type="image/png" />
          <link rel="icon" href="./assets/icon/android-chrome-512x512.png" type="image/png" />
          <link rel="icon" sizes="16x16" href="./assets/icon/favicon-16x16.png" type="image/png" />
          <link rel="icon" sizes="32x32" href="./assets/icon/favicon-32x32.png" type="image/png" />
          <link rel="apple-touch-icon" href="./assets/icon/apple-touch-icon.png" type="image/png" />
          {/* favicons */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* title */}
          <title>Dashboard - Using Flask</title>
          {/* manifest */}
          <link rel="manifest" href="./assets/public/site.webmanifest" />
          {/* custom fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&family=Roboto:wght@400;500&display=swap"
            rel="stylesheet"
          />
          {/* stylesheet */}
          <link rel="stylesheet" type="text/css" href="./assets/styles/main.css" />
        </head>
  
        <body className="bg-gradient-to-r from-red-500 to-red-300">
          <div className="flex h-screen text-gray-900">
            <div className="w-11/12 p-8 m-auto bg-white rounded-lg sm:w-96 bg-opacity-80 bg-clip-padding">
              <div className="flex justify-center">
                <div className="relative">
                  <img className="w-20 h-20 text-xs rounded-full md:w-24 md:h-24" src="./assets/image/no-photo.jpg" alt="user_profile_picture" />
                  <button
                    className="absolute bottom-0 flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full focus:ring-2 focus:ring-blue-300 focus:outline-none right-2"
                    title="Add Image"
                  >
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6 space-y-6">
                <h1 className="text-xl font-medium text-center md:text-3xl font-roboto">Welcome Back!</h1>
                <div className="space-y-2">
                  <div className="flex justify-between p-2 rounded-lg bg-gray-50">
                    <span className="text-sm font-nunito md:text-base">Email ID</span>
                    <span className="text-sm font-semibold text-blue-500 font-nunito md:text-base">johndoe@gmail.com</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-gray-50">
                    <span className="text-sm font-nunito md:text-base">Password</span>
                    <span className="text-sm font-semibold font-nunito md:text-base">test1234</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <button className="p-2 text-sm font-medium text-red-500 bg-white border border-red-500 rounded-md focus:outline-none md:text-base font-roboto focus:ring-2 focus:ring-red-400 hover:bg-red-500 hover:text-white">Logout</button>
                <button className="p-2 text-sm font-medium text-white bg-red-500 rounded-md md:text-base font-roboto focus:outline-none focus:ring-2 focus:ring-red-400">Delete</button>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
  
  export default Dashboard;


