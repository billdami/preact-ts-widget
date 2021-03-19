import { FunctionalComponent, h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import Input from '../Input';

import './styles.css';

interface ExampleProps {
    firstName: string;
}

const Example: FunctionalComponent<ExampleProps> = ({ firstName }) => {
    const [lastName, setLastName] = useState<string>('User');

    const onLastNameInput = useCallback(
        (event: HTMLElementInputEvent<HTMLInputElement>) => {
            console.log('last name updated!', event.target.value);
            setLastName(event.target.value);
        },
        []
    );

    return (
        <div class="Example">
            <p>
                Hello, {firstName} {lastName}
            </p>
            <p>
                <Input value={lastName} onInput={onLastNameInput} />
            </p>
        </div>
    );
};

export default Example;
