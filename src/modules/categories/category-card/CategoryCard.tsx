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
  totalCourses: number;
  totalDuration: number;
}

export const CategoryCard: FC<CategoryCardProps> = ({ bgImageUrl, title, description, infoPoints, totalDuration, totalCourses }) => {
  return (
    <div className="rounded-lg w-72 p-4 aspect-[3/4] shadow-md relative overflow-hidden flex flex-col gap-4">
      <Image src={bgImageUrl} alt={title} width={288} height={384}
        className="absolute -z-10 left-0 top-0 object-cover w-72 aspect-[3/4] brightness-[0.3]" />
      {/* <div className={clsx(
        'bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-sky-400 via-pink-400 to-violet-500',
        'absolute h-full aspect-square left-0 top-0'
      )} /> */}
      <h2 className="text-white text-3xl font-bold">{title}</h2>
      <p className="text-white text-lg flex-1">
        {description}
      </p>
      <div className="flex-1">
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
    </div >
  )
}