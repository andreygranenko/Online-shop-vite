import { motion } from "framer-motion";
import { supabase } from "../../../client.js";
import { useEffect, useState } from "react";
import Timer from '../../../assets/icons/timer.svg';
import Calendar from '../../../assets/icons/calendar.svg';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [videos, setVideos] = useState([]);
  const [currentBlogPage, setCurrentBlogPage] = useState(1);
  const [currentVideoPage, setCurrentVideoPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  const fetchBlogs = async (page) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage - 1;

    const { data } = await supabase
      .from('blog_posts')
      .select()
      .range(start, end);

    setBlogs(data);
  };

  const fetchVideos = async (page) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage - 1;

    const { data } = await supabase
      .from('blog_videos')
      .select()
      .range(start, end);

    setVideos(data);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  useEffect(() => {
    fetchBlogs(currentBlogPage);
  }, [currentBlogPage]);

  useEffect(() => {
    fetchVideos(currentVideoPage);
  }, [currentVideoPage]);

  return (
    <>
      <motion.div
        className={'container'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h2 className={'text-xl font-bold my-3'}>Latest posts</h2>
        <div className="my-8 grid grid-cols-3 gap-4">
          <div style={{ height: '1000px' }} className="col-span-2 grid grid-cols-2 gap-4">
            {blogs && blogs.map(({ id, title, date_posted, min_read, img_url, description }) => {
              return (
                <div key={id} className="card card-compact w-80 bg-base-100 shadow-xl">
                  <figure>
                    <img src={img_url} alt={title} />
                  </figure>
                  <div className="card-body">
                    <div className="flex items-center justify-between card_min text-right">
                      <div className={'flex'}>
                        <img className={'mr-1'} src={Calendar} alt="calendar" />
                        {formatDate(date_posted)}
                      </div>
                      <div className={'flex'}>
                        <img className={'mr-1'} src={Timer} alt="timer" />{min_read} min to read
                      </div>
                    </div>
                    <h2 className="card-title">{title.length > 36 ? title.slice(0, 36) + '...' : title}</h2>
                    <p>{description.length > 59 ? description.slice(0, 60) + '...' : description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Read More</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <h2 className={'text-xl font-bold'}>Videos</h2>
            {videos && videos.map(({ id, title, img_url, url, alt }) => {
              return (
                <a key={id} href={url}>
                  <div className="my-8 card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={img_url} alt={alt} /></figure>
                    <div className="px-5 flex justify-center ali z-10 h-1/2 mt-auto items-end mb-5 text-center ">
                      <h2 className="text-center text-white text-lg font-bold">{title}</h2>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <div className="pagination flex justify-center my-4">
          <button onClick={() => setCurrentBlogPage(currentBlogPage - 1)} disabled={currentBlogPage === 1} className="btn btn-primary mx-2">
            Previous
          </button>
          <span className="mx-2">Page {currentBlogPage}</span>
          <button onClick={() => setCurrentBlogPage(currentBlogPage + 1)} className="btn btn-primary mx-2">
            Next
          </button>
        </div>
        <div className="pagination flex justify-center my-4">
          <button onClick={() => setCurrentVideoPage(currentVideoPage - 1)} disabled={currentVideoPage === 1} className="btn btn-primary mx-2">
            Previous
          </button>
          <span className="mx-2">Page {currentVideoPage}</span>
          <button onClick={() => setCurrentVideoPage(currentVideoPage + 1)} className="btn btn-primary mx-2">
            Next
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default BlogPage;
