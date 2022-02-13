import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    fontFamily: ({ theme }) => theme.fontFamily,
    fontSize: 13,
    boxShadow: ({ theme }) => theme.containerDropShadow,
    borderRadius: ({ theme }) => [
      0,
      0,
      theme.borderRadius ?? 5,
      theme.borderRadius ?? 5,
    ],
    composes: 'rw-container',
    minHeight: '270px',
  },
  main: {
    color: ({ theme }) => theme.locationFontColor,
    width: '100%',
    height: '100%',
    background: ({ theme }) =>
      `linear-gradient(to bottom right, ${theme.gradientStart}, ${theme.gradientMid}, ${theme.gradientEnd})`,
    display: 'flex',
    borderRadius: ({ showForecast, theme }) =>
      showForecast
        ? [[theme.borderRadius ?? 5, theme.borderRadius ?? 5, 0, 0]]
        : theme.borderRadius ?? 5,
    composes: 'rw-container-main',
    minHeight: '270px',
  },
  header: {
    margin: [0, 0, 10, 0],
    fontWeight: '300',
    fontSize: 'x-large',
    letterSpacing: 2,
    composes: 'rw-container-header',
  },
  left: {
    padding: 25,
    width: '60%',
    composes: 'rw-container-left',
  },
  right: {
    // backgroundColor: 'rgba(0,0,0,0.1)',
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    composes: 'rw-container-right',
  },
});

export default useStyles;
