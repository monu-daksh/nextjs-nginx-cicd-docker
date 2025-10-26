"use client";

import { useState } from "react";
import Header from "./Components/Header";

const topics = [
  { title: "Nginx", description: "Nginx is a web server and reverse proxy..." },
  { title: "Docker", description: "Docker allows containerization of applications..." },
  { title: "CI/CD", description: "Continuous Integration and Continuous Deployment..." },
  { title: "EC2", description: "Amazon EC2 provides scalable virtual servers..." },
  { title: "Elasticsearch", description: "Elasticsearch is a distributed search and analytics engine..." },
  { title: "Kubernetes", description: "Kubernetes is a container orchestration platform..." },
  { title: "Terraform", description: "Terraform is an Infrastructure as Code tool..." },
  { title: "PM2", description: "PM2 is a process manager for Node.js applications..." },
  { title: "SonarQube", description: "SonarQube is a code quality and security analysis tool..." },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter topics based on search query
  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <Header />

      <div className="pt-24 flex flex-col items-center w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          DevOps & Hosting Overview
        </h1>
        <p className="text-gray-600 max-w-xl text-center mb-6">
          This page demonstrates our setup: projects hosted on EC2, served by
          Nginx, containerized with Docker, and automated via CI/CD pipelines.
        </p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-8 p-3 rounded-lg border border-gray-300 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-xl transition"
                onClick={() =>
                  setActiveIndex(activeIndex === idx ? null : idx)
                }
              >
                <h2 className="text-2xl font-semibold text-gray-800">
                  {topic.title}
                </h2>
                {activeIndex === idx && (
                  <p className="mt-4 text-gray-600">{topic.description}</p>
                )}
                {activeIndex !== idx && (
                  <p className="mt-2 text-gray-400 italic text-sm">
                    Click to learn more...
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No topics found.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
