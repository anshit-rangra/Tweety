<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { dislikeBlog, getBlogs, likeBlog } from "../../api/apiCalls";
import { timeAgo } from "../../features/func";

const BlogSection = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [like, setLike] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getBlogs();
      setAllBlogs(data);
      setLike(JSON.parse(localStorage.getItem('liked')) || []);
    };
    getData();
  }, [like]);

  const handleLike = async (index, id) => {
    

    const newState = [...like];
      newState[index] = !newState[index];
    localStorage.setItem("liked",JSON.stringify(newState))

    setLike((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });

    

    try {
      if (!like[index]) {
        await likeBlog(id);

      } else {
        await dislikeBlog(id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="blog-section">
      {allBlogs && allBlogs?.map((elem, index) => {
        const time = timeAgo(elem.time);
        return (
          <div key={elem._id} id="blog" className="tweet">
            <div id="head-tweet">
              <p>{elem.writer}</p>
              <p>{time}</p>
            </div>

            <p>{elem.body}</p>

            <div className="like-div">
              <button
                onClick={() => {
                  handleLike(index, elem._id);
                }}
                className="like"
              >
                <span> {like[index] ? elem.likes : elem.likes } </span>
                {like[index] ? <FaHeart /> : <FaRegHeart /> }
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default BlogSection;
=======
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { dislikeBlog, getBlogs, likeBlog } from "../../api/apiCalls";
import { timeAgo } from "../../features/func";

const BlogSection = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [like, setLike] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getBlogs();
      setAllBlogs(data);
      setLike(JSON.parse(localStorage.getItem('liked')) || []);
    };
    getData();
  }, [like]);

  const handleLike = async (index, id) => {
    

    const newState = [...like];
      newState[index] = !newState[index];
    localStorage.setItem("liked",JSON.stringify(newState))

    setLike((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });

    

    try {
      if (!like[index]) {
        await likeBlog(id);

      } else {
        await dislikeBlog(id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="blog-section">
      {allBlogs && allBlogs?.map((elem, index) => {
        const time = timeAgo(elem.time);
        return (
          <div key={elem._id} id="blog" className="tweet">
            <div id="head-tweet">
              <p>{elem.writer}</p>
              <p>{time}</p>
            </div>

            <p>{elem.body}</p>

            <div className="like-div">
              <button
                onClick={() => {
                  handleLike(index, elem._id);
                }}
                className="like"
              >
                <span> {like[index] ? elem.likes : elem.likes } </span>
                {like[index] ? <FaHeart /> : <FaRegHeart /> }
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default BlogSection;
>>>>>>> b0e80f78adf7f515876dbd9be7827189301a9ab0
