import Link from "next/link";
import NewsletterCTA from "../../components/newsletter-cta";
import "system-ui.css";

let pages = [
  {
    letter: "a",
    lead: "Append"
  },
  {
    letter: "b",
    lead: "Move BACK to the BEGINNING of a word"
  },
  {
    letter: "c",
    lead: "Change"
  },
  {
    letter: "d",
    lead: "Delete"
  },
  {
    letter: "e",
    lead: "Move to the END of a word"
  },
  {
    letter: "f",
    lead: "Move TO (FIND) character on line"
  },
  {
    letter: "g",
    lead: "GO to line"
  },
  {
    letter: "hjkl",
    lead: "Navigate UP DOWN LEFT and RIGHT"
  },
  {
    letter: "i",
    lead: "INSERT before cursor"
  },
  {
    letter: "m",
    lead: "MARK"
  },
  {
    letter: "n",
    lead: "NEXT search result"
  },
  {
    letter: "o",
    lead: "INSERT above or below"
  },
  {
    letter: "p",
    lead: "PREVIOUS search result"
  },
  {
    letter: "q",
    lead: "RECORD a macro"
  },
  {
    letter: "r",
    lead: "REPLACE"
  },
  {
    letter: "s",
    lead: "SUBSTITUTE"
  },
  {
    letter: "t",
    lead: "MOVE 'TIL character on line"
  },
  {
    letter: "u",
    lead: "UNDO"
  },
  {
    letter: "v",
    lead: "VISUALLY SELECT"
  },
  {
    letter: "w",
    lead: "Move forward to new WORD"
  },
  {
    letter: "x",
    lead: "DELETE"
  },
  {
    letter: "y",
    lead: "YANK (copy)"
  },
  {
    letter: "z",
    lead: "ALL THE OTHER THINGS"
  }
];

export default function() {
  return (
    <main className="system-ui">
      <ul>
        {pages.map(page => (
          <li key={page.letter}>
            <Link href={`/alphabet/${page.letter}`}>
              <a>
                <code>{page.letter.toUpperCase()}</code>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <NewsletterCTA />
    </main>
  );
}
