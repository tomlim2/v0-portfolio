import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, GithubIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectDetail() {
  return (
    <div className="bg-white text-black min-h-screen">
      <header className="flex justify-between items-center p-6 border-b">
        <Link href="/" passHref>
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">JD</h1>
      </header>
      
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <section className="space-y-6">
          <Image
            src="/placeholder.svg"
            alt="Project Hero Image"
            width={1200}
            height={600}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Project Name</h2>
            <p className="text-xl text-gray-600">A comprehensive web application for managing personal finances and investments.</p>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-semibold">Project Overview</h3>
          <p className="text-gray-600">
            This project is a full-stack web application designed to help users manage their personal finances and investments. 
            It provides real-time data visualization, budget tracking, and investment portfolio management. The application 
            integrates with various financial APIs to provide up-to-date information and insights.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-semibold">Technologies Used</h3>
          <div className="flex flex-wrap gap-4">
            {["React", "Node.js", "Express", "MongoDB", "D3.js", "AWS"].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-black text-white rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-semibold">Key Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Real-time dashboard with customizable widgets</li>
            <li>Expense tracking and categorization</li>
            <li>Investment portfolio management and performance tracking</li>
            <li>Goal setting and progress monitoring</li>
            <li>Secure user authentication and data encryption</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-semibold">Project Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="bg-gray-100">
                <CardContent className="p-4">
                  <div className="h-40 bg-gray-300" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-semibold">Project Links</h3>
          <div className="flex space-x-4">
            <Button className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <GithubIcon className="h-4 w-4" />
              View Source
            </Button>
          </div>
        </section>
      </main>

      <footer className="text-center py-6 text-gray-600 border-t">
        © 2024 Jane Doe. All rights reserved.
      </footer>
    </div>
  )
}