import { FunctionalComponent, h } from 'preact';
import Example from '../Example';

import './styles.css';

interface WidgetProps {
    title: string;
    color?: string;
}

const Widget: FunctionalComponent<WidgetProps> = ({ title, color }) => {
    return (
        <div class="Widget">
            <h1 style={{ color }}>{title}</h1>
            <Foo firstName="Joe" />
        </div>
    );
};

export default Widget;
