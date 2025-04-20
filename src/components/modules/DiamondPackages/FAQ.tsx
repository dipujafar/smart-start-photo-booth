"use client"
import SectiontitleSmall from "@/components/shared/SectionTitleSmall"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// FAQ data array with questions and answers
const faqData = [
  {
    question: "Can you set up outside?",
    answer:
      "Yes, we can set up outdoors. We have equipment suitable for various outdoor environments, but please note that certain weather conditions may affect the setup.",
  },
  {
    question: "Do you have insurance?",
    answer: "Yes, we are fully insured with comprehensive liability coverage for all our services and equipment.",
  },
  {
    question: "How much space do we need?",
    answer:
      "The space required depends on your specific needs. Generally, we recommend at least 10x10 feet for a basic setup, but larger setups will require more space.",
  },
  {
    question: "Do you include props?",
    answer:
      "We don't include props. If you want us to shop for props for you, let us know and we'll find props that match your theme!",
  },
  {
    question: "Is printing included?",
    answer:
      "Printing services are available as an add-on to our packages. We offer various printing options including instant prints, photo books, and digital galleries.",
  },
]

export default function FAQ() {
  return (
    <div>
        <SectiontitleSmall title="Frequently Asked Questions" id="faq"></SectiontitleSmall>
    <div className="w-full max-w-6xl mx-auto mt-5">
      <Accordion type="single" collapsible className="w-full space-y-4 text-lg">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className=" first:border-t-0 last:border-b-0 py-2  rounded-none space-y-2"
          >
            <AccordionTrigger className="flex justify-between py-4 px-6 hover:no-underline bg-white">
              <span className="text-base font-medium text-left ">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 pt-0 text-base ">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    </div>
  )
}
