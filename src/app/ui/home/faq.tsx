"use client";

import { HomeSectionHeader } from "@/app/ui/home/components/home-section-header";
import { useState } from "react";
import { Accordion, AccordionItem } from "@/app/ui/common/accordion";

const faqData = [
  {
    id: "001",
    title: "How does the AI create personalized meal plans?",
    content: `Our AI system analyzes your dietary preferences, health goals, and budget to curate 
      meal plans that are unique to you. It continually learns from your feedback and 
      choices to improve its suggestions over time.`,
  },
  {
    id: "002",
    title: "How does the grocery delivery service work?",
    content: `Once your meal plan is generated, we compile a shopping list of all needed ingredients. 
      You can then choose to have these items delivered from local partner grocery stores directly 
      to your doorstep. Delivery times are flexible, and you can review and modify your cart before checkout.`,
  },
  {
    id: "003",
    title: "Are there options for budget-conscious users?",
    content: `Yes, we understand that healthy eating should be affordable. Our AI can optimize meal plans 
      based on your weekly budget, prioritizing cost-effective ingredients and seasonal produce. 
      You can also enable "budget mode" to receive recipes with fewer, more economical items.`,
  },
  {
    id: "004",
    title: "How can I access nutrition education and healthy eating tips?",
    content: `All users get access to our library of nutrition articles, video guides, and healthy cooking 
      tips. These resources are personalized based on your goals—whether it's weight management, muscle gain, 
      or simply eating more whole foods. New content is added weekly.`,
  },
  {
    id: "005",
    title: "Can I integrate special dietary requirements into my meal plan?",
    content: `Absolutely! Our platform is designed to accommodate a range of dietary needs,
     including vegetarian, vegan, gluten-free, and keto options. Just specify your requirements 
     in your profile, and your meal plans will be adjusted accordingly.`,
  },
  {
    id: "006",
    title: "How does the platform accommodate allergies and food sensitivities?",
    content: `Safety is our priority. When setting up your profile, you can list any allergies or 
      sensitivities (e.g., nuts, dairy, soy, shellfish). Our AI will permanently exclude these ingredients 
      from all meal recommendations and flag any potential cross-contamination risks from suggested products.`,
  },
  {
    id: "007",
    title: "Can I adjust my meal plans after they've been created?",
    content: `Definitely. You can swap individual meals, adjust portion sizes, or regenerate an entire day 
      or week. The AI learns from every adjustment you make, so future plans will better match your taste. 
      All changes happen in real-time with no extra cost.`,
  },
  {
    id: "008",
    title: "What makes your AI-driven meal planning different from other meal planning services?",
    content: `Unlike static recipe collections or basic filters, our AI adapts dynamically to your evolving 
      preferences, budget, and even cooking skill level. We combine real-time grocery integration, 
      continuous learning from your feedback, and professional nutrition guidelines—all in one seamless 
      experience that becomes smarter every time you use it.`,
  },
];

export const Faq = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpandedId = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section>
      <div className={"container"}>
        <HomeSectionHeader
          headerTitle={"Frequently Asked Questions"}
          headerDescription={"Meal planning made easy: your questions, answered"}
        />
        <Accordion className={"grid 2xl:grid-cols-2 gap-5"}>
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              title={item.title}
              content={item.content}
              isExpanded={item.id === expandedId}
              onToggle={() => toggleExpandedId(item.id)}
            />
          ))}
        </Accordion>
      </div>
    </section>
  );
};
