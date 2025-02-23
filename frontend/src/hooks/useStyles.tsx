import { theme } from 'antd'

const useStyles = () => {
  const { token } = theme.useToken()

  const algorithms = {
    0: 'default',
    1: 'dark',
    2: 'compact',
  };

  return {
    ...token,
    fontWeightLight: 300,
    headerItemHeight: 64,
    smallItemStyle: {
      width: "80px"
    },
    mediumItemStyle: {
      width: "220px"
    },
    bigItemStyle: {
      width: "300px"
    },
    algorithm: algorithms[0],
  }


}

export default useStyles