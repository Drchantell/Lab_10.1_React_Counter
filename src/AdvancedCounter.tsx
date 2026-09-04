import { useEffect, useState } from 'react'

function AdvancedCounter() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  const [history, setHistory] = useState<number[]>([0])

  const changeCount = (amount: number) => {
    const nextCount = count + amount
    setCount(nextCount)
    setHistory((previousHistory) => [...previousHistory, nextCount])
  }

  const increment = () => {
    changeCount(step)
  }

  const decrement = () => {
    changeCount(-step)
  }

  const resetCounter = () => {
    setCount(0)
    setHistory([0])
  }

  useEffect(() => {
    localStorage.setItem('studentCounterCount', String(count))
  }, [count])

  useEffect(() => {
    const savedCount = localStorage.getItem('studentCounterCount')

    if (savedCount !== null) {
      const parsedCount = Number(savedCount)

      if (!Number.isNaN(parsedCount)) {
        setCount(parsedCount)
        setHistory([parsedCount])
      }
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp') {
        changeCount(step)
      }

      if (event.key === 'ArrowDown') {
        changeCount(-step)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [count, step])

  return (
    <section className="counter-card">
      <div className="sparkle">✦ React Lab 1 ✦</div>
      <h1>Student Counter</h1>
      <p className="subtitle">Practice useState and useEffect</p>

      <div className="count-box">
        <p>Current Count</p>
        <div className="count-display">{count}</div>
      </div>

      <div className="button-group">
        <button className="secondary-button" onClick={decrement}>
          − Decrement
        </button>
        <button className="primary-button" onClick={increment}>
          + Increment
        </button>
        <button className="reset-button" onClick={resetCounter}>
          Reset
        </button>
      </div>

      <div className="step-card">
        <label htmlFor="step">Step Value</label>
        <input
          id="step"
          type="number"
          min="1"
          value={step}
          onChange={(event) => {
            const newStep = Number(event.target.value)
            setStep(newStep >= 1 ? newStep : 1)
          }}
        />
        <p>Buttons and arrow keys change the count by {step}.</p>
      </div>

      <div className="history-section">
        <h2>Count History</h2>
        <div className="history-box">{history.join(' • ')}</div>
      </div>

      <p className="keyboard-tip">
        ↑ ArrowUp adds {step} &nbsp; | &nbsp; ↓ ArrowDown subtracts {step}
      </p>
    </section>
  )
}

export default AdvancedCounter
