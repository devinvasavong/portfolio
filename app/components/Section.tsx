export default function Section({
    id,
    title,
    children,
    position = "left",
    circlePosition = "top-left",
    circleSize = "w-48 h-48",
    circleOpacity = "opacity-30"
}: {
    id: string;
    title: string;
    children: React.ReactNode;
    position?: "left" | "right";
    circlePosition?: "top-left" | "top-right" | "center-left" | "center-right" | "bottom-left" | "bottom-right";
    circleSize?: string;
    circleOpacity?: string;
}) {
    const positionClasses = {
        "top-left": "top-10 left-20",
        "top-right": "top-10 right-20",
        "center-left": "top-1/2 left-20",
        "center-right": "top-1/2 right-20",
        "bottom-left": "bottom-10 left-20",
        "bottom-right": "bottom-10 right-20"
    };

    return (
        <section id={id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
            {/* Gradient Circle Background */}
            <div className={`absolute ${positionClasses[circlePosition]} ${circleSize} rounded-full ${circleOpacity} -z-10`}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-400 via-transparent to-gray-400 p-px">
                    <div className="w-full h-full rounded-full bg-white/80 backdrop-blur-sm"></div>
                </div>
            </div>

            {/* Section Heading */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tighter mb-8 relative z-10 ${position === "left" ? "text-left" : "text-right"}`}>
                {title}
            </h1>

            {/* Section Content */}
            <div className="relative z-10">
                {children}
            </div>
        </section>
    );
};

