// import React, { useState } from 'react';
// import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
// import { motion } from 'framer-motion';

// const geoUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';

// const highlightedCountries = ['IN', 'US', 'BE', 'AE', 'HK'];

// const exportCountries = [
//     { name: 'India', coordinates: [78.9629, 20.5937], note: 'Headquarters – Manufacturing & Grading' },
//     { name: 'USA', coordinates: [-95.7129, 37.0902], note: 'Major importer of polished diamonds' },
//     { name: 'Belgium', coordinates: [4.4699, 50.5039], note: 'Trade via Antwerp Diamond District' },
//     { name: 'UAE', coordinates: [54.0, 24.0], note: 'Import & distribution in GCC' },
//     { name: 'Hong Kong', coordinates: [114.1694, 22.3193], note: 'Asian market hub' }
// ];

// const GlobalPresenceMap = () => {

//     const [tooltip, setTooltip] = useState(null);
//     const isMobile = window.innerWidth < 768;

//     return (
//         <section className="bg-[#0f172a] text-white">
//             <h2 className="text-center text-4xl font-bold">Our Global Presence</h2>

//             {/* <div className="max-w-6xl mx-auto relative"> */}
//             <div className="w-full md:px-8 lg:px-16 relative">
//                 {/* <ComposableMap projectionConfig={{ scale: 150 }} className="w-full h-auto"> */}
//                 <ComposableMap projectionConfig={{ scale: window.innerWidth < 768 ? 200 : 190 }} className="w-full h-auto" >
//                     {/* Parses and renders countries from the geoUrl API */}
//                     <Geographies geography={geoUrl}>
//                         {({ geographies }) =>
//                             geographies.map(geo => (
//                                 <Geography
//                                     // Individual country shapes. Fill color depends on whether country is in highlightedCountries.
//                                     key={geo.rsmKey}
//                                     geography={geo}
//                                     // fill="#1e293b"
//                                     fill={highlightedCountries.includes(geo.properties.ISO_A2) ? "#facc15" : "#1e293b"}
//                                     stroke="#334155"
//                                     style={{
//                                         default: { outline: 'none', pointerEvents: 'none' },
//                                         hover: { fill: '#334155' },
//                                         pressed: { pointerEvents: 'none' }
//                                     }}
//                                 />
//                             ))
//                         }
//                     </Geographies>

//                     {exportCountries.map((country, i) => (
//                         <Marker
//                             key={i}
//                             coordinates={country.coordinates}
//                             onMouseEnter={(e) => {
//                                 if (!isMobile) {
//                                     setTooltip({ ...country, x: e.clientX, y: e.clientY });
//                                 }
//                             }}
//                             onMouseLeave={() => {
//                                 if (!isMobile) {
//                                     setTooltip(null);
//                                 }
//                             }}
//                             onClick={(e) => {
//                                 if (isMobile) {
//                                     const touch = e.nativeEvent?.touches?.[0] || e;
//                                     setTooltip({
//                                         ...country,
//                                         x: touch.clientX,
//                                         y: touch.clientY + window.scrollY, // include scroll
//                                     });
//                                 }
//                             }}
//                         >
//                             <motion.circle
//                                 r={isMobile ? 15 : 6}
//                                 fill="#eab308"
//                                 stroke="#fff"
//                                 strokeWidth={1.5}
//                                 initial={{ scale: 0 }}
//                                 animate={{ scale: 1 }}
//                                 transition={{ duration: 0.3 }}
//                                 style={{ cursor: "pointer" }}
//                             />
//                             {/* <circle r={6} fill="#eab308" stroke="#fff" strokeWidth={1.5} /> */}
//                         </Marker>
//                     ))}
//                 </ComposableMap>

//                 {tooltip && (
//                     <motion.div
//                         className="fixed bg-white text-black p-3 rounded shadow-xl z-50"
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         style={{
//                             left: Math.min(tooltip.x + 15, window.innerWidth - 200),
//                             top: Math.max(tooltip.y - 30, 10)
//                         }}
//                     >
//                         <p className="font-semibold">{tooltip.name}</p>
//                         <p className="text-sm text-gray-600">{tooltip.note}</p>
//                     </motion.div>
//                 )}

//             </div>
//         </section >
//     );
// };

// export default GlobalPresenceMap;

import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';

const geoUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';

const highlightedCountries = ['IN', 'US', 'BE', 'AE', 'HK'];

const exportCountries = [
    { name: 'India', coordinates: [78.9629, 20.5937], note: 'Headquarters – Manufacturing & Grading' },
    { name: 'USA', coordinates: [-95.7129, 37.0902], note: 'Major importer of polished diamonds' },
    { name: 'Belgium', coordinates: [4.4699, 50.5039], note: 'Trade via Antwerp Diamond District' },
    { name: 'UAE', coordinates: [54.0, 24.0], note: 'Import & distribution in GCC' },
    { name: 'Hong Kong', coordinates: [114.1694, 22.3193], note: 'Asian market hub' }
];

const indiaCoords = [78.9629, 20.5937];

const GlobalPresenceMap = () => {
    const [tooltip, setTooltip] = useState(null);
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    return (
        <section className="bg-[#0f172a] text-white py-20">
            <h2 className="text-center text-4xl font-bold mb-10">Our Global Presence</h2>
            <div className="w-full md:px-8 lg:px-16 relative">
                <ComposableMap projectionConfig={{ scale: isMobile ? 200 : 190 }} className="w-full h-auto">
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

                    {exportCountries.map((country, i) => (
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
                                r={isMobile ? 15 : 6}
                                fill="#eab308"
                                stroke="#fff"
                                strokeWidth={1.5}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                                style={{ cursor: "pointer" }}
                            />
                        </Marker>
                    ))}
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
