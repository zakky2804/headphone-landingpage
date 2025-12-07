import Image from "next/image";
import { blogsData } from "@/assets/data";
import Animation from "../Animation";

const Blogs = () => {
  return (
    <section className="bg-gray-100 pt-16 pb-10" id="blogs">
      <div className="wrapper ">
        <h2 className="text-3xl font-varela-round font-bold text-center mb-12">
          Blogs
        </h2>

        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 xl:max-w-5xl mx-auto">
          {blogsData.map((blog) => (
            <Animation
              key={blog.id}
              tag="div"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: blog.delay }}
              className="bg-white p-4 rounded-xl shadow"
            >
              <Image
                src={blog.image}
                width={260}
                height={173}
                alt=""
                className="aspect-260/173 rounded-xl mb-2  w-full"
              />
              <h3 className="font-varela-round text-lg font-semibold line-clamp-1">
                {blog.title}
              </h3>
              <p className="line-clamp-3 leading-tight"> {blog.paragraf} </p>
            </Animation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
