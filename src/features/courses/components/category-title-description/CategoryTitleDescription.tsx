import { FC } from "react";

export const CategoryTitleDescription: FC = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className={'h3' }>
        Explore from our wide range of
        <span className={'text-secondary mx-2'}>Robotics</span>
        projects.
      </h1>

      <p className={'text-content-light text-lg text-center'}>
          From simple robots to advanced autonomous systems, explore our curated collection of robotics projects. Whether you’re learning the basics or pushing the boundaries of innovation, we’ve got the perfect project for you.
      </p>
    </div>
  )
}