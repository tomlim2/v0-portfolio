import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GithubIcon, LinkedinIcon, MailIcon, MenuIcon } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="bg-white text-black min-h-screen">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">JD</h1>
        <Button variant="ghost" size="icon">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-24">
        <section className="space-y-4">
          <h2 className="text-6xl font-bold">Jane Doe</h2>
          <p className="text-xl text-gray-600">
            Full-Stack Developer & UI/UX Designer
          </p>
          <Button className="mt-4">View Projects</Button>
        </section>
        <section className="space-y-8">
          <h3 className="text-3xl font-semibold">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="bg-gray-100">
                <CardContent className="p-6 space-y-4">
                  <div className="h-48 bg-gray-300" />
                  <h4 className="text-xl font-semibold">Project {i}</h4>
                  <p className="text-gray-600">
                    A brief description of the project and its key features.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="space-y-8">
          <h3 className="text-3xl font-semibold">Skills</h3>
          <div className="flex flex-wrap gap-4">
            {[
              "React",
              "Node.js",
              "TypeScript",
              "UI/UX Design",
              "GraphQL",
              "AWS",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-black text-white rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
        <section className="space-y-8">
          <h3 className="text-3xl font-semibold">Get in Touch</h3>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon">
              <MailIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <LinkedinIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <GithubIcon className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <footer className="text-center py-6 text-gray-600">
        © 2024 Jane Doe. All rights reserved.
      </footer>
    </div>
  );
}
