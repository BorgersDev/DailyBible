export interface BibleAbbreviation {
  pt: string;
  en: string;
}

export interface Book {
  abbrev: BibleAbbreviation;
  name: string;
  author: string;
  group: string;
  version: string;
}

export interface Chapter {
  number: number;
  verses: number;
}

export interface Verse {
  number: number;
  text: string;
}

export interface BiblePassage {
  book: Book;
  chapter: Chapter;
  verses: Verse[];
}

export interface BibleAbbreviation {
  pt: string;
  en: string;
}

export interface BibleBook {
  abbrev: BibleAbbreviation;
  author: string;
  chapters: number;
  comment: string;
  group: string;
  name: string;
  testament: string;
}

export interface ChapterText {
  title: string;
  verses: Verse[];
}
