import { ColumnsLintRules, RowsLintRules } from '@mountnotion/types';

type ColunnsLintRulesArray<
  T extends keyof ColumnsLintRules = keyof ColumnsLintRules
> = {
  [P in keyof ColumnsLintRules]: {
    id: P;
    name: ColumnsLintRules[P];
  };
}[T][];

type RowsLintRulesArray<T extends keyof RowsLintRules = keyof RowsLintRules> = {
  [P in keyof RowsLintRules]: {
    id: P;
    name: RowsLintRules[P];
  };
}[T][];

export const COLUMNS_LINT_RULES: ColunnsLintRulesArray = [
  {
    id: 'consistentTitlesAsName',
    name: "consistent titles as 'name'",
  },
  {
    id: 'automaticCreatedBy',
    name: 'automatic created_by',
  },
  {
    id: 'automaticCreatedTime',
    name: 'automatic created_time',
  },
  {
    id: 'automaticLastEditedBy',
    name: 'automatic last_edited_by',
  },
  {
    id: 'automaticLastEditedTime',
    name: 'automatic last_edited_time',
  },
  {
    id: 'consistentSelectColorsUsingFirstColor',
    name: 'consistent select colors using first color',
  },
  {
    id: 'consistentMultiSelectColorsUsingFirstColor',
    name: 'consistent multi_select colors using first color',
  },
  {
    id: 'lowercaseColumnNames',
    name: 'lowercase column names',
  },
  {
    id: 'relationsWithLeadingEmoji',
    name: 'relations with leading emoji',
  },
];

export const ROWS_LINT_RULES: RowsLintRulesArray = [
  {
    id: 'lowercasePageTitles',
    name: 'lowercase page titles',
  },
  {
    id: 'untitledPagesDefaultToAnimalColorNames',
    name: 'untitled pages default to animal color names',
  },
  {
    id: 'pagesWithoutIconsDefaultToDatabaseIcon',
    name: 'pages without icons default to database icon',
  },
];
