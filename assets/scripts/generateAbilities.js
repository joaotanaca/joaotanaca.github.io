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
    { name: "React", level: "advanced" },
    { name: "Vue", level: "regular" },
    { name: "Next.js", level: "advanced" },
    { name: "HTML", level: "advanced" },
    { name: "Angular", level: "regular" },
    { name: "NestJS", level: "beginner" },
    { name: "Sass", level: "advanced" },
    { name: "Less", level: "advanced" },
    { name: "React Native", level: "regular" },
];

function Abilities() {
    const principalSkills = abilities.slice(0, 5);
    const renderPrincipalSkills = principalSkills.map(({ name, level }) => (
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
                        style={{
                            background:
                                "linear-gradient(270deg, var(--secondary), var(--primary))",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    ));

    return <>{renderPrincipalSkills}</>;
}

function MoreAbilities() {
    const secundarySkills = abilities.slice(5);

    const renderSecundarySkills = secundarySkills.map(({ name }) => (
        <li className="list-disc" key={name}>
            {name}
        </li>
    ));
    return <>{renderSecundarySkills}</>;
}

const container = document.getElementById("abilities");
const containerMoreAbilities = document.getElementById("more_abilities");

const root = ReactDOM.createRoot(container);
root.render(<Abilities />);

const more_abilities = ReactDOM.createRoot(containerMoreAbilities);
more_abilities.render(<MoreAbilities />);
