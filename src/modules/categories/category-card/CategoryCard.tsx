import Image from "next/image";
import { FC } from "react";

export interface CategoryCardProps {
  bgImageUrl: string;
  title: string;
  description: string;
  infoPoints: string[];
  link: string;
  totalCourses: number;
  totalDuration: number;
}

export const CategoryCard: FC<CategoryCardProps> = ({ bgImageUrl, title, description, infoPoints }) => {
  return (
    <div className="rounded-lg w-72 p-4 aspect-[3/4] shadow-md relative overflow-hidden flex flex-col gap-4">
      <Image src={bgImageUrl} alt={title} width={288} height={384}
        className="absolute -z-10 left-0 top-0 object-cover w-72 aspect-[3/4] brightness-[0.3]" />
      <h2 className="text-white text-3xl font-bold">{title}</h2>
      <p className="text-white text-lg">
        {description}
      </p>
    </div>
  )
}