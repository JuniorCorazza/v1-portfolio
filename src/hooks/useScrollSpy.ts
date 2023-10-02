import { useEffect, useState } from "react";

export function useScrollSpy(targetIds: string[], offset = 0) {
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      for (let i = 0; i < targetIds.length; i++) {
        const targetId = targetIds[i];
        const targetElement = document.getElementById(targetId);

        if (!targetElement) continue;

        const rect = targetElement.getBoundingClientRect();

        if (rect.top <= 0 && rect.bottom >= 0) {
          setCurrentSection(targetId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetIds, offset]);

  return currentSection;
}
