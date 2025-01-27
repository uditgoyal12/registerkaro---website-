import React from "react";

const BlogCard = ({ image, author, date, title, description, tags }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
    </div>
    <div className="p-6">
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
        <span>{author}</span>
        <span>•</span>
        <span>{date}</span>
        {date === "Today" && <span className="text-primary">•</span>}
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-3 group">
        <a href="#" className="flex items-center gap-2 hover:text-primary">
          {title}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">
            →
          </span>
        </a>
      </h3>

      <p className="text-gray-600 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm ${
              tag === "Tax & Audit"
                ? "bg-purple-100 text-purple-600"
                : tag === "Management"
                ? "bg-gray-100 text-gray-600"
                : tag === "Tax"
                ? "bg-blue-100 text-blue-600"
                : tag === "Research"
                ? "bg-indigo-100 text-indigo-600"
                : tag === "Complience"
                ? "bg-orange-100 text-orange-600"
                : tag === "Audit"
                ? "bg-purple-100 text-purple-600"
                : "bg-green-100 text-green-600"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const OurBlogs = () => {
  const blogs = [
    {
      image:
        "/Image 1.png",
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      isToday: true,
      title: "Small business & Startup",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Tax & Audit", "Management"],
    },
    {
      image:
        "/Image 2.png",
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Tax", "Research", "Complience"],
    },
    {
      image:
        "/Image 1.png",
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Audit", "Money Back"],
    },
    {
        image:
          "/Image 4.png",
        author: "Karan Kumar",
        date: "1 Jan 2023",
        title: "Scale-Up Company Offer",
        description:
          "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        tags: ["Audit", "Money Back"],
      },
      {
        image:
          "/Image 5.png",
        author: "Richa Singh",
        date: "1 Jan 2023",
        title: "Scale-Up Company Offer",
        description:
          "JavaScript frameworks make development easy with extensive features and functionalities.",
        tags: ["Tax Return ", "News","Audit"],
      },
      {
        image:
          "/Image 6.png",
        author: "Miss Nora",
        date: "1 Jan 2023",
        title: "Scale-Up Company Offer",
        description:
          "Starting a community doesn't need to be complicated, but how do you get started?",
        tags: ["Private Limited Company", "Customer Success"],
      },
  ];

  return (
    <section className="py-16 px-4">
      <div id="blog" className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2">EXPLORE OUR BLOGS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Accelerate Digital Transformation
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              author={blog.author}
              date={blog.date}
              title={blog.title}
              description={blog.description}
              tags={blog.tags}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Show more blogs
          </button>
        </div>
      </div>
      
    </section>
    
  );
};

export default OurBlogs;
