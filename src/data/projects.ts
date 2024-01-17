export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Flow Bitcoin Wallet",
    techs: ["React", "Tailwind", "Typescript", "Rust"],
    link: "https://github.com/rustaceanrob/flow2",
  },
  {
    title: "LA Fitness Gym App Design",
    techs: ["React Native", "Tailwind", "Expo", "Firebase"],
    link: "https://github.com/rustaceanrob/lafitness",
  },
  {
    title: "Magma • Bitcoin / Lightning Wallet",
    techs: ["Swift", "SwiftUI", "BDK", "Breez SDK"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
