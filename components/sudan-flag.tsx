import Image from "next/image";

export function SudanFlag() {
  return (
    <div className="sudan-flag-wrap" aria-label="علم السودان">
      <Image
        src="/sudan-flag-real.png"
        alt="علم السودان"
        width={986}
        height={985}
        className="sudan-flag-image"
        priority
      />
    </div>
  );
}
