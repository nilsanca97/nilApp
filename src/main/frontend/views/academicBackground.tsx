import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import React from 'react';
import { DatePicker } from '@vaadin/react-components/DatePicker.js';

export const config: ViewConfig = {
  menu: { order: 2, icon: 'line-awesome/svg/book-open-solid.svg' },
  title: 'Academic Background',
};

export default function AcademicBackgroundView() {
  return (
    <div className="flex flex-col h-full items-center justify-center p-l text-center box-border">
      <img style={{ width: '200px' }} src="images/empty-plant.png" />
      <h2>This place intentionally left empty</h2>
      <p>It’s a place where you can grow your own UI 🤗</p>

      {/* Aquí añadimos el DatePicker */}
      <div className="mt-l">
        <DatePicker label="Start date" />
      </div>
    </div>
  );

}
