import { FunctionalComponent } from 'preact';
import './styles.css';
interface InputProps {
    className?: string;
    value?: string;
    onInput?: (event: HTMLElementInputEvent<HTMLInputElement>) => void;
}
declare const Input: FunctionalComponent<InputProps>;
export default Input;
