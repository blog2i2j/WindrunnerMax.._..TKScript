import utils from "../utils";
import { Website } from "../websites";

const website: Website = {
    regexp: new RegExp(
        [
            "commandlinux",
            "cnki",
            "ruiwen",
            "oh100",
            "fwsir",
            "wenxm",
            "unjs",
            "ahsrst",
            "yjbys",
            "360doc",
            "850500",
            "jianbiaoku",
            "kt250",
            "kejudati",
            "baibeike",
            "yuque",
            "cnrencai",
            "kodiplayer",
        ].join("|")
    ),
    init: function ($) {
        utils.hideButton($);
        utils.enableUserSelect($, "*");
        utils.enableOnCopyByCapture();
    },
};

export default website;
