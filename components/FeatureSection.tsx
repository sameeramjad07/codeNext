import { cn } from "@/lib/utils";
import {
  IconUsers,
  IconHeadset,
  IconCpu,
  IconEye,
  IconTarget,
  IconSettings,
} from "@tabler/icons-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Expert Team",
      description:
        "Our team consists of industry professionals with years of experience to guide your project to success.",
      icon: <IconUsers /> // Replace with an appropriate icon.
    },
    {
      title: "Dedicated Support",
      description:
        "Your project is our priority. Enjoy round-the-clock assistance from our dedicated team.",
      icon: <IconHeadset /> // Replace with an appropriate icon.
    },
    {
      title: "Customized Solutions",
      description:
        "We don’t believe in one-size-fits-all. Get solutions tailored to your business needs.",
      icon: <IconSettings /> // Replace with an appropriate icon.
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "Stay ahead of the curve with the latest tools and technologies implemented seamlessly.",
      icon: <IconCpu /> // Replace with an appropriate icon.
    },
    {
      title: "Transparent Processes",
      description:
        "We keep you in the loop at every step with clear communication and real-time progress updates.",
      icon: <IconEye /> // Replace with an appropriate icon.
    },
    {
      title: "Result-Driven Approach",
      description:
        "Our primary goal? Delivering measurable outcomes that exceed expectations.",
      icon: <IconTarget /> // Replace with an appropriate icon.
    },
  ];
  return (
    <section id="services" className="py-20">
      <h1 className="heading">
        Why Choose
        <span className="text-purple"> Our Agency </span>?
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
      <div
        className={cn(
          "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
          (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
          index < 3 && "lg:border-b dark:border-neutral-800"
        )}
      >
        {index < 3 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
        )}
        {index >= 3 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
        )}
        <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
          {icon}
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
            {title}
          </span>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
          {description}
        </p>
      </div>
  );
};
