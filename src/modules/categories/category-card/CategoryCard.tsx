import { CheckIcon, Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { Square2StackIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

export interface CategoryCardProps {
  bgImageUrl: string;
  title: string;
  description: string;
  infoPoints: string[];
  link: string;
  level: string;
  totalCourses: number;
  totalDuration: number;
}

export const CategoryCard: FC<CategoryCardProps> = ({ bgImageUrl, title, description, infoPoints, totalDuration, totalCourses }) => {

  const titleParts = title.split(' ');
  return (
    <div className={clsx(
      "rounded-lg w-72 p-4 aspect-[3/4] group",
      'cursor-pointer shadow-md relative overflow-hidden flex flex-col gap-4'
    )}>
      <Image src={bgImageUrl} alt={title} width={288} height={384}
        className="absolute -z-10 left-0 top-0 object-cover w-72 aspect-[3/4] brightness-[0.3] transition-all duration-1000 group-hover:scale-125" />
      <div className={clsx(
        'absolute h-full w-full left-0 top-0'
      )} />
      <h2 className="text-white text-3xl font-bold">
        <span className="text-secondary-light mr-2">{titleParts[0]}</span>
        {titleParts[1]}
      </h2>
      <div className="flex-1 relative">
        <p className={clsx(
          'top-1/2 left-0 absolute -translate-y-1/2',
          'text-white text-lg transition-all duration-500 opacity-100',
          'group-hover:-translate-y-full  group-hover:opacity-0',
        )}>
          {description}
        </p>
        <div className={clsx(
          'top-1/2 left-0 absolute',
          'transition-all duration-500 opacity-0 translate-y-full',
          'group-hover:-translate-y-1/2 group-hover:opacity-100',
        )}>
          {
            infoPoints.map((infoPoint, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <CheckIcon className="text-white w-6 h-6" />
                  <p className="text-white text-sm">{infoPoint}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center gap-2">
          <ClockIcon className="text-white w-6 h-6" />
          <p className="text-white text-sm">
            {totalDuration} hours
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Square3Stack3DIcon className="text-white w-6 h-6" />
          <p className="text-white text-sm">
            {totalCourses} courses
          </p>
        </div>
      </div>
    </div>
  )
}