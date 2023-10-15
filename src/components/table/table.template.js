/* eslint-disable indent */

import { mockData } from './table.mock.data';

const CODES = {
  A: 'A'.charCodeAt(),
  Z: 'Z'.charCodeAt(),
};

const createCell = (value = '') => `
  <div class="cell" contenteditable spellcheck="false">${value}</div>
`;

const createCol = (title = '') => `
  <div class="column">${title}</div>
`;

const createRow = ({ rowInfo = '', content } = {}) => {
  return `
    <div class="row">
      <div class="row-info">${rowInfo}</div>
      <div class="row-data">${content}</div>
    </div>
    `;
};

export const cteateTable = (rowsCount = 15) => {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
    .fill('')
    .map((_, idx) => createCol(String.fromCharCode(CODES.A + idx)))
    .join('');

  rows.push(createRow({ content: cols }));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
      .fill('')
      .map((_, idx) => createCell(mockData[i]?.[idx]))
      .join('');
    rows.push(createRow({ rowInfo: i + 1, content: cells }));
  }

  return rows.join('');
};
