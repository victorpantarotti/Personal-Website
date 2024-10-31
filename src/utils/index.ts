import { useTranslation } from "react-i18next";

const useTranslator = (path: string) => {
    const { t } = useTranslation();

    return t(path);
};

export {
    useTranslator
}