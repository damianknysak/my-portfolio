import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  withArrow: boolean;
  withGroupHover: boolean;
  href: string;
  secondaryText?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  withArrow,
  withGroupHover,
  href,
  secondaryText = null,
}) => {
  const [isTargetBlank, setIsTargetBlank] = useState(false);
  useEffect(() => {
    if (href.includes("github")) {
      setIsTargetBlank(true);
    }
  }, []);
  return (
    <div className="h-7 overflow-hidden">
      <div
        className={`translate-y-0 transition-transform ${
          withGroupHover ? "group-hover:-translate-y-8" : "hover:-translate-y-8"
        } space-y-2`}
      >
        <div className="flex items-center space-x-2">
          <a href={href}>{text}</a>
          {withArrow && <ArrowUpRightIcon className="h-5 w-5 text-white" />}
        </div>
        <div className="flex items-center space-x-2">
          <a
            className="text-gray-500"
            target={`${isTargetBlank ? "_blank" : "_self"}`}
            href={href}
          >
            {secondaryText ? secondaryText : text}
          </a>
          {withArrow && <ArrowUpRightIcon className="h-5 w-5 text-gray-500" />}
        </div>
      </div>
    </div>
  );
};
export default AnimatedText;
