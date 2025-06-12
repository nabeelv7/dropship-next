import { Star } from "./Icons";

export default function SectionReviews() {
  const reviews = [
    {
      review:
        "I've never felt this relaxed in my life. The massage chair |melts away all the tension from my lower back| after a long workday. Worth every penny!",
      author: "Emily R.",
      pfp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    },
    {
      review:
        "I suffer from chronic neck and shoulder pain—this chair has been a |game changer|. It feels like a professional massage every single day.",
      author: "Carlos M.",
      pfp: "https://images.unsplash.com/photo-1603415526960-f8f02d6f57a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    },
    {
      review:
        "The comfort is unbelievable. I sit in it for just 20 minutes and feel like I've had |an hour-long spa session|. It's now part of my daily wind-down routine.",
      author: "Sophie L.",
      pfp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    },
    {
      review:
        "As someone who stands all day at work, this chair is a |lifesaver|. It's the best way to relax and recover at night. My legs and back thank me every time.",
      author: "David T.",
      pfp: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    },
    {
      review:
        "I used to spend hundreds on massage appointments. This chair gives me the |same relief, whenever I want|. It's the best investment I've made in years.",
      author: "Monica H.",
      pfp: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    },
    {
      review:
        "The build quality is excellent and the |different massage modes target all the right spots|. It's like having a personal therapist at home.",
      author: "James K.",
      pfp: "https://images.unsplash.com/photo-1603415527129-68e8e2648f0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    },
  ];

  return (
    <section className="max-w-screen-lg mx-auto md:pb-20 pb-10">
      <SectionReviewsIntro />
      <div className="grid md:grid-cols-3 gap-6 px-5">
        {reviews.map((review) => (
          <ReviewCard key={review.author} {...review} />
        ))}
      </div>
    </section>
  );
}

export function SectionReviewsIntro() {
  return (
    <div className="space-y-2 px-5 text-balance text-center md:py-20 py-10">
      <h1 className="uppercase text-primary text-sm tracking-widest">
        Reviews
      </h1>
      <h2 className="md:text-5xl text-4xl font-semibold">
        Join hundreds of happy customers who found relief
      </h2>
    </div>
  );
}

export function ReviewCard({ review, author, pfp }) {
  // Split the review by |...| and alternate highlighting
  const parsedReview = review.split(/(\|[^|]+\|)/g).map((part, idx) => {
    if (part.startsWith("|") && part.endsWith("|")) {
      const text = part.slice(1, -1);
      return (
        <span key={idx} className="font-semibold bg-[gold]">
          {text}
        </span>
      );
    }
    return <span key={idx}>{part}</span>;
  });

  return (
    <div className="bg-base-100 shadow-md rounded-xl p-5 space-y-4 text-left">
      <div className="flex items-center gap-3">
        {/* <img
          src={pfp}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        /> */}
        <div>
          <h3 className="font-semibold">{author}</h3>
          <div className="flex gap-[0.9]">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-[#00b67a]">
                <Star color="white" width="20" height="20" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-base-content/80">{parsedReview}</p>
    </div>
  );
}
