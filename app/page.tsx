"use client";

import { useState } from "react";
import Header from "./Components/Header";

const topics = [
  {
    title: "Nginx",
    description:
      "Nginx is a web server and reverse proxy that can serve multiple projects on the same server. Our projects are hosted on EC2 and served via Nginx.",
  },
  {
    title: "Docker",
    description:
      "Docker allows containerization of applications. Each app runs in its isolated environment, ensuring consistency across development, testing, and production.",
  },
  {
    title: "CI/CD",
    description:
      "Continuous Integration and Continuous Deployment automate testing and deployment. We use a self-hosted GitHub runner to deploy our projects on EC2 automatically.",
  },
  {
    title: "EC2",
    description:
      "Amazon EC2 provides scalable virtual servers. We deploy our Next.js projects here and serve them via Nginx for production-ready hosting.",
  },
  {
    title: "Elasticsearch",
    description:
      "Elasticsearch is a distributed search and analytics engine. It allows us to perform fast full-text searches, aggregations, and analyze large volumes of data in real-time.",
  },
  {
    title: "Kubernetes",
    description:
      "Kubernetes is a container orchestration platform. It manages scaling, deployment, and operation of containerized applications automatically across clusters of machines.",
  },
  {
    title: "Terraform",
    description:
      "Terraform is an Infrastructure as Code tool. It allows us to define cloud infrastructure using code, ensuring reproducible environments and easier management of resources.",
  },
  {
    title: "PM2",
    description:
      "PM2 is a process manager for Node.js applications. It helps keep applications alive, enables easy monitoring, and supports automatic restart on crashes.",
  },
  {
    title: "SonarQube",
    description:
      "SonarQube is a code quality and security analysis tool. It analyzes code for bugs, vulnerabilities, and code smells, helping maintain high-quality software.",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <Header />

      <div className="pt-24 flex flex-col items-center w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          DevOps & Hosting Overview
        </h1>
        <p className="text-gray-600 max-w-xl text-center mb-10">
          This page demonstrates our setup: projects hosted on EC2, served by
          Nginx, containerized with Docker, and automated via CI/CD pipelines.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {topics.map((topic, idx) => (
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
          ))}
        </div>
      </div>
    </main>
  );
}
