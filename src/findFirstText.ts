import memoize from 'lodash.memoize';
import React from 'react';
import * as ReactIs from 'react-is';

const findFirstText = memoize((root: React.ReactNode): string | null => {
  let nodesQueue: React.ReactNode[] = React.Children.toArray(root);

  while (nodesQueue.length > 0) {
    const [node, ...rest] = nodesQueue;
    nodesQueue = rest;

    if (typeof node === 'string') {
      return node;
    }

    if (typeof node === 'number') {
      return String(node);
    }

    if (Array.isArray(node)) {
      nodesQueue.push(...node);
      continue;
    }

    if (ReactIs.isFragment(node)) {
      const children: React.ReactNode[] = React.Children.toArray(node.props?.children ?? []);
      nodesQueue.push(...children);
      continue;
    }

    if (ReactIs.isElement(node)) {
      const children: React.ReactNode[] = React.Children.toArray(node.props?.children ?? []);
      nodesQueue.push(...children);
      continue;
    }

    if (ReactIs.isContextProvider(node)) {
      const children: React.ReactNode[] = React.Children.toArray(node.props?.children ?? []);
      nodesQueue.push(...children);
      continue;
    }

    if (ReactIs.isContextConsumer(node)) {
      const children: React.ReactNode[] = React.Children.toArray(node.props?.children ?? []);
      nodesQueue.push(...children);
      continue;
    }
  }

  return null;
});

export default findFirstText;
