import type { CSSProperties } from "react";

type BrandShapeProps = {
    className?: string;
    color?: string;
    opacity?: number;
    rotate?: string;
    size?: string;
    type: "circle" | "square" | "diamond" | "triangle";
};

export default function BrandShape({ className = "", color = "rgba(21, 21, 21, 0.16)", opacity = 1, rotate = "0deg", size = "9rem", type }: BrandShapeProps) {
    const style = {
        "--shape-color": color,
        "--shape-opacity": opacity,
        "--shape-rotate": rotate,
        "--shape-size": size,
    } as CSSProperties;

    return <span aria-hidden="true" className={`brand-shape brand-shape-${type} ${className}`} style={style} />;
}
