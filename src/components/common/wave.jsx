export default function Wave() {
  return (
    <div className="w-screen overflow-hidden relative h-[100px]">
      {/* Lapis Bayangan Belakang */}
      <svg
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-[100vw] h-[100px]"
        preserveAspectRatio="none"
        style={{
          transform: 'translate(20px, 10px) scale(1.05)',
          opacity: 0.4,
          filter: 'blur(1px)',
        }}
      >
        <path
          fill="#ffffff"
          d="M0 44C106.667 44 213.333 8 320 8C426.667 8 533.333 44 640 44C746.667 44 853.333 8 960 8C1066.67 8 1173.33 44 1280 44C1386.67 44 1440 19 1440 9V100H0V44Z"
        />
      </svg>

      {/* Lapis Depan */}
      <svg
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-[100vw] h-[100px]"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0 44C106.667 44 213.333 8 320 8C426.667 8 533.333 44 640 44C746.667 44 853.333 8 960 8C1066.67 8 1173.33 44 1280 44C1386.67 44 1440 19 1440 9V100H0V44Z"
        />
      </svg>
    </div>
  );
}
