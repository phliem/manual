export default function Rejected() {
  return (
    <div className="text-center max-w-6xl animate-slide-in">
      <h2 className="text-3xl md:text-6xl font-bold">
        Unfortunately, we are unable to prescribe this medication for you.
      </h2>
      <p className="text-lg md:text-xl mt-6">
        This is because finasteride can alter the PSA levels, which may be used
        to monitor for cancer.
        <br /> You should discuss this further with your GP or specialist if you
        would still like this medication.
      </p>
    </div>
  );
}
