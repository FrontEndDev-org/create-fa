import type { Route } from './+types/root';
import stylesheet from './root.scss?url';

export default function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesheet,
      as: 'style',
    },
  ] satisfies Route.LinkDescriptors;
}
