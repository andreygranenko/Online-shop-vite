import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../../client.js";

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
        <div className="container mt-5">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-center">{blogItem.title}</h2>
            <img className="w-2/5" src={blogItem.img_url} alt={blogItem.title} />
            <div className="text-justify" dangerouslySetInnerHTML={{ __html: blogItem.description }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleBlogPage;
