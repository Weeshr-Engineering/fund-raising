import * as motion from "motion/react-client";

export const ProgressBar = ({ amountRaised = "$0.00", percentage = 0 }) => {
  return (
    <motion.div
      className="mt-12 space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl text-slate-400">Amount Raised</h3>
        <div className="text-4xl font-bold">{amountRaised}</div>
      </div>
      <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex justify-end">
        <span className="text-slate-300">{percentage}%</span>
      </div>
    </motion.div>
  );
};
