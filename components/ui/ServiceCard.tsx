import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    image: string;
    link: string
  }
  
function ServiceCard({ title, description, icon, image, link }: ServiceCardProps) {
    return (
  
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black/50 dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={image}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={title}
            />
          </CardItem>
          <div className="flex justify-between items-center mt-10">
            <CardItem
              translateZ={20}
              as="span"
              className="px-4 py-2 rounded-xl text-4xl"
            >
              {icon}
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
                <Link href={link}>
                Learn More
                </Link>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    );
}
  
export default ServiceCard;
  