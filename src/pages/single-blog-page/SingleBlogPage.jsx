import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../client.js";

const SingleBlogPage = () => {
  const { blogId } = useParams();
  const [blogItem, setBlogItem] = useState(null);

  useEffect(() => {
    fetchBlogItem();
  }, []);

  const fetchBlogItem = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select()
      .eq('id', blogId);

    if (error) {
      console.error('Error fetching blog item:', error.message);
      return;
    }

    if (data && data.length > 0) {
      setBlogItem(data[0]);
    }
  }

  return (
    <div>
      {blogItem && (
        <div className="container mt-5 flex gap-10">
          <div className="flex flex-col  w-2/3">
            <h2 className="text-2xl font-bold text-left">{blogItem.title}</h2>
            <img className="w-full my-6 rounded-lg" src={blogItem.img_url} alt={blogItem.title} />
            <div className="text-justify" dangerouslySetInnerHTML={{ __html: blogItem.description }} />
          </div>
          <div className={'w-1/3 flex flex-col '}>
            <h3 className={'font-bold'}>Categories</h3>
            <ul className={'mt-5 leading-10 text-gray-500'}>
              <li>Technology Trends and News</li>
              <li>Gaming Insights</li>
              <li>Security and Privacy</li>
              <li>Tech Lifestyle and Productivity</li>
              <li>Product Spotlight</li>
              <li>How-to Guides and Tutorials</li>
              <li>Buying Guides and Tips</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleBlogPage;
