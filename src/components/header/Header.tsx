import { Component, onCleanup, onMount, Show } from 'solid-js';
import { createSignal } from 'solid-js';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

interface Route {
  name: string;
  href: string;
}

interface HeaderProps {
  routes: Array<Route>;
}

// There's an inner div inside of the header element
const Header: Component<HeaderProps> = props => {
  const [windowDimension, setWindowDimension] = createSignal(0);

  onMount(() => {
    setWindowDimension(window.innerWidth);
  });

  const handleResize = () => {
    setWindowDimension(window.innerWidth);
  };
  window.addEventListener('resize', handleResize);
  onCleanup(() => window.removeEventListener('resize', handleResize));

  return (
    <Show when={windowDimension() < 768} fallback={<HeaderDesktop routes={props.routes} />}>
      <HeaderMobile routes={props.routes} />
    </Show>
  );
};

export default Header;
export type { Route, HeaderProps };