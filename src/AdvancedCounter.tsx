import { useEffect, useState } from 'react'

function AdvancedCounter() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  const [history, setHistory] = useState<number[]>([0])

  const changeCount = (amount: number) => {
    const nextCount = count + amount
    setCount(nextCount)
    setHistory((prev) => [...prev, nextCount])
  }

  const increment = () => changeCount(step)
  const decrement = () => changeCount(-step)

  const reset = () => {
    setCount(0)
    setHistory([0])
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('counterCount', String(count))
    }, 500)

    return () => clearTimeout(timer)
  }, [count])

  useEffect(() => {
    const saved = localStorage.getItem('counterCount')
    if (saved !== null) {
      const parsed = Number(saved)
      if (!Number.isNaN(parsed)) {
        setCount(parsed)
        setHistory([parsed])
      }
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') increment()
      if (e.key === 'ArrowDown') decrement()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [count, step])

  return (
    <section className="counter-card">
      <div className="sparkle">✦ React Counter ✦</div>
      <h1>Advanced Counter</h1>
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
        <button className="reset-button" onClick={reset}>
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
          onChange={(e) => setStep(Math.max(1, Number(e.target.value)))}
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
