import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <div className="p-10 fixed bottom-0 right-0">
          <button
            className="h-16 w-16  rounded-full bg-blue-500 hover:bg-red-500 text-white font-bold flex items-center justify-center"
            onClick={scrollUp}
          >
            <AiOutlineArrowUp size={"2em"} />
          </button>
        </div>
      )}
    </div>
  );
}

export default ScrollToTopButton;
