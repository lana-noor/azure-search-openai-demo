import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "What are the procedures for replacing faulty or damaged communication devices, and what costs are employees responsible for?",
    "For PROMIS, explain the process of submitting standing instructions?",
    "What are the detailed steps involved in the vessel berthing process at Container Terminal 01?"
];
const GPT4V_EXAMPLES: string[] = [
    "What are the procedures for replacing faulty or damaged communication devices, and what costs are employees responsible for?",
    "For PROMIS, explain the process of submitting standing instructions?",
    "What are the detailed steps involved in the vessel berthing process at Container Terminal 01?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
