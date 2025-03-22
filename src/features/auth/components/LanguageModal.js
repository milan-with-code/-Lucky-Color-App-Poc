import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {
  changeAppLanguage,
  getCurrentLanguage,
} from '../../../utils/languageHelper';
import {languageData} from '../../../data/Data';
import Fonts from '../../../theme/fonts';
import {SvgXml} from 'react-native-svg';
import CustomCheckbox from '../../../components/CustomCheckbox';
import indiaFlag, {EnglishFlag} from '../../../../assets/svg/svgData';

const LanguageModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {i18n} = useTranslation();

  // ✅ Selected language को object के रूप में store करें
  const [selectedLang, setSelectedLang] = useState({
    param: i18n.language,
    language: '',
    flag: '',
  });

  useEffect(() => {
    const loadLang = async () => {
      const currentLang = await getCurrentLanguage();
      const foundLang =
        languageData.find(lang => lang.param === currentLang) ||
        languageData[0];
      setSelectedLang(foundLang);
    };
    loadLang();
  }, []);

  const handleLanguageChange = async langParam => {
    if (!langParam) return;

    const newLang = languageData.find(lang => lang.param === langParam);
    if (!newLang) return;

    changeAppLanguage(langParam);
    setSelectedLang(newLang);
    setIsVisible(false);
  };

  return (
    <>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.languageSelector}
          onPress={() => setIsVisible(true)}>
          <SvgXml
            xml={selectedLang.flag || EnglishFlag}
            width={32}
            height={32}
          />
          <Text style={styles.langText}>
            {' '}
            {selectedLang.language || 'English'}{' '}
          </Text>
        </TouchableOpacity>
      </View>

      <Modal visible={isVisible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={() => setIsVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {languageData.map(language => (
                <TouchableOpacity
                  key={language.param}
                  style={styles.button}
                  onPress={() => handleLanguageChange(language.param)}>
                  <View style={styles.languageRow}>
                    <SvgXml xml={language.flag || ''} width={32} height={32} />
                    <Text style={styles.text}>{language.language}</Text>
                  </View>
                  <CustomCheckbox
                    checked={selectedLang.param === language.param}
                    onChange={() => handleLanguageChange(language.param)}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  languageSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  langText: {
    fontSize: 18,
    fontFamily: Fonts.bold,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#D1D1D1',
    borderBottomWidth: 1,
  },
  languageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: Fonts.medium,
  },
});

export default LanguageModal;
