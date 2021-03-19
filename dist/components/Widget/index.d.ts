import { FunctionalComponent } from 'preact';
import './styles.css';
interface WidgetProps {
    title: string;
    color?: string;
}
declare const Widget: FunctionalComponent<WidgetProps>;
export default Widget;
