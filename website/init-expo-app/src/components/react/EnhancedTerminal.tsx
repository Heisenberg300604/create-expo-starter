import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/ui/terminal";

interface EnhancedTerminalProps {
    command: string;
}

export const EnhancedTerminal = ({ command }: EnhancedTerminalProps) => {
    return (
        <Terminal className="w-full sm:max-w-2xl">
            <TypingAnimation duration={40}>
                {`> ${command}`}
            </TypingAnimation>

            <AnimatedSpan delay={800} className="text-green-500">
                <span>✔ Initializing project...</span>
            </AnimatedSpan>

            <AnimatedSpan delay={1200} className="text-green-500">
                <span className="hidden sm:inline">✔ Setting up Expo Router & NativeWind v4</span>
                <span className="sm:hidden">✔ Expo Router & NativeWind v4</span>
            </AnimatedSpan>

            <AnimatedSpan delay={1600} className="text-green-500">
                <span>✔ Configuring TypeScript & ESLint</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2000} className="text-green-500">
                <span className="hidden sm:inline">✔ Installing dependencies with pnpm</span>
                <span className="sm:hidden">✔ Installing deps with pnpm</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2400} className="text-green-500">
                <span>✔ Setting up Zustand stores</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2800} className="text-green-500">
                <span className="hidden sm:inline">✔ Creating auth screens (Login, Register, Forgot Password)</span>
                <span className="sm:hidden">✔ Creating auth screens</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3200} className="text-green-500">
                <span>✔ Configuring Axios API layer</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3600} className="text-blue-500">
                <span className="hidden sm:inline">ℹ Project structure created:</span>
                <span className="sm:hidden">ℹ Structure created:</span>
                <span className="pl-2 text-muted-foreground hidden sm:inline">app/ components/ hooks/ lib/ stores/</span>
                <span className="pl-2 text-muted-foreground sm:hidden">app/ hooks/ stores/</span>
            </AnimatedSpan>

            <TypingAnimation delay={4000} className="text-green-500 font-semibold">
                Success! Expo app ready.
            </TypingAnimation>

            <TypingAnimation delay={4500} className="text-muted-foreground">
                Run 'npx expo start' to begin.
            </TypingAnimation>
        </Terminal>
    );
};
