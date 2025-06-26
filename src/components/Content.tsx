import React from 'react';
import { ChapterText } from '../types/BibleTypes';

interface ContentProps {
  chapterText: ChapterText;
}

const Content: React.FC<ContentProps> = ({ chapterText }) => {
  return (
    <section className="content">
      <article>
        <h1>{chapterText.title}</h1>
        {chapterText?.verses?.length &&
          chapterText.verses.map((verse: { text: string }, index: number) => (
            <p key={index}>
              <b>{index + 1}</b> {verse?.text}
            </p>
          ))}
      </article>
    </section>
  );
};

export default Content;
