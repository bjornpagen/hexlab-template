import { createSignal, Component, Show, For } from 'solid-js';

import { Route, HeaderProps } from './Header';
import Button from '../button';
import { Portal } from 'solid-js/web';

interface IconProps {
  onClick?: () => void;
}

const IconMenu: Component<IconProps> = props => {
  return (
    <svg class='cursor-pointer' onClick={props.onClick} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33203 20.0002C3.33203 19.0797 4.07822 18.3335 4.9987 18.3335H34.9987C35.9192 18.3335 36.6654 19.0797 36.6654 20.0002C36.6654 20.9206 35.9192 21.6668 34.9987 21.6668H4.9987C4.07822 21.6668 3.33203 20.9206 3.33203 20.0002Z" fill="#1C2126" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33203 10.0002C3.33203 9.07969 4.07822 8.3335 4.9987 8.3335H34.9987C35.9192 8.3335 36.6654 9.07969 36.6654 10.0002C36.6654 10.9206 35.9192 11.6668 34.9987 11.6668H4.9987C4.07822 11.6668 3.33203 10.9206 3.33203 10.0002Z" fill="#1C2126" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33203 30.0002C3.33203 29.0797 4.07822 28.3335 4.9987 28.3335H34.9987C35.9192 28.3335 36.6654 29.0797 36.6654 30.0002C36.6654 30.9206 35.9192 31.6668 34.9987 31.6668H4.9987C4.07822 31.6668 3.33203 30.9206 3.33203 30.0002Z" fill="#1C2126" />
    </svg>
  );
};

const IconClose: Component<IconProps> = props => {
  return (
    <svg class='cursor-pointer' onClick={props.onClick} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.17851 32.1785C7.52764 31.5276 7.52764 30.4724 8.17851 29.8215L29.3917 8.60828C30.0426 7.95741 31.0979 7.95741 31.7487 8.60828C32.3996 9.25916 32.3996 10.3144 31.7487 10.9653L10.5355 32.1785C9.88466 32.8294 8.82938 32.8294 8.17851 32.1785Z" fill="#1C2126" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.82149 8.17851C8.47236 7.52764 9.52764 7.52764 10.1785 8.17851L31.3917 29.3917C32.0426 30.0426 32.0426 31.0979 31.3917 31.7487C30.7408 32.3996 29.6856 32.3996 29.0347 31.7487L7.82149 10.5355C7.17061 9.88466 7.17061 8.82939 7.82149 8.17851Z" fill="#1C2126" />
    </svg>
  );
};

interface HeaderMobileState {
  open: boolean;
}

const HeaderMobile: Component<HeaderProps> = props => {
  const [state, setState] = createSignal<HeaderMobileState>({ open: false });

  return (
    <header class="flex flex-col py-12 px-16 gap-56">
      <div class="flex flex-row items-center justify-between">
        <a href="/">
          <span class="hex-type-h4 color-black">Hexlab</span>
          <span class="hex-type-h4 color-primary">.</span>
        </a>
        <Show when={state().open} fallback={<IconMenu onClick={() => setState({ open: true })} />}>
          <IconClose onClick={() => setState({ open: false })} />
        </Show>
      </div>
      <Show when={state().open}>
        <nav>
          <ul class="flex flex-col px-24 gap-36">
            <For each={props.routes}>
              {(route, _) => (
                <li class="flex flex-row">
                  <a href={route.href}>
                    <span class="hex-type-h4 color-gray-darker">{route.name}</span>
                  </a>
                </li>
              )}
            </For>
            <li>
              <Button class="hex-btn hex-btn-primary hex-btn-lg">
                <span class="hex-type-btn-lg">
                  Let's talk
                </span>
              </Button>
            </li>
          </ul>
        </nav>
      </Show>
    </header >
  );
};

export default HeaderMobile;