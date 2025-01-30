import { useTranslation } from 'react-i18next';

const Translator = ({ path }: { path: string }) => useTranslation().t(path);

export default Translator;