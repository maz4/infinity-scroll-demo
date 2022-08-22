import { useEffect } from "react";
import "./Pictures.css";

const Pictures = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
      description: "winter",
    },
    {
      src: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      description: "coffee",
    },
    {
      src: "https://images.unsplash.com/photo-1616020453784-a24fa9845b05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
      description: "autumn",
    },
    {
      src: "https://images.unsplash.com/photo-1529321044792-949d1f03e61e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80",
      description: "fire",
    },
    {
      src: "https://images.unsplash.com/photo-1599814516905-6e6ceae82b29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
      description: "sticks",
    },
    {
      src: "https://images.unsplash.com/photo-1443397646383-16272048780e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
      description: "boat",
    },
    {
      src: "https://images.unsplash.com/photo-1501601962015-7f11b4445c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
      description: "lake",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries, observer) => {
        entries.forEach((img) => {
          if (!img.isIntersecting) {
            return;
          }

          const originSrc = img.target.getAttribute("data-originsrc") || "";
          img.target.setAttribute("src", originSrc);

          observer.unobserve(img.target);
        });
      },
      {
        rootMargin: "0px 0px -100px 0px",
      }
    );

    document.querySelectorAll("img").forEach((img) => {
      observer.observe(img);
    });

    return () => {};
  }, []);

  return (
    <div className="pictures-container">
      {images.map((elem, index) => {
        return (
          <img
            data-originsrc={elem.src}
            src={"logo512.png"}
            alt={elem.description}
            key={elem.description + index}
          />
        );
      })}
    </div>
  );
};

export default Pictures;
