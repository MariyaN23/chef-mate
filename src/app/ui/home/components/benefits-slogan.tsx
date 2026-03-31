type Props = {
  sloganTitle: string;
  sloganDescription: string;
  className?: string;
  titleClass?: string;
  descriptionClass?: string;
};

export const BenefitsSlogan = ({
  sloganTitle,
  sloganDescription,
  className,
  titleClass,
  descriptionClass,
}: Props) => {
  return (
    <div
      className={`flex flex-col items-center justify-center h-fit md:h-[360px] 2xl:h-full rounded-full gap-4 2xl:gap-10 p-10 2xl:py-32 2xl:px-12 ${className}`}
    >
      <h3 className={`text-center 2xl:text-left ${titleClass}`}>{sloganTitle}</h3>
      <p className={`text-center 2xl:text-left ${descriptionClass}`}>{sloganDescription}</p>
    </div>
  );
};
