import { FunctionalComponent, h } from 'preact';
import Example from '../Example';

import styles from './styles.module.scss';

interface WidgetProps {
    title: string;
    color?: string;
}

const Widget: FunctionalComponent<WidgetProps> = ({ title, color }) => {
    return (
        <div class={styles.Widget}>
            <h1 style={{ color }}>{title}</h1>
            <Example firstName="Joe" />
        </div>
    );
};

export default Widget;
