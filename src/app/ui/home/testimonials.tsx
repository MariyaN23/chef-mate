import { HomeSectionHeader } from "@/app/ui/home/components/home-section-header";
import Img1 from "../../assets/images/Emily-R.webp";
import Img2 from "../../assets/images/Mark-T.webp";
import Img3 from "../../assets/images/Sarah-J.webp";
import Img4 from "../../assets/images/Rebecca-S.webp";
import Image from "next/image";
import { Quotes } from "@/app/assets/icons/quotes";

const testimonials = [
  {
    id: 1,
    author: "Emily R.",
    photo: Img1,
    review: `Since using AIChefMate, I've rediscovered my love for cooking! The meal plans are easy and delicious. 
    It's been a game-changer for my busy lifestyle.`,
  },
  {
    id: 2,
    author: "Mark T.",
    photo: Img2,
    review: `I never knew healthy eating could be this simple and satisfying. Thanks to AIChefMate, 
    my family enjoys diverse, nutritious meals every day.`,
  },
  {
    id: 3,
    author: "Sarah J.",
    photo: Img3,
    review: `The grocery savings have been incredible! Plus, every meal feels tailored just for me. 
    I'm eating better and feeling great. A big thumbs up!`,
  },
  {
    id: 4,
    author: "Rebecca S.",
    photo: Img4,
    review: `Switching to AIChefMate has been a revelation for my meal prep routine.
     The AI-generated plans are spot-on with my tastes and nutritional needs, making 
     healthy eating effortless and enjoyable.`,
  },
];

export const Testimonials = () => {
  return (
    <section>
      <div className={"container"}>
        <HomeSectionHeader
          headerTitle={"Testimonials"}
          headerDescription={
            "Real stories from satisfied users: see how our platform changes lives"
          }
        />
        <div className={"grid md:grid-cols-2 2xl:grid-cols-4 gap-5"}>
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={
                "group flex flex-col gap-4 justify-between bg-green-100 hover:bg-green-900 hover:text-beige px-12 py-14 rounded-3xl transition-colors"
              }
            >
              <div className={"flex flex-col gap-4"}>
                <p>{item.review}</p>
                <div className={"group-hover:text-lime-400 ml-auto"}>
                  <Quotes />
                </div>
              </div>
              <div className={"flex items-center gap-4"}>
                <Image
                  src={item.photo}
                  className={"rounded-full"}
                  alt={item.author}
                />
                <p>{item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
