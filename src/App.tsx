import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Content from './components/Content';
import ArrowIcon from './components/ArrowIcon';
import { BibleBook, BiblePassage } from './types/BibleTypes';

const BIBLE_API_URL = 'https://www.abibliadigital.com.br/api';

const API_TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiJGcmkgQXVnIDIzIDIwMjQgMjE6MTM6MzMgR01UKzAwMDAudmljdG9yLmNhZXRhbm9AZmFjdWxkYWRlZHVuYW1pcy5jb20uYnIiLCJpYXQiOjE3MjQ0NDc2MTN9.pBgjlkJwxevP3p7STc02dDS5_8EaOZPHam4iwTFQbT0`;

const App: React.FC = () => {
  const [book, setBook] = useState<string>('is');
  const [bookDetail, setBookDetail] = useState<BibleBook>();
  const [chapter, setChapter] = useState<number>(1);
  const [version, setVersion] = useState<string>('nvi');
  const [passage, setPassage] = useState<BiblePassage>();

  useEffect(() => {
    getBookDetailFromBibleAPI();
    getChapterFromBibleAPI();
  }, [book, chapter, version]);

  const getBookDetailFromBibleAPI = async () => {
    const response = await axios.get(`${BIBLE_API_URL}/books/${book}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    if (response && response?.data) {
      setBookDetail(response?.data);
    }
  };

  const getChapterFromBibleAPI = async () => {
    const response = await axios.get(
      `${BIBLE_API_URL}/verses/${version}/${book}/${chapter}`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    );
    if (response && response?.data) {
      setPassage(response?.data);
    }
  };

  const handlePrevChapter = () => {
    const ch = chapter > 1 ? chapter - 1 : 1;
    setChapter(ch);
  };

  const handleNextChapter = () => {
    const totalChapters = bookDetail?.chapters || 1;
    const ch = chapter >= totalChapters ? totalChapters : chapter + 1;
    setChapter(ch);
  };

  const chapterText = {
    title: `${passage?.book?.name} ${passage?.chapter?.number}`,
    verses: passage?.verses || [],
  };

  return (
    <>
      <Header
        book={book}
        version={version}
        setBook={setBook}
        setVersion={setVersion}
      />
      <section className="container">
        <ArrowIcon direction="left" handleClick={handlePrevChapter} />
        <Content chapterText={chapterText} />
        <ArrowIcon direction="right" handleClick={handleNextChapter} />
      </section>
    </>
  );
};

export default App;
