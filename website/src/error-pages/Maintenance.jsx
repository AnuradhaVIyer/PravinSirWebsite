import React, { useEffect } from "react";

export default function Maintenance() {

    useEffect(() => {
        // Hide navbar and footer
        const navbar = document.querySelector("nav");
        const footer = document.querySelector("footer");
        if (navbar) navbar.style.display = "none";
        if (footer) footer.style.display = "none";

        // Restore navbar and footer when leaving page
        return () => {
            if (navbar) navbar.style.display = "";
            if (footer) footer.style.display = "";
        };
    }, []);


    return (
        <div className="w-screen min-h-screen flex items-center justify-center bg-[#0d1117] p-5 text-center overflow-x-hidden overflow-y-auto">
            <div className="max-w-md sm:max-w-lg animate-fadeUp px-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-[#58a6ff] mb-4 break-words">Maintenance in progress</h1>
                <div className="text-base sm:text-lg text-[#f0f6fc] opacity-90 mb-6 break-words leading-relaxed">

                    <h1>We'll Be Back Soon</h1>
                    <p>We're performing scheduled updates to improve your experience.</p>
                    <p>Please check back in a little while.</p>
                </div>
                <p className="text-[#58a6ff] font-bold hover:underline text-lg sm:text-xl">
                    Email: <a href="mailto:support@pravinmishra.com" className="underline">support@pravinmishra.com</a>
                </p>

            </div>
            <style>{`
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(25px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeUp {
    animation: fadeUp 1s ease;
  }
`}</style>
        </div>
    );
}