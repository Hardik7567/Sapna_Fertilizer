import React from 'react'

export default function HowToUseTab() {
    return (
        <div className="w-full flex flex-col items-center space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 text-center">
                How to Use
            </h2>
            <div className="w-full max-w-3xl rounded-xl border-1 border-[#e7e7e7] overflow-hidden shadow-md">
                <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 ratio */}
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/VIDEO_ID"
                        title="How to Use"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
