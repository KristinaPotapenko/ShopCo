import { useState } from "react";

import { ChevronDown as ArrowIcon } from "lucide-react";

const faqs = [
  {
    question: "What is the return policy?",
    answer:
      "You can return your product within 30 days of purchase if it is in unused and original condition.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping costs will be calculated at checkout.",
  },
  {
    question: "How can I track my order?",
    answer:
      "After placing your order, you’ll receive a confirmation email with a tracking link.",
  },
  {
    question: "Are there any warranty terms?",
    answer:
      "Yes, all our products come with a 1-year warranty against manufacturing defects.",
  },
];

export const FAQsTab = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4 pt-7 pb-5 lg:pt-8 lg:pb-6">
        <p className="text-xl lg:text-2xl font-semibold">FAQs</p>
        <span className="text-black/60 font-normal">
          {faqs.length} Questions
        </span>
      </div>
      <div className="flex flex-col items-center gap-6 py-8">
        <ul className="grid grid-cols-1 gap-4 w-full">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="p-6 border border-zinc-200 rounded-xl bg-white cursor-pointer 
                 transition-all duration-300 ease-out hover:border-zinc-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium text-black/70">
                  {faq.question}
                </p>
                <ArrowIcon
                  className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ease-in-out 
                     ${openFAQ === index ? "rotate-180 text-zinc-600" : ""}`}
                />
              </div>
              <div
                className={`grid transition-all duration-500 ease-in-out
                      ${
                        openFAQ === index
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
              >
                <div className="overflow-hidden">
                  <p className="mt-4 text-zinc-400 leading-relaxed border-t border-zinc-200 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
