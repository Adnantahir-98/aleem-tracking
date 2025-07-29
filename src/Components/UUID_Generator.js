import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";
// import { FiCopy, FiCheck } from 'react-icons/fi';
// import './UniqueNumberGenerator.css';


const LOCAL_STORAGE_KEY = 'generatedCodesHistory';
const MAX_LENGTH = 22;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const UniqueNumberGenerator = () => {
  const [uniqueCode, setUniqueCode] = useState('');
  const [length, setLength] = useState(13);
  const [generatedSet, setGeneratedSet] = useState(new Set());
  const [copied, setCopied] = useState(false);

  // Count how many codes have been generated so far
  const generationCounter = useRef(0);
  const nextAlphaThreshold = useRef(getRandomInt(5, 22));

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setGeneratedSet(new Set(JSON.parse(stored)));
    }
  }, []);

  const saveToStorage = (updatedSet) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Array.from(updatedSet)));
  };

  const insertLettersAtRandom = (baseStr, count = 1) => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = baseStr;

    for (let i = 0; i < count; i++) {
      const randomChar = letters.charAt(Math.floor(Math.random() * letters.length));
      const position = getRandomInt(1, result.length - 1); // not always start or end
      result = result.slice(0, position) + randomChar + result.slice(position);
    }

    return result;
  };

  const generateUniqueCode = () => {
    let newCode;
    let attempts = 0;
    generationCounter.current += 1;

    const shouldInjectLetters = generationCounter.current >= nextAlphaThreshold.current;
    const numLetters = shouldInjectLetters ? getRandomInt(1, 2) : 0;

    if (shouldInjectLetters) {
      generationCounter.current = 0;
      nextAlphaThreshold.current = getRandomInt(5, 22);
    }

    do {
      const uuidPart = uuidv4().replace(/-/g, '');
      const timestamp = Date.now().toString();
      let base = (uuidPart + timestamp).replace(/[A-Za-z]/g, '').slice(0, length);

      while (base.length < length) {
        base += Math.floor(Math.random() * 10);
      }

      base = base.slice(0, length - numLetters);

      if (numLetters > 0) {
        base = insertLettersAtRandom(base, numLetters);
      }

      newCode = base;

      attempts++;
      if (attempts > 10) break;
    } while (generatedSet.has(newCode));

    const updatedSet = new Set(generatedSet);
    updatedSet.add(newCode);
    setGeneratedSet(updatedSet);
    saveToStorage(updatedSet);
    setUniqueCode(newCode);
    setCopied(false);
  };

  const handleLengthChange = (e) => {
    let newLength = parseInt(e.target.value, 10);
    if (isNaN(newLength)) return;
    if (newLength > MAX_LENGTH) newLength = MAX_LENGTH;
    if (newLength < 13) newLength = 13;
    setLength(newLength);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(uniqueCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Clipboard copy failed', err);
    }
  };

  return (
    <div className="generator-container">
      <h2>Unique Reference Generator</h2>

      {uniqueCode && (
        <div
          className="code-display"
          style={{
            width: `${Math.max(13, uniqueCode.length) * 1.2 + 3}ch`,
          }}
        >
          <span className="code-text">{uniqueCode}</span>
          <button className="copy-button" onClick={copyToClipboard}>
            {copied ? <IoCheckmarkOutline  /> : <IoCopyOutline />}
          </button>
        </div>
      )}

      <div className="controls">
        <div className="length-selector">
          <label htmlFor="length-input">Code Length:</label>
          <input
            id="length-input"
            type="number"
            min="13"
            max={MAX_LENGTH}
            value={length}
            onChange={handleLengthChange}
          />
          <span className="length-note">Max: {MAX_LENGTH}</span>
        </div>

        <button className="danger-button" onClick={generateUniqueCode}>
          Generate Reference
        </button>
      </div>
    </div>
  );
};

export default UniqueNumberGenerator;
