export default function SectionFAQ() {
  const faqs = [
    {
      question: "What is the price of the massage chair?",
      answer:
        "The price of the massage chair depends on the chair type and the massage mode. For example, a basic massage chair costs $199, while a pro massage chair costs $299. The price also includes taxes and shipping fees.",
    },
    {
      question: "What is the warranty period?",
      answer:
        "The warranty period for the massage chair is 12 months. If you experience any issues with your massage chair within the warranty period, you can contact our customer service team for assistance.",
    },
    {
      question: "How do I return or exchange my massage chair?",
      answer:
        "If you're not satisfied with your massage chair, you can return it within 30 days of purchase. To exchange your massage chair, please contact our customer service team.",
    },
    {
      question: "How do I contact your customer service team?",
      answer:
        "You can contact our customer service team by calling 1-800-123-4567 or emailing us at support@massagechairs.com. We're here to help!",
    },
  ];
  return (
    <section id="faq" className="max-w-screen-lg mx-auto grid md:grid-cols-2 pt-10 pb-20 gap-5 px-5">
      <SectionFAQIntro />
      <div className="flex flex-col gap-2 max-w-xl text-lg mx-auto">
        {faqs.map((faq) => (
          <FAQCard key={faq.question} {...faq} />
        ))}
      </div>
    </section>
  );
}

export function SectionFAQIntro() {
  return (
    <div className="space-y-2 px-5 text-balance max-md:text-center">
      <h1 className="uppercase text-primary text-sm tracking-widest">FAQ</h1>
      <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
    </div>
  );
}

export function FAQCard({ question, answer }) {
  return (
    <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-md">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title font-semibold">{question}</div>
      <div className="collapse-content text-sm">{answer}</div>
    </div>
  );
}
