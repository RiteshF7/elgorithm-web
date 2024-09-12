'use client'
import Link from "next/link"

export interface Project {
  id: number;
  image: string;
  name: string;
  description: string;
  projectId: number;
}

interface ProjectProp {
  projects: Project[];
}

export function ProjectPage(categories: ProjectProp): JSX.Element {
  return (
      <section className="grid gap-6 p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:p-6">

        {categories.projects.map((category) => (
            <div key={category.id}
                 className="relative overflow-hidden group shadow-md transition-transform transform hover:scale-105">
              {/* Redirect to /playground with the project ID as a query parameter */}
              <Link href={`/playground/${category.projectId}`} className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View {category.name} category</span>
              </Link>
              <img
                  src={category.image}
                  alt={category.name}
                  width={300}
                  height={300}
                  style={{aspectRatio: "100/100", objectFit: "cover"}}
                  className="object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold md:text-xl">{category.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-3">{category.description}</p>
              </div>
            </div>
        ))}
      </section>
  )
}
