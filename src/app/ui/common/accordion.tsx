import { ReactNode } from "react";
import { ArrowUp } from "@/app/assets/icons/arrow-up";

type AccordionProps = {
  className?: string;
  children: ReactNode;
};

type AccordionItemProps = {
  title: string;
  content: string;
  isExpanded: boolean;
  onToggle: () => void;
};

export const Accordion = ({ className, children }: AccordionProps) => {
  return <div className={className}>{children}</div>;
};

export const AccordionItem = ({ title, content, isExpanded, onToggle }: AccordionItemProps) => {
  return (
    <div
      onClick={() => !isExpanded && onToggle()}
      className={`overflow-hidden group relative p-8 md:p-16 bg-green-100 rounded-3xl transition-all 
      ${isExpanded ? "max-h-none" : "max-h-fit cursor-pointer"}`}
    >
      <div
        className={`flex gap-10 transition-all 
        ${isExpanded ? "items-start" : "items-center"}`}
      >
        <span
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          className={`flex-shrink-0 hidden md:flex items-center justify-center border-2 border-green-900 rounded-full transition-all cursor-pointer
            ${isExpanded ? "w-16 h-20 rotate-180 bg-lime-400" : "h-16 w-16 group-hover:bg-lime-400"} `}
        >
          <ArrowUp />
        </span>
        <p
          onClick={onToggle}
          className="font-semibold cursor-pointer flex-1"
        >
          {title}
        </p>
      </div>
      <div
        className={`relative z-10 transition-all duration-300
        ${
          isExpanded
            ? "opacity-100 mt-6 h-auto pointer-events-auto"
            : "opacity-0 h-0 overflow-hidden pointer-events-none"
        }`}
      >
        <div className="md:pl-26">{content}</div>
      </div>
    </div>
  );
};
