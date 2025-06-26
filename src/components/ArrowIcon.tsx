import React from 'react';

// Define a interface para as props do componente ArrowIcon
interface ArrowIconProps {
  direction: 'left' | 'right'; // 'left' ou 'right' para indicar a direção do ícone
  handleClick: () => void; // Função de callback que não recebe argumentos e não retorna nada
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ direction, handleClick }) => {
  const iconSrc = direction === 'left' ? '/left-arrow.png' : '/right-arrow.png';
  const altText =
    direction === 'left' ? 'Voltar um capítulo' : 'Avançar um capítulo';

  return (
    <aside className="arrow-icon" onClick={handleClick}>
      <img src={iconSrc} alt={altText} />
    </aside>
  );
};

export default ArrowIcon;
