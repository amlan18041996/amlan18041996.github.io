import React from 'react';
import { Star, ArrowRight, ThumbsUp } from 'lucide-react';
import { useThemeStore, getThemeColors } from '../store/themeStore';

interface Review {
  id: number;
  name: string;
  role: string;
  message: string;
  rating: number;
  date: string;
}

function Guestbook() {
  const [showReviewModal, setShowReviewModal] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const { currentTheme } = useThemeStore();
  const theme = getThemeColors(currentTheme);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      message: "Amlan is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are remarkable.",
      rating: 5,
      date: "March 15, 2024"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Tech Lead",
      message: "Working with Amlan was a great experience. His technical expertise and ability to communicate complex ideas clearly made our project successful.",
      rating: 5,
      date: "March 10, 2024"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UX Designer",
      message: "Amlan has an excellent eye for design and user experience. He transformed our concepts into beautiful, functional interfaces.",
      rating: 4,
      date: "March 5, 2024"
    }
  ];

  const ReviewModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setShowReviewModal(false)}
      ></div>
      <div className={`${theme.background} rounded-xl p-8 w-full max-w-2xl mx-4 relative z-10`}>
        <h2 className="text-2xl font-bold mb-6">Share Your Experience</h2>
        
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Rating</label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((index) => (
              <button
                key={index}
                onMouseEnter={() => setHoverRating(index)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(index)}
                className="p-1"
              >
                <Star
                  size={24}
                  className={`transition-colors ${
                    index <= (hoverRating || rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Role</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={() => setShowReviewModal(false)}
            className="mr-4 px-6 py-2 rounded-lg hover:bg-white/5"
          >
            Cancel
          </button>
          <button
            className={`px-6 py-2 rounded-lg bg-gradient-to-r ${theme.accent} text-white`}
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-16">
      <section className="py-32">
        <div className="container px-4 lg:px-40">
          <div className="flex justify-between items-center mb-16">
            <h1 className="text-4xl font-bold">Guestbook</h1>
            <button
              onClick={() => setShowReviewModal(true)}
              className={`
                flex items-center px-6 py-3 rounded-lg
                bg-gradient-to-r ${theme.accent} text-white
                transform transition-transform hover:scale-105
              `}
            >
              Care to give a review? <ArrowRight size={20} className="ml-2" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className={`group relative ${theme.contentBackground} backdrop-blur-sm p-6 rounded-xl`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{review.name}</h3>
                    <p className="text-gray-400">{review.role}</p>
                  </div>
                  <div className="flex gap-x-0.5">
                    {[...Array(review.rating)].map((_, index) => (
                      <Star key={index} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{review.message}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{review.date}</span>
                  <button className="flex items-center hover:text-blue-400 transition-colors">
                    <ThumbsUp size={16} className="mr-1" /> Helpful
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showReviewModal && <ReviewModal />}
    </div>
  );
}

export default Guestbook;
