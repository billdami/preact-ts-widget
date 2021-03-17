import { FunctionalComponent, h } from 'preact';
import { useCallback, useState } from 'preact/hooks';

import styles from './styles.module.scss';

interface FooProps {
    firstName: string;
}

const Foo: FunctionalComponent<FooProps> = ({ firstName }) => {
    const [lastName, setLastName] = useState<string>('User');

    const onLastNameInput = useCallback(
        (event: HTMLElementInputEvent<HTMLInputElement>) => {
            console.log('last name updated!', event.target.value);
            setLastName(event.target.value);
        },
        []
    );

    return (
        <div className={styles.Foo}>
            <p>
                Hello, {firstName} {lastName}
            </p>
            <p>
                <input value={lastName} onInput={onLastNameInput} />
            </p>
        </div>
    );
};

export default Foo;
