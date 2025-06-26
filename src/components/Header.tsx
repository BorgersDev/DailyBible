import React from 'react';

interface HeaderProps {
  book: string;
  setBook: (book: string) => void;
  version: string;
  setVersion: (version: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  book,
  setBook,
  version,
  setVersion,
}) => {
  const books = [
  { name: 'Gênesis', abbr: 'gn' },
  { name: 'Êxodo', abbr: 'ex' },
  { name: 'Levítico', abbr: 'lv' },
  { name: 'Números', abbr: 'nm' },
  { name: 'Deuteronômio', abbr: 'dt' },
  { name: 'Josué', abbr: 'js' },
  { name: 'Juízes', abbr: 'jz' },
  { name: 'Rute', abbr: 'rt' },
  { name: '1 Samuel', abbr: '1sm' },
  { name: '2 Samuel', abbr: '2sm' },
  { name: '1 Reis', abbr: '1ki' },
  { name: '2 Reis', abbr: '2ki' },
  { name: '1 Crônicas', abbr: '1ch' },
  { name: '2 Crônicas', abbr: '2ch' },
  { name: 'Esdras', abbr: 'ezr' },
  { name: 'Neemias', abbr: 'ne' },
  { name: 'Ester', abbr: 'et' },
  { name: 'Jó', abbr: 'jo' },
  { name: 'Salmos', abbr: 'sl' },
  { name: 'Provérbios', abbr: 'pv' },
  { name: 'Eclesiastes', abbr: 'ec' },
  { name: 'Cânticos', abbr: 'ct' },
  { name: 'Isaías', abbr: 'is' },
  { name: 'Jeremias', abbr: 'jr' },
  { name: 'Lamentações', abbr: 'lm' },
  { name: 'Ezequiel', abbr: 'ez' },
  { name: 'Daniel', abbr: 'dn' },
  { name: 'Oseias', abbr: 'os' },
  { name: 'Joel', abbr: 'jl' },
  { name: 'Amós', abbr: 'am' },
  { name: 'Obadias', abbr: 'ob' },
  { name: 'Jonas', abbr: 'jn' },
  { name: 'Miquéias', abbr: 'mq' },
  { name: 'Naum', abbr: 'na' },
  { name: 'Habacuque', abbr: 'hc' },
  { name: 'Sofonias', abbr: 'sf' },
  { name: 'Ageu', abbr: 'ag' },
  { name: 'Zacarias', abbr: 'zc' },
  { name: 'Malaquias', abbr: 'ml' },
  { name: 'Mateus', abbr: 'mt' },
  { name: 'Marcos', abbr: 'mc' },
  { name: 'Lucas', abbr: 'lc' },
  { name: 'João', abbr: 'jo' },
  { name: 'Atos', abbr: 'at' },
  { name: 'Romanos', abbr: 'rm' },
  { name: '1 Coríntios', abbr: '1co' },
  { name: '2 Coríntios', abbr: '2co' },
  { name: 'Gálatas', abbr: 'gl' },
  { name: 'Efésios', abbr: 'ef' },
  { name: 'Filipenses', abbr: 'fp' },
  { name: 'Colossenses', abbr: 'cl' },
  { name: '1 Tessalonicenses', abbr: '1ts' },
  { name: '2 Tessalonicenses', abbr: '2ts' },
  { name: '1 Timóteo', abbr: '1tm' },
  { name: '2 Timóteo', abbr: '2tm' },
  { name: 'Tito', abbr: 'tt' },
  { name: 'Filemom', abbr: 'fm' },
  { name: 'Hebreus', abbr: 'hb' },
  { name: 'Tiago', abbr: 'tg' },
  { name: '1 Pedro', abbr: '1pe' },
  { name: '2 Pedro', abbr: '2pe' },
  { name: '1 João', abbr: '1jo' },
  { name: '2 João', abbr: '2jo' },
  { name: '3 João', abbr: '3jo' },
  { name: 'Judas', abbr: 'jd' },
  { name: 'Apocalipse', abbr: 'ap' }
];
  const versions = [
  { name: 'NVI', abbr: 'nvi' },
  { name: 'Almeida Revista e Atualizada', abbr: 'ra' },
  { name: 'Almeida Corrigida e Fiel', abbr: 'acf' },
  { name: 'King James Version', abbr: 'kjv' },
  { name: 'Bible in Basic English', abbr: 'bbe' },
  { name: 'American Physical Education Edition', abbr: 'apee' },
  { name: 'Reina-Valera', abbr: 'rvr' },
];

  return (
    <header className="header">
      <img src="/logo.png" alt="Daily Bible Logo" />

      <select value={book} onChange={(e) => setBook(e.target.value)}>
        {books.map((ch) => (
          <option key={ch?.abbr} value={ch?.abbr}>
            {ch?.name}
          </option>
        ))}
      </select>

      <select value={version} onChange={(e) => setVersion(e.target.value)}>
        {versions.map((ver) => (
          <option key={ver?.abbr} value={ver?.abbr}>
            {ver?.name}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Header;
