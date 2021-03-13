import { Checkbox } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledCheckBox = withStyles({
    root: {
        '&$checked': {
            color: '#a974ff',
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default StyledCheckBox;