import { motion } from "framer-motion";

export const PhoneMockup = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-[280px]"
        >
            {/* Phone frame */}
            <div className="relative bg-foreground rounded-[2.5rem] p-2 shadow-2xl">
                {/* Screen */}
                <div className="bg-background rounded-[2rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-6 py-2 text-xs">
                        <span className="font-medium">9:41</span>
                        <div className="flex items-center gap-1">
                            <div className="flex gap-0.5">
                                <div className="w-1 h-1 bg-foreground rounded-full" />
                                <div className="w-1 h-1 bg-foreground rounded-full" />
                                <div className="w-1 h-1 bg-foreground rounded-full" />
                                <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                            </div>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 3C7.46 3 3.34 5.78 2.07 9.63C2.02 9.79 2 9.96 2 10.13V11C2 12.1 2.9 13 4 13H5C5.55 13 6 12.55 6 12V10C6 9.45 5.55 9 5 9H4.09C5.28 6.36 8.42 4.5 12 4.5C15.58 4.5 18.72 6.36 19.91 9H19C18.45 9 18 9.45 18 10V12C18 12.55 18.45 13 19 13H20C21.1 13 22 12.1 22 11V10.13C22 9.96 21.98 9.79 21.93 9.63C20.66 5.78 16.54 3 12 3Z" />
                            </svg>
                            <div className="w-6 h-2.5 bg-foreground rounded-sm" />
                        </div>
                    </div>

                    {/* App content */}
                    <div className="px-4 pb-6 pt-2">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <p className="text-xs text-muted-foreground">Welcome back</p>
                                <p className="font-semibold text-sm">My App</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                                <span className="text-xs font-medium">JD</span>
                            </div>
                        </div>

                        {/* Card */}
                        <div className="bg-secondary rounded-xl p-4 mb-4">
                            <p className="text-xs text-muted-foreground mb-1">Dashboard</p>
                            <p className="text-2xl font-bold">Ready to build</p>
                            <p className="text-xs text-muted-foreground mt-1">NativeWind configured</p>
                        </div>

                        {/* Quick actions */}
                        <div className="grid grid-cols-3 gap-2 mb-4">
                            {["Profile", "Settings", "Help"].map((item) => (
                                <div
                                    key={item}
                                    className="bg-secondary rounded-lg p-3 text-center"
                                >
                                    <div className="w-6 h-6 mx-auto mb-1 rounded-md bg-muted" />
                                    <p className="text-[10px] text-muted-foreground">{item}</p>
                                </div>
                            ))}
                        </div>

                        {/* List items */}
                        <div className="space-y-2">
                            {[1, 2].map((i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 p-3 bg-secondary rounded-lg"
                                >
                                    <div className="w-8 h-8 rounded-md bg-muted shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <div className="h-2 bg-muted rounded w-2/3 mb-1" />
                                        <div className="h-1.5 bg-muted/60 rounded w-1/2" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom navigation */}
                    <div className="flex items-center justify-around py-4 border-t border-border">
                        {["Home", "Search", "Profile"].map((item, i) => (
                            <div key={item} className="flex flex-col items-center gap-1">
                                <div className={`w-5 h-5 rounded ${i === 0 ? "bg-foreground" : "bg-muted"}`} />
                                <span className={`text-[10px] ${i === 0 ? "text-foreground" : "text-muted-foreground"}`}>
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Reflection */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-foreground/5 blur-2xl rounded-full" />
        </motion.div>
    );
};
