import { Line } from "@/app/ui/icons/line";

type Props = {
  headerTitle: string;
  headerDescription: string;
};

export const HomeSectionHeader = ({ headerTitle, headerDescription }: Props) => {
  return (
    <header className={"flex flex-col md:flex-row items-center gap-7 px-16"}>
      <h2>{headerTitle}</h2>
      <div
        aria-hidden="true"
        className={"hidden md:block"}
      >
        <Line />
      </div>
      <p className={"text-center md:text-left 2xl:max-w-98"}>{headerDescription}</p>
    </header>
  );
};
