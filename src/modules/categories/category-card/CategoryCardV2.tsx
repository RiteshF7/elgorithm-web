import { Button } from "@/modules/common/components/button/Button";
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";


export interface CategoryCardProps {
  bgImageUrl: string;
  title: string;
  description: string;
  level: string;
  link: string;
  totalCourses: number;
  totalDuration: number;
}


export const CategoryCardV2: FC<CategoryCardProps> = ({ bgImageUrl, title, description, level, link, totalDuration, totalCourses }) => {
  return (
    <div className={clsx(
      'flex flex-col p-6 rounded-2xl border border-solid border-gray'
    )}>
      <div className="flex flex-col mb-4 w-80">
        <div className="flex justify-between">
          <div className='flex flex-col gap-2'>
            <Image src={bgImageUrl} width={104} height={104} alt={title} />
            <p className="text-xs text-content-light">{totalCourses} Course | {totalDuration} hrs</p>
          </div>
          <p className="text-primary font-bold text-md">Level {level}</p>
        </div>
        <h3 className="font-bold text-2xl">
          {title}
        </h3>
        <p className="text-base">
          {description}
        </p>
      </div>
      <Link href={link}>
        <Button uiType="secondary" className="rounded-full w-full h-12 bg-black">
          <span className="text-content-contrast text-lg">
            View Path
          </span>
        </Button>
      </Link>
    </div>
  )
}