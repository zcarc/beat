import ProgressBar from "@ramonak/react-progress-bar";
import { useProgress } from "./useProgress";

function Progress() {
  const { currentTime, duration, show } = useProgress();

  return show ? (
    <ProgressBar
      className="sticky top-0 z-50"
      completed={currentTime}
      maxCompleted={duration}
      height="10px"
      borderRadius="0"
      isLabelVisible={false}
      bgColor="#F73100"
      baseBgColor="transparent"
      transitionDuration="0.75s"
      transitionTimingFunction="ease-out"
    />
  ) : (
    <div className="h-[10px]"></div>
  );
}

export default Progress;
