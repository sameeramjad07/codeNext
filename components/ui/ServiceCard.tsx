import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
  link: string;
  tags: string[];
  highlights: string[];
}

function ServiceCard({ title, description, icon, image, link, tags, highlights }: ServiceCardProps) {
  return (
    <CardContainer className="inter-var">
      <Link href={link}>
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black/50 dark:border-white/[0.2] border-black/[0.1] w-[450px] h-[500px] rounded-xl p-6 border overflow-hidden">
          <div className="flex flex-col h-full">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white mb-2"
            >
              {title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm dark:text-neutral-300 mb-4 line-clamp-2"
            >
              {description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mb-4 flex-grow">
              <Image
                src={image}
                height={400}
                width={600}
                className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={title}
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="mb-4 flex flex-wrap gap-2"
            >
              {tags?.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-semibold text-white bg-emerald-500 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-sm text-neutral-500 dark:text-neutral-300"
            >
              <ul className="space-y-1">
                {highlights?.slice(0, 3).map((highlight, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-emerald-500">✔</span>
                    <span className="truncate">{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardItem>
          </div>
        </CardBody>
      </Link>
    </CardContainer>
  );
}

export default ServiceCard;
