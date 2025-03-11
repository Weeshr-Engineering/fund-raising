import * as motion from "motion/react-client";

export const ProgressBar = ({ amountRaised = "$10,800", percentage = 7 }) => {
  return (
    <motion.div
      className="  space-y-4  mt-[500px] md:mt-[400px] px-4 lg:px-14 lg:mt-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      <div className="flex justify-between md:items-center flex-col md:flex-row">
        <h3 className="text-3xl lg:text-4xl text-muted font-medium md:pl-4">
          Amount Raised
        </h3>
        <motion.div
          className="text-4xl lg:text-5xl  font-bold text-primary"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          {amountRaised}
        </motion.div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
          <motion.div
            className="h-full bg-[#6A70FF] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          ></motion.div>
        </div>
        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
        >
          <span className="text-slate-300">{percentage}%</span>
        </motion.div>
      </div>
    </motion.div>
  );
};
