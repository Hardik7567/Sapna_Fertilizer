export default function SpecificationsTab() {
    const specs = [
        { title: "AppleCare+ Available", description: "AppleCare+ Available" },
        { title: "Battery Type", description: "Lithium Ion" },
        { title: "Bluetooth Version", description: "Bluetooth 5.3" },
        { title: "Brand", description: "Apple" },
        { title: "Camera Resolution", description: "48 Megapixels" },
        { title: "Charging Interface", description: "USB-C" },
        { title: "Compatible Carriers", description: "Unlocked" },
        { title: "Display Size", description: "17.02 cm (6.7 in.)" },
        { title: "Display Type", description: "OLED" },
        { title: "Features", description: "Bluetooth" },
    ];

    return (
        <div className="w-full overflow-hidden">
            <h2 className="px-4 ps-0 py-3 text-xl font-semibold text-[#000] mb-4">
                Specifications
            </h2>
            <div className="border border-[#e7e7e7] text-left rounded-[12px]">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="py-3 px-4 border-r border-[#e7e7e7]">Title</th>
                            <th className="py-3 px-4">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {specs.map((spec, index) => (
                            <tr
                                key={index}
                                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                            >
                                <td className="px-4 py-3 font-medium text-gray-700 border-t border-r border-[#e7e7e7] w-1/3">
                                    {spec.title}
                                </td>
                                <td className="px-4 py-3 text-gray-600 border-t border-gray-200">
                                    {spec.description}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
