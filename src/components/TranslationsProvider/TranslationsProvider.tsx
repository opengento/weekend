'use client';

import { I18nextProvider } from 'react-i18next'
import { ReactNode } from "react";
import i18next from "i18next";

export default function TranslationsProvider({ children }: { children: ReactNode}) {
  return (
    <I18nextProvider i18n={i18next}>
      {children}
    </I18nextProvider>
  )
}
