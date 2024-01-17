type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "rob.netzke@gmail.com",
  title: "Hi, I’m Rob 👋",
  // profile: "/profile.webp",
  description:
    "I'm an *open source contributor* making my pull requests in *Rust*. Currently, I am building a Bitcoin and Lightning wallet in *Swift* taking advantage of the *Breez SDK* and *BDK*. For the next couple months, I am participating in the *Chaincode: Start your career in FOSS* program.",
  socials: [
    {
      label: "Github",
      link: "https://github.com/rustaceanrob",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/robnetzke",
    },
  ],
};

export default presentation;
