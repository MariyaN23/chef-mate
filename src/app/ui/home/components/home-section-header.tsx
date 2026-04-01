import { Line } from "@/app/assets/icons/line";

type Props = {
  headerTitle: string;
  headerDescription: string;
};

export const HomeSectionHeader = ({ headerTitle, headerDescription }: Props) => {
  return (
    <header className={"flex flex-col md:flex-row items-center text-center md:text-left gap-7"}>
      <h2>{headerTitle}</h2>
      <div
        aria-hidden="true"
        className={"hidden md:block"}
      >
        <Line />
      </div>
      <p className={"2xl:max-w-98"}>{headerDescription}</p>
    </header>
  );
};
