type HamburgerButtonProps = {
    isOpen: boolean;
    onClick: () => void;
  };
  
  export default function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
    return (
      <button
        onClick={onClick}
        className="text-gray-700 focus:outline-none md:hidden p-4"
      >
        {isOpen ? (
          // Close Icon
          <svg
            className="w-6 h-6 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Hamburger Icon
          <svg
            className="w-6 h-6 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
    );
  }
  