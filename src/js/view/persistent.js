const [MAIN_CLASS_NAME, MAIN_HEADER_NAME, MAIN_MIDDLE_NAME, MAIN_FOOTER_NAME] = [".main", "header", "middle", "footer"]; 

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
 * @param {string} name 
 * @returns {HTMLElement}
 */
 export function selectVideos(name) {
  //const selector = `${MAIN_CLASS_NAME}-${MAIN_MIDDLE_NAME}-${name}`;
  const selector = name;
  return [selectMainElement(MAIN_MIDDLE_NAME).querySelector(selector)];
}

/**
 * Индикаторы онлайн-статуса
 * @param {string} name 
 * @returns {HTMLElement}
 */
export function selectNetStatusElements(name) {
  const selector = `${MAIN_CLASS_NAME}-${MAIN_HEADER_NAME}-${name}`;
  return [selectMainElement(MAIN_HEADER_NAME).querySelector(selector)];
}