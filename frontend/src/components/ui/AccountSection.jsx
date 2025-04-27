<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Cookies from "js-cookie";
import { deleteBlog, getMyblogs, uploadBlog, user } from "../../api/apiCalls";
import { timeAgo } from "../../features/func";
import { toast } from "react-toastify";

const AccountSection = () => {
  const [client, setClient] = useState("");
  const [myblogs, setMyblogs] = useState([])

  const [blog, setBlog] = useState("");

  useEffect(() => {
    const client = async () => {
      const userData = await user();
      const myBlogs = await getMyblogs()
      setClient(userData);
      setMyblogs(myBlogs)

    };
    client();
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    window.location.reload();
    toast("User LogOut sucessfully !")
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (blog) {
      try {
        const response = await uploadBlog({ body: blog });
        setMyblogs([...myblogs,{_id: Date.now(), writer:"You", time:Date.now().toString(), body:blog}])
        setBlog("");
        toast.success(response.message,{
          position: "top-right",
          autoClose: 3000, // Close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };



  const handleDelete = async(_id) => {
    try {
      const response = await deleteBlog(_id);

      const mylatestBlogs = myblogs.filter((elem) => {
        return elem._id !== _id
      })

      setMyblogs(mylatestBlogs)

      toast.success(response.message,{
        position: "top-right",
        autoClose: 3000, // Close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      })
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <section className="account-section ">
      <h2>Account</h2>
      <h3>
        Username : <span> {client.username}</span>
      </h3>
      <h3>
        Mobile no : <span> {client.mobile}</span>
      </h3>
      <div className="logout-btn-div">
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="textarea">
        <textarea
          name="blog"
          value={blog}
          onChange={(e) => setBlog(e.target.value)}
          placeholder="What are you thinking ? Let's share it with others."
          id="blog-field"
        ></textarea>
      </div>

      <div>
        <button id="upload-btn" onClick={handleUpload} className="logout-btn">
          Upload
        </button>
      </div>

      <div className="my-blogs">
        {
        myblogs ?
          myblogs?.map((elem) => {
            const time = timeAgo(elem.time)
            return (
              <div key={elem._id.toString()} className="tweet">
                <div id="head-tweet">
                  <p>{elem.writer}</p>
                  <p>{time}</p>
                </div>

                <p className="my-tweet-body">
                  {elem.body}
                </p>

                <div className="delete-button-div">
                  <button onClick={() => {handleDelete(elem._id.toString())}} className="delete-btn">
                    {" "}
                    <RiDeleteBin6Fill />{" "}
                  </button>
                </div>
              </div>
            );
          })
        :
        <h2>You have no blogs</h2>
        }
      </div>
    </section>
  );
};

export default AccountSection;
=======
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Cookies from "js-cookie";
import { deleteBlog, getMyblogs, uploadBlog, user } from "../../api/apiCalls";
import { timeAgo } from "../../features/func";
import { toast } from "react-toastify";

const AccountSection = () => {
  const [client, setClient] = useState("");
  const [myblogs, setMyblogs] = useState([])

  const [blog, setBlog] = useState("");

  useEffect(() => {
    const client = async () => {
      const userData = await user();
      const myBlogs = await getMyblogs()
      setClient(userData);
      setMyblogs(myBlogs)

    };
    client();
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    window.location.reload();
    toast("User LogOut sucessfully !")
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (blog) {
      try {
        const response = await uploadBlog({ body: blog });
        setMyblogs([...myblogs,{_id: Date.now(), writer:"You", time:Date.now().toString(), body:blog}])
        setBlog("");
        toast.success(response.message,{
          position: "top-right",
          autoClose: 3000, // Close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };



  const handleDelete = async(_id) => {
    try {
      const response = await deleteBlog(_id);

      const mylatestBlogs = myblogs.filter((elem) => {
        return elem._id !== _id
      })

      setMyblogs(mylatestBlogs)

      toast.success(response.message,{
        position: "top-right",
        autoClose: 3000, // Close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      })
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <section className="account-section ">
      <h2>Account</h2>
      <h3>
        Username : <span> {client.username}</span>
      </h3>
      <h3>
        Mobile no : <span> {client.mobile}</span>
      </h3>
      <div className="logout-btn-div">
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="textarea">
        <textarea
          name="blog"
          value={blog}
          onChange={(e) => setBlog(e.target.value)}
          placeholder="What are you thinking ? Let's share it with others."
          id="blog-field"
        ></textarea>
      </div>

      <div>
        <button id="upload-btn" onClick={handleUpload} className="logout-btn">
          Upload
        </button>
      </div>

      <div className="my-blogs">
        {
        myblogs ?
          myblogs?.map((elem) => {
            const time = timeAgo(elem.time)
            return (
              <div key={elem._id.toString()} className="tweet">
                <div id="head-tweet">
                  <p>{elem.writer}</p>
                  <p>{time}</p>
                </div>

                <p className="my-tweet-body">
                  {elem.body}
                </p>

                <div className="delete-button-div">
                  <button onClick={() => {handleDelete(elem._id.toString())}} className="delete-btn">
                    {" "}
                    <RiDeleteBin6Fill />{" "}
                  </button>
                </div>
              </div>
            );
          })
        :
        <h2>You have no blogs</h2>
        }
      </div>
    </section>
  );
};

export default AccountSection;
>>>>>>> b0e80f78adf7f515876dbd9be7827189301a9ab0
