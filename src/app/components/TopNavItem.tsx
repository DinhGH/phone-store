import React from "react";

interface Props {
  href: string;
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function TopNavItem({ href, label, Icon }: Props) {
  return (
    <div
      className="
        px-2
        border-l-2 border-gray-300
      "
    >
      <a
        href={href}
        className="
          flex
          text-white text-xs whitespace-nowrap
          items-center gap-1 hover:scale-95
        "
      >
        <Icon
          className="
            w-3 h-3
          "
        />
        <span>{label}</span>
      </a>
    </div>
  );
}
