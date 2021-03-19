import habitat from 'preact-habitat';

import Widget from './components/Widget';

const WIDGET_NAME = 'preact-ts-widget';

const _habitat = habitat(Widget);

// TODO the css styles string global will be prepended to the bundle at build time
if (window[`${WIDGET_NAME}-css`]) {
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
    style.appendChild(document.createTextNode(window[`${WIDGET_NAME}-css`]));
}

_habitat.render({
    selector: `[data-widget-host="${WIDGET_NAME}"]`,
    clean: true,
});
