export default function HighlightLink({ href, children, onClick }) {
    return (
      <a 
        href={href}
        onClick={onClick}
        className="bg-green-100 hover:bg-green-200 cursor-pointer px-1 rounded inline-block font-sans text-sm tracking-wider leading-loose"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }