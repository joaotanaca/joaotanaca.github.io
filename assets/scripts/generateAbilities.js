const levels = {
    beginner: "w-1/4",
    regular: "w-2/4",
    advanced: "w-3/4",
    fluent: "w-full",
};

const abilities = [
    { name: "Javascript", level: "advanced" },
    { name: "HTML", level: "advanced" },
    { name: "CSS", level: "advanced" },
    { name: "Sass", level: "advanced" },
    { name: "Less", level: "advanced" },
    { name: "React", level: "advanced" },
    { name: "React Native", level: "regular" },
    { name: "Vue", level: "regular" },
    { name: "Angular", level: "regular" },
    { name: "NestJS", level: "beginner" },
    { name: "Next.js", level: "advanced" },
];

function Abilities() {
    return abilities.map(({ name, level }) => (
        <div className="grid grid-cols-2 gap-4" key={name}>
            <div className="col-span-1">{name}</div>
            <div className="col-span-1 text-right capitalize">{level}</div>
            <div className="col-span-2">
                <div
                    className="w-full relative h-8 rounded-lg bg-black overflow-hidden"
                    style={{
                        background: "var(--bg-color)",
                        boxShadow: "var(--shadow)",
                    }}
                >
                    <div
                        className={`${levels[level]} h-full absolute inset-0`}
                        style={{ background: "var(--primary)" }}
                    ></div>
                </div>
            </div>
        </div>
    ));
}

const container = document.getElementById("abilities");
const root = ReactDOM.createRoot(container);
root.render(<Abilities />);
