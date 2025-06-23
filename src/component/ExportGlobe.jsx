import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

const ExportGlobe = () => {
    const globeEl = useRef();

    const countries = [
        { name: 'India', coordinates: [78.9629, 20.5937], note: 'Headquarters – Manufacturing & Grading' },
        { name: 'USA', coordinates: [-95.7129, 37.0902] },
        { name: 'Belgium (Antwerp)', coordinates: [4.4699, 50.5039] },
        { name: 'UAE (Dubai)', coordinates: [55.2708, 25.2048] },
        { name: 'Hong Kong', coordinates: [114.1694, 22.3193] },
        { name: 'Vietnam', coordinates: [108.2772, 14.0583] },
        { name: 'Thailand', coordinates: [100.9925, 15.8700] },
        { name: 'Japan', coordinates: [138.2529, 36.2048] },
        { name: 'South Korea', coordinates: [127.7669, 35.9078] },
        { name: 'Australia', coordinates: [133.7751, -25.2744] }
    ];
    const origin = countries.find(c => c.name === 'India');

    const exportData = countries
        .filter(c => c.name !== 'India')
        .map(c => ({
            from: { lat: origin.coordinates[1], lng: origin.coordinates[0] },
            to: { lat: c.coordinates[1], lng: c.coordinates[0] },
            name: c.name
        }));

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    useEffect(() => {
        const globe = globeEl.current;
        if (!globe) return;

        const interval = setInterval(() => {
            const controls = globe.controls?.();
            if (controls) {
                controls.enableZoom = false; // disables zoom only
                controls.autoRotate = true;
                controls.autoRotateSpeed = 1;
                controls.minDistance = isMobile ? 400 : 300;
                controls.maxDistance = isMobile ? 400 : 300;


                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);





    return (
        <div className=" relative w-full h-screen overflow-hidden">

            <div className="h-[600px] w-full">
                <Globe
                    ref={globeEl}
                    arcsData={exportData}
                    arcStartLat={d => d.from.lat}
                    arcStartLng={d => d.from.lng}
                    arcEndLat={d => d.to.lat}
                    arcEndLng={d => d.to.lng}
                    arcColor={() => ['#ff9900', '#ff5f5f']}
                    arcDashLength={0.3}
                    arcDashGap={1}
                    arcDashInitialGap={() => Math.random()}
                    arcDashAnimateTime={3000}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    backgroundColor="rgba(0,0,0,0)"
                    labelsData={countries}
                    labelLat={d => d.coordinates[1]}
                    labelLng={d => d.coordinates[0]}
                    labelText={d => d.name}
                    labelSize={() => 1.5}
                    labelDotRadius={() => 0.5}
                    labelColor={() => 'rgba(255,255,255,0.8)'}

                />
            </div>
        </div>
    );
};

export default ExportGlobe;
