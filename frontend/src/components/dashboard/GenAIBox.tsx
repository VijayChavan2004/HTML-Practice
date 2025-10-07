import { useState } from 'react';
import { generateSummary } from '../../services/aiService';

export default function GenAIBox() {
  const [input, setInput] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSummarize() {
    setLoading(true);
    try {
      const res = await generateSummary({ text: input });
      setSummary(res.data.summary);
    } catch (err) {
      setSummary('Failed to generate summary');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-lg bg-white/5 border border-white/10 p-4">
      <div className="text-sm text-white/60 mb-2">GenAI Summarizer</div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-24 bg-transparent border border-white/10 rounded p-2 mb-3"
        placeholder="Paste task logs or notes..."
      />
      <div className="flex gap-2">
        <button onClick={onSummarize} disabled={loading} className="px-3 py-2 rounded bg-primary hover:bg-primary-dark disabled:opacity-50">
          {loading ? 'Summarizing...' : 'Summarize'}
        </button>
      </div>
      {summary && (
        <div className="mt-3 text-white/80 text-sm whitespace-pre-wrap">{summary}</div>
      )}
    </div>
  );
}
