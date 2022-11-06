import { CirclesWithBar } from 'react-loader-spinner';
export const Loader = () => {
  return <CirclesWithBar
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor=""
  innerCircleColor=""
  barColor=""
  ariaLabel='circles-with-bar-loading'
  speed={90}
/>;
};