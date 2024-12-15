import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { contactIcons } from '@/constants';

export const ContactIcons = () => (
  <ul className="icons mb-2">
    {contactIcons.map((s) => (
      <li key={s.label}>
        <a href={s.link} aria-label={s.label}>
          <FontAwesomeIcon icon={s.icon} />
        </a>
      </li>
    ))}
  </ul>
);

