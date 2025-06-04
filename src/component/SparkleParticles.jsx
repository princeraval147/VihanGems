import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function SparkleParticles() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="sparkles"
            init={particlesInit}
            className="absolute inset-0 z-0"
            options={{
                fullScreen: false,
                background: { color: { value: "transparent" } },
                particles: {
                    number: {
                        value: 120,
                        density: { enable: true, area: 1000 },
                    },
                    color: { value: ["#ffffff", "#a78bfa", "#60a5fa"] }, // white, purple, blue
                    shape: { type: "circle" },
                    opacity: {
                        value: 0.7,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 0.3,
                            opacity_min: 0.2,
                            sync: false,
                        },
                    },
                    size: {
                        value: { min: 0.8, max: 2.5 },
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.5,
                            sync: false,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: { default: "out" },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}
