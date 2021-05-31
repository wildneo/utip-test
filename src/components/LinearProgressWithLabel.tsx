import React from "react";

import Box from "@material-ui/core/Box";
import LinearProgress, {
  LinearProgressProps
} from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

const LinearProgressWithLabel = (props: LinearProgressProps) => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress === 100 ? 100 : prevProgress + 10
      );
    }, 100);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} value={progress} />
      </Box>
      <Box>
        <Typography
          variant="body2"
          color="textSecondary"
        >{`${progress}%`}</Typography>
      </Box>
    </Box>
  );
};

export default React.memo(LinearProgressWithLabel);
