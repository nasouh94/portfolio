import { gsap } from "gsap";


const onEnter = (node) => {

  console.log(node.children[0].firstElementChild,"node first")
  console.log(node.children[0].lastElementChild," node last")

  console.log(node, "node")
  gsap.from(
    [node.children[0].firstElementChild, node.children[0].lastElementChild],
    0.6,
    {
      y: 30,
      delay: 0.6,
      ease: "power3.InOut",
      opacity: 1
    }
  );
};

const onExit = (node) => {
  gsap.to(
    [node.children[0].firstElementChild, node.children[0].lastElementChild],
    0.6,
    {
      y: -30,
      ease: "power3.InOut",
      stagger: {
        amount: 0.6
      }
    }
  );
};

const Animation = {
  onEnter,
  onExit
};

export default Animation;
