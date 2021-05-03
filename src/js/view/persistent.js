const [MAIN_CLASS_NAME, MAIN_MIDDLE_NAME, MAIN_FOOTER_NAME] = [".main", "middle", "footer"]; 

function selectMainElement(name) {
  const selector = `${MAIN_CLASS_NAME}-${name}`;
  return document.querySelector(MAIN_CLASS_NAME).querySelector(selector);
}

/**
 * Кнопки телефона
 * @returns {HTMLElement}
 */
export function selectPhoneButtons(name) {
  const selector = `${MAIN_CLASS_NAME}-${MAIN_FOOTER_NAME}-button-${name}`;
  return [selectMainElement(MAIN_FOOTER_NAME).querySelector(selector)];
}

/**
 * Объекты video
 * @returns {HTMLElement}
 */
 export function selectVideos(name) {
  //const selector = `${MAIN_CLASS_NAME}-${MAIN_MIDDLE_NAME}-${name}`;
  const selector = name;
  return [selectMainElement(MAIN_MIDDLE_NAME).querySelector(selector)];
}

