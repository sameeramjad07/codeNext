import { cn } from "@/lib/utils";
import { gridItems } from "@/data";

export const LowerBentoGrid = ({
  className,
}: {
  className?: string;
}) => {
  const lowerGridItems = gridItems.filter(item => [3, 4, 5].includes(item.id));

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8",
        className
      )}
    >
      {/* {lowerGridItems.map((item) => (
        <BentoGridItem
          key={item.id}
          {...item}
        />
      ))} */}
      <div className="grid grid-cols-1 gap-4 lg:gap-8 h-full">
        <BentoGridItem {...lowerGridItems.find(item => item.id === 3)!} />
        <BentoGridItem {...lowerGridItems.find(item => item.id === 4)!} />
      </div>
      <BentoGridItem {...lowerGridItems.find(item => item.id === 5)!} className="h-full" />
    </div>
  );
};

const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundImage:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className="h-full">
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={title?.toString()}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={title?.toString()}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
            {title}
          </div>

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

