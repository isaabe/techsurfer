import React from 'react';
//import Link from "next/link"
import Dashboard from './Dashboard';
import ChatForm from './ChatForm';
import Form from './Contact _form';
import FileUpload from './FileUpload';
import SignupPage from './RegistrationPage';
import LoginPage from './LoginPage';
const App = ({ children }) => {
  return (
    <div className='container'>

<div className="grid grid-cols-4 grid-rows-6 h-screen">
      <header className="col-span-4 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Header</h1>
      </header>
      <aside className="col-span-1 bg-gray-200 p-4">
        <h2 className="text-lg font-bold mb-2">Left Area</h2>
      </aside>
      <main className="col-span-2 bg-gray-100 p-4">
        {children}
          <Dashboard />
          <ChatForm />
          <Form />
          <FileUpload />
          <SignupPage/>
          <LoginPage />
      </main>
      <aside className="col-span-1 bg-gray-200 p-4">
        <h2 className="text-lg font-bold mb-2">Right Area</h2>
         
      </aside>
      
    </div>

    <footer className="col-span-4 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Footer</h1>
      </footer>
    </div>
  );
};

export default App;