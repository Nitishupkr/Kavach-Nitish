import React from 'react';
import { useThemeContext } from '../../context/theme';
import useCursorStyle from '../../hooks/useCursorStyle';
import useStyledTheme from '../../hooks/useStyledTheme';

const Logo = props => {
  const { buttonProps = {}, ...rootProps } = props;

  const theme = useStyledTheme();
  const [, dispatch] = useThemeContext();
  const {
    addCursorBorder,
    removeCursorBorder,
    addCursorColor,
    resetCursorColor,
  } = useCursorStyle();

  const handleToggleTheme = React.useCallback(
    event => {
      event.preventDefault();
      dispatch({ type: 'TOGGLE_THEME' });

      // reset the cursor color so that it uses the theme text color as default
      addCursorColor(null);
    },
    [dispatch, addCursorColor],
  );

  return (
   
 <svg xmlns="http://www.w3.org/2000/svg" width="500" height="50" viewBox="0 0 200 50">
  <text x="0" y="40" font-family="Franklin Gothic Medium" font-size="64" fill="white">
    kavach</text>
  <path
        role="button"
        d="M98.045 11.358c0 4.162-3.313 7.536-7.4 7.536-4.088 0-7.4-3.374-7.4-7.536 0-4.162 3.312-7.536 7.4-7.536 4.087 0 7.4 3.374 7.4 7.536"
        fill={theme.colors.red}
        onMouseEnter={() => addCursorColor(theme.text)}
        onMouseLeave={resetCursorColor}
        onClick={handleToggleTheme}
        {...buttonProps}
      />
</svg>


    

  );
};

export default Logo;
