import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';

const geoUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';

const highlightedCountries = ['IN', 'US', 'BE', 'AE', 'HK', 'VN', 'TH', 'JP', 'KR', 'AU'];
// const highlightedCountries = ['IN', 'US', 'BE', 'AE', 'HK'];

const exportCountries = [
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

// const exportCountries = [
//     { name: 'India', coordinates: [78.9629, 20.5937], note: 'Headquarters – Manufacturing & Grading' },
//     { name: 'USA', coordinates: [-95.7129, 37.0902], note: 'Major importer of polished diamonds' },
//     { name: 'Belgium', coordinates: [4.4699, 50.5039], note: 'Trade via Antwerp Diamond District' },
//     { name: 'UAE', coordinates: [54.0, 24.0], note: 'Import & distribution in GCC' },
//     { name: 'Hong Kong', coordinates: [114.1694, 22.3193], note: 'Asian market hub' }
// ];

const indiaCoords = [78.9629, 20.5937];

const GlobalPresenceMap = () => {
    const [tooltip, setTooltip] = useState(null);
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    return (
        <section className="bg-[#0f172a] text-white py-20">
            <h2 className="text-center text-4xl font-bold mb-10">Our Global Presence</h2>
            <div className="w-full md:px-8 lg:px-16 relative">
                {/* <ComposableMap projectionConfig={{ scale: isMobile ? 200 : 190 }} className="w-full h-auto"> */}
                {/* <ComposableMap
                    projectionConfig={{ scale: isMobile ? 200 : 190 }}
                    viewBox="0 0 1050 500"
                    style={{ width: "100%", height: "auto" }}
                > */}
                <ComposableMap
                    projection="geoNaturalEarth1"
                    projectionConfig={{
                        scale: isMobile ? 175 : 160,
                        center: isMobile ? [25, 0] : [0, 0] // shift map Right on mobile
                    }}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={highlightedCountries.includes(geo.properties.ISO_A2) ? "#facc15" : "#1e293b"}
                                    stroke="#334155"
                                    style={{
                                        default: { outline: 'none', pointerEvents: 'none' },
                                        hover: { fill: '#334155' },
                                        pressed: { pointerEvents: 'none' }
                                    }}
                                />
                            ))
                        }
                    </Geographies>

                    {/* Draw lines from India to each export country */}
                    {exportCountries.map((country, idx) => (
                        country.name !== 'India' && (
                            <Line
                                key={`line-${idx}`}
                                from={indiaCoords}
                                to={country.coordinates}
                                stroke="#38bdf8"
                                strokeWidth={2}
                                strokeLinecap="round"
                            />
                        )
                    ))}
                    {isMobile ?
                        exportCountries.map((country, i) => (
                            <Marker key={i} coordinates={country.coordinates}>
                                <g>
                                    <motion.circle
                                        r={10}
                                        fill="#eab308"
                                        stroke="#fff"
                                        strokeWidth={1.5}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <text
                                        x={isMobile ? 20 : 10}
                                        y={isMobile ? 5 : 4}
                                        fontSize={isMobile ? 10 : 8}
                                        fill="#ffffff"
                                        stroke="#000000"
                                        strokeWidth="0.5"
                                        paintOrder="stroke"
                                        fontWeight="bold"
                                    >
                                        {country.name}
                                    </text>
                                </g>
                            </Marker>

                        ))
                        :
                        exportCountries.map((country, i) => (
                            <Marker
                                key={i}
                                coordinates={country.coordinates}
                                onMouseEnter={(e) => {
                                    if (!isMobile) {
                                        setTooltip({ ...country, x: e.clientX, y: e.clientY });
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (!isMobile) {
                                        setTooltip(null);
                                    }
                                }}
                                onClick={(e) => {
                                    if (isMobile) {
                                        const touch = e.nativeEvent?.touches?.[0] || e;
                                        setTooltip({
                                            ...country,
                                            x: touch.clientX,
                                            y: touch.clientY + window.scrollY,
                                        });
                                    }
                                }}
                            >
                                <motion.circle
                                    r={isMobile ? 10 : 6}
                                    fill="#eab308"
                                    stroke="#fff"
                                    strokeWidth={1.5}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ cursor: "pointer" }}
                                />
                            </Marker>
                        ))
                    }
                    {/* {exportCountries.map((country, i) => (
                        <Marker
                            key={i}
                            coordinates={country.coordinates}
                            onMouseEnter={(e) => {
                                if (!isMobile) {
                                    setTooltip({ ...country, x: e.clientX, y: e.clientY });
                                }
                            }}
                            onMouseLeave={() => {
                                if (!isMobile) {
                                    setTooltip(null);
                                }
                            }}
                            onClick={(e) => {
                                if (isMobile) {
                                    const touch = e.nativeEvent?.touches?.[0] || e;
                                    setTooltip({
                                        ...country,
                                        x: touch.clientX,
                                        y: touch.clientY + window.scrollY,
                                    });
                                }
                            }}
                        >
                            <motion.circle
                                r={isMobile ? 10 : 6}
                                fill="#eab308"
                                stroke="#fff"
                                strokeWidth={1.5}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                                style={{ cursor: "pointer" }}
                            />
                        </Marker>
                    ))} */}
                </ComposableMap>

                <AnimatePresence>
                    {tooltip && (
                        <motion.div
                            className="fixed bg-white text-black p-3 rounded shadow-xl z-50"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            style={{
                                left: Math.min(tooltip.x + 15, window.innerWidth - 200),
                                top: Math.max(tooltip.y - 30, 10)
                            }}
                        >
                            <p className="font-semibold">{tooltip.name}</p>
                            <p className="text-sm text-gray-600">{tooltip.note}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default GlobalPresenceMap;
