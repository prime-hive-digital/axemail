import { TemplateEnum } from "@/enums/template-enums";

import TemplateSenderTemp01 from "@/components/senders/template-sender-temp-01";

import Temp01Img from "../../public/images/template-01.png";

export const TEMPLATE_DATA = {
    [TemplateEnum.TEMP01]: {
        id: TemplateEnum.TEMP01,
        title: "USPTO Classification Notice",
        description: "Pursuant to 15 U.S.C...",
        component: TemplateSenderTemp01,
        previewImage: Temp01Img,
    },
};
