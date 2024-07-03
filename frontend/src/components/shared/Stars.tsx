export default function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex mt-2 item-center">
      {Array.from({ length: rating }).map((_, index) => (
        <svg
          key={index}
          className="w-5 h-5 text-[#F4CE14] fill-current "
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
        </svg>
      ))}

      {Array.from({ length: 5 - rating }).map((_, index) => (
        <svg
          key={index}
          className="w-5 h-5 text-gray-500 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
        </svg>
      ))}
    </div>
  );
}
