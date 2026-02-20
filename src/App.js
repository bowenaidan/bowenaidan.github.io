import { useEffect, useState } from 'react';
import './App.css';

function renderInline(text) {
  const segments = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);

  return segments.map((segment, index) => {
    if (segment.startsWith('**') && segment.endsWith('**')) {
      return <strong key={`bold-${index}`}>{segment.slice(2, -2)}</strong>;
    }

    const linkMatch = segment.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      return (
        <a href={href} key={`link-${index}`} target='_blank' rel='noreferrer'>
          {label}
        </a>
      );
    }

    return <span key={`text-${index}`}>{segment}</span>;
  });
}

function renderMarkdown(content) {
  const lines = content.split('\n');
  const elements = [];
  let listBuffer = [];

  const flushList = () => {
    if (listBuffer.length) {
      elements.push(
        <ul key={`list-${elements.length}`}>
          {listBuffer.map((item, index) => (
            <li key={`item-${index}`}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      return;
    }

    if (line.startsWith('- ')) {
      listBuffer.push(line.slice(2));
      return;
    }

    flushList();

    if (line === '---') {
      elements.push(<hr key={`hr-${elements.length}`} />);
      return;
    }

    if (line.startsWith('# ')) {
      elements.push(<h1 key={`h1-${elements.length}`}>{renderInline(line.slice(2))}</h1>);
      return;
    }

    if (line.startsWith('## ')) {
      elements.push(<h2 key={`h2-${elements.length}`}>{renderInline(line.slice(3))}</h2>);
      return;
    }

    if (line.startsWith('### ')) {
      elements.push(<h3 key={`h3-${elements.length}`}>{renderInline(line.slice(4))}</h3>);
      return;
    }

    elements.push(<p key={`p-${elements.length}`}>{renderInline(line)}</p>);
  });

  flushList();
  return elements;
}

function App() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/content.md')
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch(() => {
        setContent('# Build Notes, Backlog & Portfolio\n\nUnable to load content.md.');
      });
  }, []);

  return <main className='app markdown-content'>{renderMarkdown(content)}</main>;
}

export default App;