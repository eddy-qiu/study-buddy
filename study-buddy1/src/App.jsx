import { useState } from 'react';
import FlashCard from './FlashCard';
import './App.css';

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const flashCards = [
    {
      question: 'What is a closure in JavaScript?',
      answer:
        'A closure is a function that has access to its outer function scope even after the outer function has returned.',
    },
    {
      question: 'What is the difference between let and var in JavaScript?',
      answer:
        'The main difference is that let is block-scoped, while var is function-scoped. This means that variables declared with let are only accessible within the block they are declared in, while variables declared with var are accessible within the entire function they are declared in.',
    },
    {
      question: 'What is the difference between == and === in JavaScript?',
      answer:
        'The == operator compares values after converting them to a common type, while the === operator compares values without type conversion. This means that the === operator is generally more reliable and less error-prone than the == operator.',
    },
    {
      question: 'What is the difference between null and undefined in JavaScript?',
      answer:
        'null is a value that represents the intentional absence of any object value, while undefined is a value that represents an uninitialized, non-existent, or undefined value.',
    },
    {
      question: 'What is the difference between a stack and a queue?',
      answer:
        'A stack is a data structure that follows the Last-In-First-Out (LIFO) principle, while a queue is a data structure that follows the First-In-First-Out (FIFO) principle.',
    },
    {
      question: 'What is the time complexity of binary search?',
      answer:
        'The time complexity of binary search is O(log n), where n is the number of elements in the array.',
    },
    {
      question: 'What is the time complexity of quicksort?',
      answer:
        'The time complexity of quicksort is O(n log n) on average, but can be O(n^2) in the worst case.',
    },
    {
      question: 'What is the time complexity of mergesort?',
      answer:
        'The time complexity of mergesort is O(n log n), which is the same as quicksort on average, but mergesort is guaranteed to have this time complexity in all cases.',
    },
    {
      question: 'What is the difference between a linked list and an array?',
      answer:
        'An array is a data structure that stores a collection of elements in contiguous memory locations, while a linked list is a data structure that stores a collection of elements as nodes that point to the next node in the list.',
    },
  ];

  const handleNextCardClick = () => {
    setCurrentCardIndex((currentCardIndex + 1) % flashCards.length);
  };

  return (
    <>
      <h1>CS Flash Cards</h1>
      <div className="flash-card-container">
        <FlashCard
          question={flashCards[currentCardIndex].question}
          answer={flashCards[currentCardIndex].answer}
        />
        <button onClick={handleNextCardClick}>Next Card</button>
      </div>
    </>
  );
}

export default App;