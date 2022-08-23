import { useState } from 'react';
import React from 'react';

import Layout from './layout/Layout'

const questions = [
  {
    title: 'What country has the most islands in the world?',
    variants: ['Japan', 'Turkey', 'Sweden'],
    correct: 3,
  },
  {
    title: 'Name the largest (not highest) mountain range in the world?',
    variants: ['The Andes', 'The Gowerla', 'The Alps'],
    correct: 1,
  },
  {
    title: 'Name the longest river in the world?',
    variants: [
      'The Dnipro',
      'The Nile',
      'The Volga',
    ],
    correct: 2,
  },
  {
    title: 'What’s the national flower of Japan?',
    variants: [
      'Cherry blossom',
      'Roses',
      'Peonies',
    ],
    correct: 1,
  },
  {
    title: 'How many stripes are there on the US flag?',
    variants: [
      '19',
      '13',
      '21',
    ],
    correct: 2,
  },
  {
    title: 'What’s the national animal of Australia??',
    variants: [
      'Red Kangaroo',
      'Kangaroo',
      'Brown Kangaroo',
    ],
    correct: 1,
  },
  {
    title: 'Which of the following empires had no written language: Incan, Aztec, Egyptian, Roman?',
    variants: [
      'Incan',
      'Pinks',
      'Pickts',
    ],
    correct: 1,
  },
  {
    title: 'Until 1923, what was the Turkish city of Istanbul called?',
    variants: [
      'Ankara',
      'Tsargrad',
      'Constantinople',
    ],
    correct: 3,
  },
  {
    title: 'Who founded the UPA ?',
    variants: [
      'Taras Bulba-Borovets',
      'Bandera',
      'Konovalec',
    ],
    correct: 1,
  },
  {
    title: 'Which language has the most words (according to dictionary entries)?',
    variants: [
      'English',
      'Italian',
      'Ukrainian',
    ],
    correct: 1,
  },
  {
    title: 'What is a female elephant called?',
    variants: [
      'Cow',
      'Elephant',
      'It',
    ],
    correct: 1,
  },
  {
    title: 'What brand of beer does Homer Simpson drink?',
    variants: [
      'Zhiguli',
      'Kozel',
      'Duff',
    ],
    correct: 3,
  },
  {
    title: 'What is a young giraffe called?',
    variants: [
      'Calt',
      'Calf',
      'Giraffe',
    ],
    correct: 2,
  },
];


function Result({ correct }) {
  return (
    <div className='absolute top-quizt left-quizl
    bg-blue-300 text-center rounded-lg py-2 shadow-2xl'
      style={{ width: '45%' }}>
      <h2 className='px-2 text-center text-white font-bold'>
        {correct} correct answer out of {questions.length}
      </h2>
      <a href="/quiz"
        className='text-white font-bold hover:text-gray-600'>
        Restart
      </a>
    </div>
  );
};

function Game({ question, onClickVariant }) {
  return (
    <>
      <div className="absolute top-quizt left-quizl
      bg-blue-300 text-center rounded-lg py-2 shadow-2xl"
        style={{ width: '45%' }}>
        <h1 className='text-white font-bold'>
          {question.title}
        </h1>
        <ul className="text-start px-2">
          {
            question.variants.map((text, index) =>
            (<li className='hover:opacity-70 bg-white rounded-xl
            pl-3 my-2 font-semibold active:bg-cyan-700 active:text-white'
              onClick={() => onClickVariant(index + 1)}
              key={index}>
              {text}</li>))
          }
        </ul>
      </div>
    </>
  );
};

function Quiz() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1)

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <Layout>
      {
        step !== questions.length
          ? <Game
            step={step}
            question={question}
            onClickVariant={onClickVariant} />
          : <Result
            correct={correct} />
      }
    </Layout>
  )
}

export default Quiz




