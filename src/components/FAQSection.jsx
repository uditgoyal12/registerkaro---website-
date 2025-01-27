import { useState } from 'react';

const faqs = [
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, our software provides powerful file recovery capabilities for desktop systems. It can recover files deleted from the recycle bin, formatted drives, and even system crashes."
  },
  {
    question: "How long does the recovery process take?",
    answer: "The recovery time depends on the volume of data and drive size. Typically, quick scans take 15-30 minutes, while deep scans might take several hours for thorough results."
  },
  {
    question: "Is my data safe during the recovery process?",
    answer: "Absolutely! Our software uses read-only scanning technology that never writes to your affected drive, ensuring your data remains untouched and safe during the entire recovery process."
  },
  {
    question: "What file types can be recovered?",
    answer: "Our software supports recovery of all common file types including documents, photos, videos, emails, and more. It can recover over 1000+ file formats from various storage devices."
  },
  {
    question: "Do you offer technical support?",
    answer: "Yes, we provide 24/7 technical support through email and live chat. Our expert team is always ready to help you with any questions or issues you might encounter."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 px-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
        onClick={onClick}
      >
        <span className="text-left text-gray-800 font-medium">{question}</span>
        <span className="ml-6 flex-shrink-0">
          <svg
            className={`w-6 h-6 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="p-4 bg-gray-50">
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-medium mb-2 block">FAQ</span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Frequent Ask Questions
          </h2>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 transition-colors duration-200">
            Show more
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;