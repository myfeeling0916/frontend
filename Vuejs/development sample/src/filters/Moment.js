import moment from "moment";

export const Moment = (val, pattern) => {
    return moment(val).format(pattern);
}