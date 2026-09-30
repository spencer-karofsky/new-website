"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import MLVisualization from "@/components/MLVisualization";
import RoboticsVisualization from "@/components/RoboticsVisualization";
import SWEVisualization from "@/components/SWEVisualization";

type Focus = "ML" | "SWE" | "Robotics";

const focusContent: Record<Focus, { title: string; description: string }> = {
  ML: {
    title: "Designing ML from first principles.",
    description:
      "I connect mathematical insight to models that solve practical problems."
  },
  SWE: {
    title: "Reliable software, end to end.",
    description:
      "I build dependable software, from RAG pipelines to internal tools, that teams rely on every day."
  },
  Robotics: {
    title: "Physical AI, built from the ground up.",
    description:
      "I connect perception, planning, and control to robots that act reliably in the real world."
  }
};


function RoverScene({ progress }: { progress: number }) {
  const roverX = 12 + progress * 62;
  const roverY = 68 - Math.sin(progress * Math.PI) * 36;
  const rotation = 12 + progress * 38;

  return (
    <div
      className="scene"
      aria-label="Animated rover navigating around obstacles"
    >
      <svg
        className="scene-svg"
        viewBox="0 0 520 260"
        role="img"
        aria-labelledby="scene-title"
      >
        <title id="scene-title">
          A rover follows a curved path around stationary obstacles
        </title>

        <defs>
          <pattern
            id="grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 32 0 L 0 0 0 32" className="grid-line" fill="none" />
          </pattern>

          <filter
            id="soft-shadow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="5"
              floodColor="#6d88a2"
              floodOpacity=".16"
            />
          </filter>
        </defs>

        <rect width="520" height="260" rx="20" fill="url(#grid)" />

        <path
          d="M 62 190 C 110 190, 118 142, 178 142 S 250 204, 300 164 S 355 72, 436 64"
          className="path-line"
        />

        <path
          d="M 62 190 C 110 190, 118 142, 178 142 S 250 204, 300 164 S 355 72, 436 64"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={1 - progress}
          className="path-progress"
        />

        <g className="obstacle" filter="url(#soft-shadow)">
          <rect x="142" y="64" width="44" height="38" rx="7" />
        </g>

        <g className="obstacle" filter="url(#soft-shadow)">
          <rect x="286" y="192" width="58" height="35" rx="7" />
        </g>

        <g className="obstacle" filter="url(#soft-shadow)">
          <rect x="370" y="114" width="66" height="42" rx="7" />
        </g>

        <circle cx="62" cy="190" r="5" className="start-point" />
        <circle cx="436" cy="64" r="8" className="goal-ring" />
        <circle cx="436" cy="64" r="3" className="goal-point" />

        <text x="450" y="68" className="goal-label">
          Goal
        </text>

        <g
          transform={`translate(${roverX * 5.2}, ${roverY * 2.6}) rotate(${rotation})`}
          filter="url(#soft-shadow)"
        >
          <rect
            x="-25"
            y="-17"
            width="50"
            height="34"
            rx="11"
            className="rover-body"
          />
          <rect
            x="-33"
            y="-13"
            width="8"
            height="12"
            rx="3"
            className="rover-wheel"
          />
          <rect
            x="-33"
            y="3"
            width="8"
            height="12"
            rx="3"
            className="rover-wheel"
          />
          <rect
            x="25"
            y="-13"
            width="8"
            height="12"
            rx="3"
            className="rover-wheel"
          />
          <rect
            x="25"
            y="3"
            width="8"
            height="12"
            rx="3"
            className="rover-wheel"
          />
          <circle cx="2" cy="0" r="7" className="rover-camera" />
          <path d="M 5 -7 L 18 -15" className="heading-line" />
        </g>
      </svg>

      <div className="scene-footer">
        <span>PATH FOLLOWING</span>
        <span>{Math.round(progress * 100)}%</span>
      </div>
    </div>
  );
}



export default function Home() {
  const [focus, setFocus] = useState<Focus>("SWE");
  const content = focusContent[focus];

  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    let animationFrame = 0;

    window.history.scrollRestoration = "manual";

    const resetToTop = () => {
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);

      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        root.style.scrollBehavior = previousScrollBehavior;
      });
    };

    resetToTop();
    window.addEventListener("pageshow", resetToTop);

    return () => {
      window.removeEventListener("pageshow", resetToTop);
      cancelAnimationFrame(animationFrame);
      window.history.scrollRestoration = previousRestoration;
      root.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);

  return (
    <main className="page-shell">
      <div className="home-screen">
        <header className="site-header">
          <a href="#" className="wordmark">
            Spencer Karofsky
          </a>

          <nav aria-label="Main navigation" className="main-nav">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="/resume.pdf">Resume</a>
          </nav>
        </header>

        <div className="focus-control">
          <span className="focus-label">Explore by focus</span>

          <div
            className="focus-tabs"
            role="group"
            aria-label="Portfolio focus"
          >
            {(["SWE", "Robotics", "ML"] as Focus[]).map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={focus === item}
                className={focus === item ? "focus-tab active" : "focus-tab"}
                onClick={() => setFocus(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <section className="hero" id="about">
          <div className="hero-copy">
            <p className="eyebrow">
              {focus === "Robotics" ? "FOCUS" : "PORTFOLIO"}
            </p>

            <h1>{content.title}</h1>
            <p className="hero-description">{content.description}</p>

            

            <a className="work-link" href="#work">
              View my work <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="hero-visual">
          {focus === "ML" ? (
            <MLVisualization />
          ) : focus === "SWE" ? (
            <SWEVisualization />
          ) : focus === "Robotics" ? (
            <RoboticsVisualization />
          ) : (
            <div className="placeholder-visual" aria-hidden="true">
              <span className="visual-caption">FEATURED WORK</span>
            </div>
          )}
          </div>
        </section>
      </div>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <a href="#contact">
            All projects <span aria-hidden="true">→</span>
          </a>
        </div>

        {focus === "ML" || focus === "SWE" ? (
          <Link href="/dall-e-2" className="project-placeholder">
            <span className="project-index">01</span>

            <div>
              <h2>DALL·E 2 from scratch</h2>
              <p>
                A DALL·E 2-style text-to-image pipeline built independently in
                about 9,800 lines of code and pre-trained on AWS SageMaker.
              </p>
            </div>

            <span className="project-category">{focus}</span>
          </Link>
        ) : (
          <p className="project-empty">Robotics projects are on the way.</p>
        )}
      </section>

      <footer className="site-footer" id="contact">
        <span>Spencer Karofsky</span>

        <div className="footer-links">
  <a href="mailto:spencerkarofsky@gmail.com">Email ↗</a>
  <a
    href="https://www.linkedin.com/in/spencer-karofsky"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn ↗
  </a>
</div>
      </footer>
    </main>
  );
}