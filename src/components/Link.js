import React from 'react';

const Link = ({className, href, children }) => {
  const onLinkClick = (event) => {
    if (event.ctrlKey || event.metaKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent)
  }

  return <a onClick={onLinkClick} href={href} className={className}>
    { children }
  </a>
}

export default Link
