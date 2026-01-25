import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

interface TerminalCommandProps {
    command: string;
}

export const TerminalCommand = ({ command }: TerminalCommandProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex items-center gap-3 bg-terminal text-terminal-foreground px-4 py-3 rounded-md font-mono text-sm group">
            <Terminal className="w-4 h-4 text-muted-foreground shrink-0" />
            <code className="flex-1">
                <span className="text-muted-foreground">$</span>{" "}
                <span>{command}</span>
                <span className="animate-blink">▋</span>
            </code>
            <button
                onClick={handleCopy}
                className="p-1.5 rounded hover:bg-white/10 transition-colors"
                aria-label="Copy command"
            >
                {copied ? (
                    <Check className="w-4 h-4 text-success" />
                ) : (
                    <Copy className="w-4 h-4 text-muted-foreground group-hover:text-terminal-foreground transition-colors" />
                )}
            </button>
        </div>
    );
};
