import React from "react";

function page() {
  return (
    <div className="flex flex-col items-center justify-center text-white pt-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <div className="space-y-6">
          <p className="text-lg">
            Hi, I'm Hayder. A motivated full stack web developer with a track
            record of delivering successful projects from conception to
            execution. Specializing in crafting responsive, performative, and
            efficient solutions, I thrive on the challenges of bridging
            front-end design with back-end development.
          </p>
          <p className="text-lg">
            Driven by a commitment to personal and professional growth, I
            pursued a bootcamp after high school, honing technical skills and
            cultivating soft skills like communication and adaptability.
            Mastering English through self-study and immersion, I recognized its
            importance in the tech industry.
          </p>
          <p className="text-lg">
            Committed to excellence, I actively seek opportunities for learning,
            unafraid to ask questions to improve. With a blend of technical
            expertise, soft skills, and a passion for innovation, I'm poised to
            create impactful digital experiences, pushing the boundaries of web
            development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
