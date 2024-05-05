import { FC } from "react";

export const CategoryTitleDescription: FC = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className={'h1'}>
        Explore from our
        <span className={'text-secondary mx-2'}>3 Categories</span>
        of Courses
      </h1>

      <p className={'text-content-light text-lg text-center'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quod officia placeat, culpa adipisci molestiae a? Ratione laborum, sed qui tempore ab in dolores eveniet magnam nulla modi, quos incidunt?
      </p>
    </div>
  )
}