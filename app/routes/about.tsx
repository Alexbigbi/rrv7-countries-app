export function meta() {
    return [
        {title:"About | RESTExplorer"},
        {name:"description", content:"Learn about RESTExplorer, our goal and mission!"}
    ]
}

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-4xl space-y-4">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center"> About REST<span className="text-indigo-600">Explorer </span> </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                    This website uses the <span className="text-indigo-600 font-bold"> REST Countries API </span>
                    to display comprehensive information about countries from around the world.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    This is part of a tutorial by <span className="text-indigo-600 font-bold"> PedroTech </span>
                    that makes use of ReactJS, React Router v7, TailwindCSS and TypeScript. 
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Explore the many countries of our world in our interactive page and learn their capitals, 
                    population, flags, official names and much more.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Our goal was to learn RRV7, TailwindCSS, ReactJS and TypeScript by building a highly responsive, modern and feature-rich web application.
                </p>
            </div>
        </div>
    )

}
