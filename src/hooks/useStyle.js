import * as Constants from '../constants'

const useStyle = ({styleKey, currentTheme}) => {
    const getCurrentStyle = Constants.styles[styleKey].path.default;

    return getCurrentStyle(currentTheme);
}

export default useStyle;