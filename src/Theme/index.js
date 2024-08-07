import { createTheme } from "@mui/material";
import _ from "lodash";
import { typography } from "./typography";

const baseOptions = {
  typography,
  components: {
    MuiBadge: {
      styleOverrides: {
        badge: {
          top: '22%',
          right: '31%',
        }
      }
    }


  },
};

export const createMuiTheme = (config = {}) => {
  const options = _.merge({}, baseOptions, config);
  const theme = createTheme(_.merge({}, options));

  return theme;
};

