'use client';

import { atomOneDark, CodeBlock, vs2015 } from 'react-code-blocks';

export default function Home() {
  const showLineNumbers = true;
  const wrapLines = true;
  const codeBlock = true;
  return (
    <div className=" flex flex-grow  overflow-y-hidden font-mono">
      <CodeBlock
        customStyle={{ width: '100%' }}
        text={`{
  "web": {
    "html": "fluent",
    "css": {
      "tailwind": "fluent",
      "vanilla": "fluent"
    },
    "js": {
      "react": {
        "nextjs": "fluent",
        "qwikjs": "fluent",
        "svelte": "in-progress"
      },
      "node": {
        "expressjs": "fluent"
      }
    }
  },
  "databases": {
    "firebase": "fluent",
    "supabase": "fluent",
    "mongo": "decent"
  },
  "operating-systems": {
    "linux": {
      "arch-linux": "fluent",
      "gentoo": "decent",
      "opensuse": "fluent",
      "ubuntu": "fluent",
      "fedora": "fluent"
    }
  },
  "general-programming": {
    "c": "fluent",
    "python": "fluent",
    "cpp": "fluent",
    "java": "decent",
    "ruby": "decent",
    "lua": "decent"
  },
  "others": {
    "git": "fluent",
    "vscode": "fluent",
    "figma": "fluent",
    "adobe-xd": "fluent",
    "sysadmin": "fluent",
    "english": "fluent",
    "tamil": "fluent",
    }
}`}
        language={'json'}
        theme={vs2015}
        {...{ showLineNumbers, wrapLines, codeBlock }}
      />
    </div>
  );
}
