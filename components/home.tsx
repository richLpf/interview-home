// pages/index.js
import Link from 'next/link';
import { useState } from 'react'


const posts = [
    {
      id: "gitbook",
      title: "Gitbook搭建博客",
      date: "2024-06-18",
      description: "快速搭建gitbook，通过简单的markdown书写属于自己的知识库",
      category: "blog",
      imageUrl: "/images/gitbook.png",
    },
    {
      id: "hexo",
      title: "Hexo搭建博客",
      date: "2024-06-18",
      description: "方便快捷的搭建博客",
      category: "blog",
      imageUrl: "/images/hexo.png",
    },
    {
      id: "gmeek",
      title: "Gmeek搭建博客",
      date: "25 Nov, 2023",
      description: "Github搭建博客，免费方便",
      category: "blog",
      imageUrl: "/images/demo1.png",
    },
    {
      id: "wordPress",
      title: "WordPress搭建博客",
      date: "18 Nov, 2023",
      description: "接入数据库，方便文章管理，主题全",
      category: "blog",
      imageUrl: "/images/wordpress.png",
    },
    {
      id: "6",
      title: "Top 5 SMS Marketing Tools You Should Use",
      date: "10 Nov, 2023",
      description: "A review of the best SMS marketing tools available...",
      category: "Tools",
      imageUrl: "/images/demo2.png",
    },
    {
      id: 6,
      title: "SMS Marketing: Tips for Effective Communication",
      date: "02 Nov, 2023",
      description: "How to communicate effectively with SMS marketing...",
      category: "Communication",
      imageUrl: "/images/demo2.png",
    },
    {
      id: 7,
      title: "Understanding SMS Marketing Analytics",
      date: "26 Oct, 2023",
      description: "How to analyze and interpret your SMS marketing data...",
      category: "Analytics",
      imageUrl: "/images/demo2.png",
    },
    {
      id: 8,
      title: "The Future of SMS Marketing",
      date: "20 Oct, 2023",
      description: "Trends and predictions for the future of SMS marketing...",
      category: "Trends",
      imageUrl: "/images/demo2.png",
    },
    {
      id: 9,
      title: "Common Mistakes in SMS Marketing and How to Avoid Them",
      date: "12 Oct, 2023",
      description: "Avoid these common pitfalls in your SMS campaigns...",
      category: "Mistakes",
      imageUrl: "/images/demo2.png",
    },
    {
      id: 10,
      title: "How to Segment Your SMS Marketing Audience",
      date: "05 Oct, 2023",
      description: "Effective audience segmentation for SMS marketing...",
      category: "Audience",
      imageUrl: "/images/demo2.png",
    },
];

const ITEMS_PER_PAGE = 8;

export default function Home() {

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
      if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      }
  };

  const handlePreviousPage = () => {
      if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      }
  };

  const currentPosts = posts.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <main className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentPosts.map((post) => (
          <div key={post.id} className="border rounded-lg p-4 flex flex-col">
            <img src={post.imageUrl} alt={post.title} className="w-full h-auto rounded-lg mb-4 img-style" />
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-500 mb-2">{post.date}</p>
            <p className="mb-4 flex-grow">{post.description}</p>
            <Link className="text-blue-500 hover:underline mt-auto" href={`/blog/${post.id}`}>
              Read More
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="px-3 py-1 border rounded-l-lg hover:bg-gray-200"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 border-t border-b ${currentPage === index + 1 ? 'bg-gray-300' : 'hover:bg-gray-200'}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 border rounded-r-lg hover:bg-gray-200"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </main>
  </div>
  );
}
