import React, { useEffect } from "react";
import Header from "../components/layouts/Header";
import AccountSection from "../components/ui/AccountSection";
import BlogSection from "../components/ui/BlogSection";
import Footer from "../components/layouts/Footer";
import { toast } from "react-toastify";

const Home = () => {
  useEffect(() => {
    toast.success("Welcome to tweety !",  {
      position: "top-right",
      autoClose: 3000, // Close after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    })
  }, [])
  
  return (
    <>
      <Header />

      <main className="home ">
        <AccountSection />
        <BlogSection />
      </main>

      <Footer />
    </>
  );
};

export default Home;
