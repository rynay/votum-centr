import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Quiz } from './components/Quiz/Quiz';

export enum Variant {
  England = 'England',
  Canada = 'Canada',
  Russia = 'Russia',
  France = 'France',
}

const variants = [
  { value: Variant.England, label: 'Англия' },
  { value: Variant.Canada, label: 'Канада' },
  { value: Variant.Russia, label: 'Россия' },
  { value: Variant.France, label: 'Франция' },
]

export type Variants = typeof variants;

const App = () => {
  const [activeValue, setActiveValue] = useState<Variant>();

  return (
    <>
      <Header />
      <Quiz
        variants={variants}
        activeVariant={activeValue}
        handleChange={setActiveValue}
      />
    </>
  );
}

export default App;
