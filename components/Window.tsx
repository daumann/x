import styles from '@/styles/Window.module.scss';

import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import { Rnd } from 'react-rnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';

type Window = {
  name: string;
  onMinimize: () => void;
  onClose: () => void;
  onFocus: () => void;
  onBlur: () => void;
  tabIndex: number;
};

export const Window: FC<Window> = ({
  children,
  name,
  onMinimize,
  onClose,
  onFocus,
  onBlur,
  tabIndex
}) => {
  const windowRef = useRef<Rnd>(null);

  useEffect(() => windowRef?.current?.resizableElement?.current?.focus(), []);

  return (
    // TODO: BG required for transparent issue?
    // TODO: Z-index on windows
    // TODO: Why did foreground not work? maybe stop using focus?
    <li>
      <Rnd
        className={styles.window}
        dragHandleClassName="handle"
        cancel=".cancel"
        // MIN/MAX constraints
        // Drag constraints on top only
        default={{
          x: 25,
          y: 25,
          width: 320,
          height: 224
        }}
        tabIndex={tabIndex}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={windowRef}
      >
        <header className="handle">
          <h1>{name}</h1>
          <nav className="cancel">
            <button id={styles.close} onClick={onClose}>
              <FontAwesomeIcon size="xs" icon={faTimes} />
            </button>
            <button id={styles.minimize} onClick={onMinimize}>
              <FontAwesomeIcon size="xs" icon={faMinus} />
            </button>
            <button id={styles.maximize}>
              <FontAwesomeIcon size="xs" icon={faPlus} />
            </button>
          </nav>
        </header>
        <article>{children}</article>
      </Rnd>
    </li>
  );
};